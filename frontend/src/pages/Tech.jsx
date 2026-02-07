import { CardSkill, HeaderCardSection } from "../components/CardTec.jsx"
import {IconTools, IconNewsMode,IconStorage} from "../components/icon.jsx"

export function Tech(){
  return (
    <main className="m-5 pb-30">
      {/* <header className="text-center absolute top-0 w-full left-0 border-b border-gray-100/40 flex justify-center">
        <div className="w-10 aspect-square absolute border border-cyber-green/50 left-0 rounded-xl"></div>
        <h1 className="uppercase font-semibold -tracking-tighter text-2xl py-5">tech stack</h1>
      </header> */}
      <section className="flex flex-col mt-0">
        <div className="flex items-center gap-2">
          <span className="block w-10 border-b border-cyber-green"></span>
          <h2 className="uppercase text-cyber-green">skills & tools</h2>
        </div>
        <div className="capitalize text-6xl font-bold mb-6">
          <p>my digital</p>
          <span className="mt-2 bg-linear-to-r from-cyber-green via-cyber-white to-cyber-skyblue bg-clip-text text-transparent drop-shadow-[0_0_30px_var(--color-cyber-green-shadow)]">arsenal</span>
        </div>
        <div>
          <p className="text-gray-100/40">A curated list of technologies I use to build scalable, high-performance web applications</p>
        </div>
      </section>
      <HeaderCardSection nameSection={"frontend"} icon={<IconNewsMode/>}/>
      <section className="grid grid-cols-2 gap-6">
        <CardSkill name={"html"} description={"dsadsdawsd"}/>
        <CardSkill name={"html"} description={"dsadsdawsd"}/>
      </section>
      <HeaderCardSection nameSection={"backend"} icon={<IconStorage/>}/>
      <section className="grid grid-cols-2 gap-6">
        <CardSkill name={"html"} description={"dsadsdawsd"}/>
        <CardSkill name={"html"} description={"dsadsdawsd"}/>
      </section>
      <HeaderCardSection nameSection={"Tools"} icon={<IconTools/>}/>
      <section className="grid grid-cols-2 gap-6">
        <CardSkill name={"html"} description={"dsadsdawsd"}/>
        <CardSkill name={"html"} description={"dsadsdawsd"}/>
      </section>
    </main>
  )
}