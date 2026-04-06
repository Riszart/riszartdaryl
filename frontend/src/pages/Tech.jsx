import { CardSkill, HeaderCardSection } from "../components/CardTec.jsx"
import {IconTools, IconNewsMode,IconStorage} from "../components/icon.jsx"

import { useEffect, useState } from "react" 

import { client } from "../client/sanity.js"

export function Tech(){

  const [tech, setTech] = useState([])
  const [category, setCategory] = useState([])
  
  useEffect(() => {
    client.fetch(`*[_type == "tech"]{
      id,
      name,
      area,
      description,
      "imageUrl": image.asset->url,
    }`).then((data) => {
      console.log(data)
      setTech(data)
      const newData = [...new Set(data.map((i)=>i.area))]
      console.log(newData)
      setCategory(newData)
    })
  }, [])

  return (
    <main className="p-5 pb-30 md:max-w-200 w-full">
      <div className="sm:h-20 md:h-0"></div>
      {/* <header className="text-center absolute top-0 w-full left-0 border-b border-gray-100/40 flex justify-center">
        <div className="w-10 aspect-square absolute border border-cyber-green/50 left-0 rounded-xl"></div>
        <h1 className="uppercase font-semibold -tracking-tighter text-2xl py-5">tech stack</h1>
      </header> */}
      <section className="flex flex-col mt-0">
        <div className="flex items-center gap-2">
          <h2 className="uppercase text-cyber-green">MI STACK TECNOLÓGICO</h2>
        </div>
        <div className="capitalize text-5xl md:text-7xl font-bold mb-6 font-orbitron">
          <p className="md:inline md:pr-4">Mi Arsenal</p>
          <span className=" mt-2 bg-linear-to-r from-cyber-green via-cyber-white to-cyber-skyblue bg-clip-text text-transparent drop-shadow-[0_0_30px_var(--color-cyber-green-shadow)]">Digital</span>
        </div>
        <div>
          <p className="text-gray-400 leading-relaxed">Una selección especializada de herramientas, librerías y lenguajes que utilizo para construir aplicaciones web escalables y de alto rendimiento.</p>
        </div>
      </section>
      <HeaderCardSection nameSection={"frontend"} icon={<IconNewsMode/>}/>
      <section className="grid grid-cols-[repeat(auto-fill,minmax(120px,1fr))] gap-6">
        {tech.map((item)=>{
          if(item.area === 'Frontend'){
            return <CardSkill key={item.id} name={item.name}/>
          }
          return null
        })}
      </section>
      <HeaderCardSection nameSection={"backend"} icon={<IconStorage/>}/>
      <section className="grid grid-cols-[repeat(auto-fill,minmax(120px,1fr))] gap-6">
        {tech.map((item)=>{
          if(item.area === 'Backend'){
            return <CardSkill key={item.id} name={item.name} />
          }
          return null
        })}
      </section>
      <HeaderCardSection nameSection={"Herramientas & Diseño"} icon={<IconTools/>}/>
      <section className="grid grid-cols-[repeat(auto-fill,minmax(120px,1fr))] gap-6">
        {tech.map((item)=>{
          if(item.area === 'Herramienta de Desarrollo'){
            return <CardSkill key={item.id} name={item.name} />
          }
          return null
        })}
      </section>
      <HeaderCardSection nameSection={"Gestión de Datos"} icon={<IconTools/>}/>
      <section className="grid grid-cols-[repeat(auto-fill,minmax(120px,1fr))] gap-6">
        {tech.map((item)=>{
          if(item.area === 'Gestión de Datos'){
            return <CardSkill key={item.id} name={item.name} />
          }
          return null
        })}
      </section>
      <HeaderCardSection nameSection={"Infraestructura / DevOps"} icon={<IconTools/>}/>
      <section className="grid grid-cols-[repeat(auto-fill,minmax(120px,1fr))] gap-6">
        {tech.map((item)=>{
          if(item.area === 'Entorno de Desarrollo'){
            return <CardSkill key={item.id} name={item.name} />
          }
          return null
        })}
      </section>
    </main>
  )
}