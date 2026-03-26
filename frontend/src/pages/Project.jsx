import { Button } from "../components/Button.jsx"
import { HeaderCardSection } from "../components/CardTec.jsx"
import { IconTrip , IconEducation } from "../components/icon"

import { useState } from "react"
import { useEffect } from "react"

import { createClient } from '@sanity/client'

  const client = createClient({
    projectId: 'vaxqnoqa',
    dataset: 'production',
    useCdn: true, 
    apiVersion: '2026-03-25',
  })

export function Project(){

const [proyectos, setProyectos] = useState([])
const [education, setEducation] = useState([])

  useEffect(() => {
    client.fetch(`*[_type == "project"]{
      id,
      title,
      description,
      "imageUrl": image.asset->url,
      link,
      linkRepository,
      year,
      atribute
    }`).then((data) => {
      const ordData = [...data].sort((a,b)=>b.id - a.id)
      setProyectos(ordData)
    })

    client.fetch(`*[_type == "education"]{
      id,
      title,
      institute,
      year,
      description,
      "imageUrl": image.asset->url,
    }`).then((data) => {
      setEducation(data)
    })
  }, [])

  return (
    <main className="p-5 pb-30">
      <section className="mb-5">
        <span className="uppercase text-cyber-green">skills & tools</span>
        <h2 className="capitalize text-6xl font-bold mb-6">my <span className="mt-2 bg-linear-to-r from-cyber-green via-cyber-white to-cyber-skyblue bg-clip-text text-transparent drop-shadow-[0_0_30px_var(--color-cyber-green-shadow)]">journey</span></h2>
        <p>a timeline of my professional experience in building scalable fullstack aplications and my educational background</p>
      </section>
      <div className="flex flex-col">
        <a href="../public/pdf/cv-riszart-daryl-vergara-cajacuri.pdf" download='cv-riszart-daryl-vergara-cajacuri.pdf'>
          <Button text={"downloadCV (pdf)"}/>
        </a>
      </div>
      <section className="">
        <HeaderCardSection nameSection={"experience"} icon={<IconTrip/>}/>
        <section className="flex border-l border-cyber-green flex-col pl-5 gap-5">
          {proyectos.map((proj)=>{
            return (
              <article key={`${proj.id}`} className="border border-gray-100/50 p-5 rounded-xl relative">
                <span className="block absolute rounded-full h-5 aspect-square bg-amber-100 -left-8"></span>
                <h5 className="capitalize text-white font-bold mb-3 mt-1 text-2xl">{proj.title}</h5>
                <strong className="bg-cyber-green/20 rounded-sm border border-cyber-green text-cyber-green px-3 py-1">{proj.year}</strong>
                <p className="text-gray-100/70 mt-4">{proj.description}</p>
                <div className="mt-4 flex gap-2 flex-wrap">
                  {proj.atribute.map((i)=> <span key={`${proj.id}-${i}`} className="bg-gray-100/20 px-2 py-1 rounded-sm border border-gray-100/50">{i}</span>)}
                </div>
              </article>
            )
          })}
        </section>
        <HeaderCardSection nameSection={"education"} icon={<IconEducation/>}/>
        <section className="flex border-l border-cyber-green flex-col pl-5 gap-5">
          {education.map((item)=>{
            return (
              <article key={`edu-${item.id}`} className="border border-gray-100/50 p-5 rounded-xl relative">
                <span className="block absolute rounded-full h-5 aspect-square bg-amber-100 -left-8"></span>
                <h5 className="capitalize text-white font-bold mb-3 mt-1 text-2xl">{item.title}</h5>
                <strong className="bg-cyber-green/20 rounded-sm border border-cyber-green text-cyber-green px-3 py-1">{item.year}</strong>
                <p className="text-gray-100/70 mt-4">descriptas dsdasd asdasdas asd asdasd adas asda sdasd asdas dasdaasdasdaso</p>
                <div className="mt-4 flex gap-2 flex-wrap">
                  {/* <span className="bg-gray-100/20 px-2 py-1 rounded-sm border border-gray-100/50">htmsads l</span> */}
                </div>
              </article>
            )
          })}
        </section>
      </section>
    </main>
  )
}