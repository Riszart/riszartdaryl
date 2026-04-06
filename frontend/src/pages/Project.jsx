import { Button } from "../components/Button.jsx"
import { HeaderCardSection } from "../components/CardTec.jsx"
import { IconTrip , IconEducation } from "../components/icon"
import imgNoDisponible from "../assets/img/img-not-diponible.webp"


import { useState , useEffect } from "react"

import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'vaxqnoqa',
  dataset: 'production',
  useCdn: true, 
  apiVersion: '2026-03-25',
})

import { FaGithub } from "react-icons/fa";

import { HiExternalLink } from "react-icons/hi";
export function Project(){

const [proyectos, setProyectos] = useState([])

  useEffect(() => {
    document.title = "Proyectos | Riszart Daryl";
  }, []);

  useEffect(() => {
    client.fetch(`*[_type == "project"]{
      id,
      title,
      description,
      visible,
      "imageUrl": image.asset->url,
      link,
      linkRepository,
      year,
      atribute
    }`).then((data) => {
      const ordData = [...data].sort((a,b)=>b.id - a.id)
      setProyectos(ordData)
    })
  }, [])

  return (
    <main className="p-5 pb-30 md:max-w-200 w-full">
      <div className="sm:h-20 md:h-0"></div>
      <section className="mb-5">
        <span className="uppercase text-cyber-green">portafolio</span>
        <h2 className="capitalize text-5xl md:text-7xl font-bold mb-6 font-orbitron">mis <span className="mt-2 bg-linear-to-r from-cyber-green via-cyber-white to-cyber-skyblue bg-clip-text text-transparent drop-shadow-[0_0_30px_var(--color-cyber-green-shadow)]">proyectos</span></h2>
        <p className="text-gray-400 leading-relaxed">Una selección de aplicaciones web donde aplico tecnologías modernas para resolver problemas reales con código eficiente y escalable.</p>
      </section>
      <div className="flex flex-col">
        <a href="../public/pdf/cv-riszart-daryl-vergara-cajacuri.pdf" download='cv-riszart-daryl-vergara-cajacuri.pdf'>
          <Button text={"descargar cv (pdf)"}/>
        </a>
      </div>
      <section className="">
        <HeaderCardSection nameSection={"proyectos recientes"} icon={<IconTrip/>}/>
        <section className="flex border-l border-cyber-green flex-col pl-5 gap-5">
          {proyectos.map((proj)=>{
            // console.log(proj.imageUrl)
            if (proj.visible === false) return null;
            return (
              <article key={`${proj.id}`} className="border border-gray-100/50 p-5 rounded-xl relative">
                <span className="block absolute rounded-full h-5 aspect-square bg-amber-100 -left-8 mt-2"></span>
                <div className="bg-black h-50"><img className=" object-contain w-full h-full" src={proj.imageUrl || imgNoDisponible} alt={proj.title} /></div>
                <h5 className="capitalize text-white font-bold mb-3 mt-1 text-2xl">{proj.title}</h5>
                <strong className="bg-cyber-green/20 rounded-sm border border-cyber-green text-cyber-green px-3 py-1">{proj.year}</strong>
                <p className="text-gray-100/70 mt-4">{proj.description}</p>
                <div className="mt-4 flex gap-2 flex-wrap">
                  {proj.atribute.map((i)=> <span key={`${proj.id}-${i}`} className="bg-gray-100/20 px-2 py-1 rounded-sm border border-gray-100/50">{i}</span>)}
                </div>
                <div className="mt-5 flex gap-4 border-t border-gray-100/10 pt-4">
                  {proj.linkRepository && (
                    <a 
                      href={proj.linkRepository} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-400 hover:text-cyber-green transition-colors group"
                    >
                      <FaGithub className="text-lg" />
                      <span className="text-xs font-bold uppercase tracking-tighter">Repositorio</span>
                    </a>
                  )}

                  {proj.link && (
                    <a 
                      href={proj.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-400 hover:text-cyber-skyblue transition-colors"
                    >
                      <HiExternalLink className="text-lg" />
                      <span className="text-xs font-bold uppercase tracking-tighter">Sitio Web</span>
                    </a>
                  )}
                </div>
              </article>
            )
          })}
        </section>
      </section>
    </main>
  )
}