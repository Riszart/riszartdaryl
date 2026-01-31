import { Button } from "../components/Button";

export function Home(){
  const ArrowIcon= (<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg>)
  const Download = (<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"/></svg>)

  return (
    <main className="min-h-screen box-content pl-5 pr-5 flex flex-col justify-center gap-10">
      <div><strong className="tracking-[3px] p-2 text-xs inline text-cyber-green uppercase shadow-[0_0_15px_5px_rgba(34,197,94,0.4)] rounded-md">system online</strong></div>
      <h1 className="text-6xl uppercase font-bold">fullstack <span className="mt-2 block bg-linear-to-r from-cyber-green via-cyber-white to-cyber-skyblue bg-clip-text text-transparent drop-shadow-[0_0_30px_var(--color-cyber-green-shadow)]">developer</span></h1>
      <p className="border-l border-cyber-green pl-2">Desarrollador web con tegnologias como react.js css html javasctip</p>
      <Button text={'view projects'} icon={ArrowIcon}/>
      <Button text={'download cv'} icon={Download} variant={"secondary"}/>
    </main>
  )
}