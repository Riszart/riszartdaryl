import { IconMail, IconLocation, IconPhone, IconWhatsApp, IconGithub, IconYoutubeMusic} from "../components/icon.jsx"
import { Button } from "../components/Button.jsx"
import { Form } from "../components/Form.jsx"
import { useState } from "react"

export function Contact(){
  const encodedEmail = "MjIuci5kLnYuYy4xMkBnbWFpbC5jb20="; 
  const encodedPhone = "KzUxIDkyMyAyMzIgODcw";

  const [mailRevealed, setMailRevealed] = useState(false);
  const [phoneRevealed, setPhoneRevealed] = useState(false);
  const [isForm, setIsform] = useState(false)

  function revealAndAction(encoded, type){
    const decoded = atob(encoded);
    if(type === 'email'){
      window.location.href = `mailto:${decoded}`;
      setMailRevealed(true);
    } else if(type === 'phone'){
      window.location.href = `tel:${decoded.replace(/\s/g, '')}`;
      setPhoneRevealed(true);
    }
  }

  return (
    <main className="p-5 pb-30 md:max-w-200 w-full">
      <section className="mb-15">
        <span className="uppercase text-cyber-green">CONTACTO</span>
        <h2 className="mt-5 capitalize text-5xl font-bold mb-6 font-orbitron"> <span className="md:text-7xl mt-2 bg-linear-to-r from-cyber-green via-cyber-white to-cyber-skyblue bg-clip-text text-transparent drop-shadow-[0_0_30px_var(--color-cyber-green-shadow)]">¡Hablemos!</span></h2>
        <p className="text-gray-400 leading-relaxed max-w-lg">¿Tienes un proyecto en mente? Estoy disponible para trabajos freelance y posiciones de tiempo completo.</p>
      </section>

      <section className="flex flex-col gap-4">
        <article className="">
          <section className="flex gap-4 items-center">
            <div className="h-12 aspect-square text-cyber-green bg-gray-100/20 p-2 rounded-md drop-shadow-[0_0_5px_var(--color-cyber-green)]" >
              <IconMail />
            </div>
            <div className="flex flex-col items-start">
              <strong className="uppercase font-normal text-gray-100/50 text-xs">CORREO</strong>
              <h6 onClick={()=>{setIsform(!isForm)}} className="text-sm">{mailRevealed ? atob(encodedEmail) : "Haz clic para ver"}</h6>
            </div>            
          </section>
          <section>
                    <Form className={ `transition-all duration-500 
          ${isForm 
            ? 'max-h-[600px] my-5 border p-4 border-green-500 rounded-lg opacity-100 scale-100 pointer-events-auto"' 
            : 'max-h-0 p-0 m-0 opacity-0 scale-95 pointer-events-none'}`}/>
          </section>
        </article>

        <article className="flex gap-4 items-center">
          <div className="h-12 aspect-square text-cyber-green bg-gray-100/20 p-2 rounded-md drop-shadow-[0_0_5px_var(--color-cyber-green)]" >
            <IconPhone/>
          </div>
          <div className="flex flex-col items-start">
            <strong className="uppercase font-normal text-gray-100/50 text-xs">TELÉFONO</strong>
            <h6 onClick={()=>{setPhoneRevealed(!phoneRevealed)}} className="text-sm">{phoneRevealed ? atob(encodedPhone) : "Haz clic para ver"}</h6>
          </div>
        </article>

        <article className="flex gap-4 items-center">
          <div className="h-12 aspect-square text-cyber-green bg-gray-100/20 p-2 rounded-md drop-shadow-[0_0_5px_var(--color-cyber-green)]" >
            <IconLocation/>
          </div>
          <div className="flex flex-col items-start">
            <strong className="uppercase font-normal text-gray-100/50 text-xs">UBICACIÓN</strong>
            <h6 className="text-sm">Peru, Lima</h6>
          </div>
        </article>
      </section>

      <section className="flex gap-4 mt-10 text-gray-100/60">
        <div className="h-12 aspect-square border rounded-md p-2 hover:scale-110">
          <a href="https://wa.me/+51923232870" target="_blank"><IconWhatsApp/></a>
        </div>

        <div className="h-12 aspect-square border rounded-md p-2 hover:scale-110">
          <a href="https://github.com/Riszart" target="_blank"><IconGithub/></a>
        </div>
      </section>

    </main>
  )
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                