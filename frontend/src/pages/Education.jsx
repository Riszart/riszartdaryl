import { useState, useEffect } from "react"
import { client } from "../client/sanity"
import { HeaderCardSection } from "../components/CardTec"

import { IconEducation } from "../components/icon"
import { Button } from "../components/Button"


export function Education(){

const [education, setEducation] = useState([])

  useEffect(() => {

    client.fetch(`*[_type == "education"]{
      id,
      title,
      institute,
      year,
      description,
      "imageUrl": image.asset->url,
    }`).then((data) => {
      const ordData = [...data].sort((a,b)=>b.id - a.id)
      setEducation(ordData)
    })
  }, [])

  return (
    <main className="p-5 pb-30 md:max-w-200 w-full">
      <section className="mb-5">
        <span className="uppercase text-cyber-green" >educación</span>
        <h2 className="capitalize text-5xl md:text-7xl font-bold mb-6 font-orbitron">mis <span className="mt-2 bg-linear-to-r from-cyber-green via-cyber-white to-cyber-skyblue bg-clip-text text-transparent drop-shadow-[0_0_30px_var(--color-cyber-green-shadow)]">estudios</span></h2>
        <p className="text-gray-400 leading-relaxed max-w-lg ">Mi recorrido académico y técnico, centrado en el dominio de tecnologías modernas para crear aplicaciones robustas y escalables.</p>
      </section>
      <div className="flex flex-col">
        <a href="../public/pdf/cv-riszart-daryl-vergara-cajacuri.pdf" download='cv-riszart-daryl-vergara-cajacuri.pdf'>
          <Button text={"descargar CV (pdf)"}/>
        </a>
      </div>
      <section className="">
        <HeaderCardSection nameSection={"educación"} icon={<IconEducation/>}/>
        <section className="flex border-l border-cyber-green flex-col pl-5 gap-5">
          {education.map((item)=>{
            return (
              <article key={`edu-${item.id}`} className="border border-gray-100/50 p-5 rounded-xl relative">
                <span className="block absolute rounded-full h-5 aspect-square bg-amber-100 -left-8"></span>
                <h5 className="capitalize text-white font-bold mb-3 mt-1 text-2xl">{item.title}</h5>
                <strong className="bg-cyber-green/20 rounded-sm border border-cyber-green text-cyber-green px-3 py-1">{item.year}</strong>
                <p className="text-gray-100/70 mt-4">{item.description}</p>
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