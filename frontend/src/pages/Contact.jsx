import { IconMail, IconLocation, IconPhone, IconWhatsApp, IconGithub, IconYoutubeMusic} from "../components/icon.jsx"
import { Button } from "../components/Button.jsx"
import { Form } from "../components/Form.jsx"
import { useState } from "react"

export function Contact(){
  const encodedEmail = "MjIuci5kLnYuYy4xMkBnbWFpbC5jb20="; 
  const encodedPhone = "KzUxIDkyMyAyMzIgODcw";

  const [mailRevealed, setMailRevealed] = useState(false);
  const [phoneRevealed, setPhoneRevealed] = useState(false);

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
    <main className="m-5 mb-40">
      <section className="mb-5">
        <span className="uppercase text-cyber-green">CONTACTO</span>
        <h2 className="mt-5 capitalize text-6xl font-bold mb-6"> <span className="mt-2 bg-linear-to-r from-cyber-green via-cyber-white to-cyber-skyblue bg-clip-text text-transparent drop-shadow-[0_0_30px_var(--color-cyber-green-shadow)]">¡Hablemos!</span></h2>
        <p className="text-gray-400 leading-relaxed max-w-lg">¿Tienes un proyecto en mente? Estoy disponible para trabajos freelance y posiciones de tiempo completo.</p>
      </section>

      <section className="flex flex-col gap-2">
        <article className="flex gap-2 items-center">
          <div className="h-8 aspect-square text-cyber-green bg-gray-100/20 p-2 rounded-md" >
            <IconMail />
          </div>
          <div>
            <strong className="uppercase font-normal text-gray-100/50 text-xs">CORREO</strong>
            <h6 className="text-sm">{mailRevealed ? atob(encodedEmail) : "Haz clic para ver"}</h6>
          </div>
        </article>
        <article className="flex gap-2 items-center">
          <div className="h-8 aspect-square text-cyber-green bg-gray-100/20 p-2 rounded-md" >
            <IconPhone/>
          </div>
          <div>
            <strong className="uppercase font-normal text-gray-100/50 text-xs">TELÉFONO</strong>
            <h6 className="text-sm">{phoneRevealed ? atob(encodedPhone) : "Haz clic para ver"}</h6>
          </div>
        </article>
        <article className="flex gap-2 items-center">
          <div className="h-8 aspect-square text-cyber-green bg-gray-100/20 p-2 rounded-md" >
            <IconLocation/>
          </div>
          <div>
            <strong className="uppercase font-normal text-gray-100/50 text-xs">UBICACIÓN</strong>
            <h6 className="text-sm">Peru, Lima</h6>
          </div>
        </article>
      </section>

      <section className="flex gap-4 my-6 text-gray-100/60">
        <div className="h-10 aspect-square border rounded-md p-2">
          <a href="https://wa.me/+51923232870" target="_blank"><IconWhatsApp/></a>
        </div>
        <div className="h-10 aspect-square border rounded-md p-2">
          <a href="https://music.youtube.com/playlist?list=PL0Yt0mEJED9JdP5vXRqu85XAyeI78wjKV&si=ElsED70ViRXdlBhe" target="_blank"><IconYoutubeMusic/></a>
        </div>
        <div className="h-10 aspect-square border rounded-md p-2">
          <a href="https://github.com/Riszart" target="_blank"><IconGithub/></a>
        </div>
      </section>

      <Form/>
    </main>
  )
}