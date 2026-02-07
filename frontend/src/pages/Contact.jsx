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
      <header></header>
      <h1 className="text-4xl capitalize font-medium">let's connect</h1>
      <p className="text-gray-100/40 py-8">Have a project in mind? I'm avalible for frrelance work and full-time positions</p>
      {/* <section className="flex flex-col gap-4">
        <article className="flex gap-2 items-center">
          <div className="h-12 aspect-square text-cyber-green bg-gray-100/20 p-2 rounded-md" >
            <IconMail/>
          </div>
          <div>
            <strong className="uppercase font-normal text-gray-100/50">email address</strong>
            <h6>{mailRevealed ? atob(encodedEmail) : "Click to reveal email"}</h6>
          </div>
        </article>
        <article className="flex gap-2 items-center">
          <div className="h-12 aspect-square text-cyber-green bg-gray-100/20 p-2 rounded-md" >
            <IconPhone/>
          </div>
          <div>
            <strong className="uppercase font-normal text-gray-100/50">phone number</strong>
            <h6>{phoneRevealed ? atob(encodedPhone) : "Click to reveal phone"}</h6>
          </div>
        </article>
        <article className="flex gap-2 items-center">
          <div className="h-12 aspect-square text-cyber-green bg-gray-100/20 p-2 rounded-md" >
            <IconLocation/>
          </div>
          <div>
            <strong className="uppercase font-normal text-gray-100/50">location</strong>
            <h6>Peru, Lima</h6>
          </div>
        </article>
      </section> */}
      <Form/>

      <section className="flex gap-4 my-10 text-gray-100/60">
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
    </main>
  )
}