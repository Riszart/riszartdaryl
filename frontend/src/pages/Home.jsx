import { Button } from "../components/Button";
import { NavLink } from "react-router-dom"
import { useEffect,useState } from "react";

export function Home(){
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {setIsVisible(true)}, [])

  useEffect(() => {document.title = "Inicio | Riszart Daryl"}, []);

  const ArrowIcon= (<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg>)
  const Download = (<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"/></svg>)

  return (
    <>
      <main className={`min-h-screen box-content pl-5 pr-5 flex flex-col justify-center sm:items-center gap-10 relative transition-opacity duration-700 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'} p-5 pb-30`}>
        {/* <div className="h-40 w-40 absolute inset-0 top-5 mx-auto ">
          <img src={logo} alt="" className=""/>
        </div> */}
        <div>
          <strong className="tracking-[3px] p-2 text-xs inline text-cyber-green uppercase shadow-[0_0_15px_5px_rgba(34,197,94,0.4)] rounded-md">system online</strong>
        </div>

        <h1 className="text-4xl sm:text-7xl uppercase font-bold text-center font-orbitron">fullstack
          <span className="mt-2 block  bg-linear-to-r from-cyber-green via-cyber-white to-cyber-skyblue bg-clip-text text-transparent drop-shadow-[0_0_30px_var(--color-cyber-green-shadow)]">developer</span>
        </h1>
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">@ Frontend Focused</p>
        
        <p className="border-l border-cyber-green pl-2 text-white/50 text-justify sm:w-3/4 sm:text-lg">
        Transformo ideas en productos digitales de alto rendimiento. Mi enfoque combina la lógica avanzada de JavaScript y React con la precisión estética de Tailwind CSS. Como Fullstack, entiendo la arquitectura completa de una aplicación, pero mi pasión es construir interfaces donde el diseño y la funcionalidad convergen.</p>
        <div className="flex gap-10 flex-col sm:flex-row">
          <NavLink to={'/Project'}>
            <Button text={'ver proyectos'} icon={ArrowIcon} />
          </NavLink>
          <a href="/pdf/cv-riszart-daryl-vergara-cajacuri.pdf" download='cv-riszart-daryl-vergara-cajacuri.pdf'>
            <Button text={'descargar cv'} icon={Download} variant={"secondary"}/>
          </a>
        </div>
        <div className="h-10"></div>
      </main>    
    </>
  )
}