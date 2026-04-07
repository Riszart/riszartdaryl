import { Button } from "./Button"

import { useState } from "react"

export function Form({className}){
	const [honeypot,setHoneypot] = useState("")

	const [data,setData] = useState({
		name:"",
		email:"",
		cell:"",
		message:""
	})

	async function enviarForm(event){
		event.preventDefault()
		if(honeypot){
			// console.log("Formulario enviado por un bot")
			return
		}
		// console.log("Formulario enviado por un humano")

		//--- form netlify

		const body = new URLSearchParams({
			"form-name": "contacto-nuevo",
      "nombre": data.name,
      "email": data.email,
      "celular": data.cell,
      "mensaje": data.message,
      "isBot": honeypot // opcional
		}).toString();

		fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: body,
  	})
    .then(() => {
      alert("¡Mensaje enviado correctamente!")
			// setData({name:"", email:"", cell:"", message:""});
    })
		.then(() => {
			setData({name:"", email:"", cell:"", message:""});
    })
    .catch((error) => alert("Error al enviar: " + error));
		//---
	}

	const inputEstilos = "h-15 border border-cyber-green/30 focus:border-cyber-skyblue focus:outline-none p-2 rounded-md"
	const textareaEstilos = "h-30 border border-cyber-green/30 focus:border-cyber-skyblue focus:outline-none rounded-md p-2 resize-none"
	const labelEstilos = "uppercase text-sm font-medium pb-2"
	const divEstilos = "flex flex-col"

	return (
		<form 
			onSubmit={enviarForm} 
			name="contacto-nuevo" 
  		data-netlify="true" 
			className={`flex flex-col gap-4  overflow-hidden ${className}`}>
			<div className="opacity-0 absolute -z-10 w-0 h-0 overflow-hidden">
				<input type="hidden" name="form-name" value="contacto-nuevo" />
				<input name="isBot" autoComplete="off" type="text" onChange={(e)=>{setHoneypot(e.target.value)}}/>	
			</div>
			<div className={divEstilos}>
				<label className={labelEstilos} htmlFor="name">nombre</label>
				<input  
					className={`capitalize ${inputEstilos}`}
					autoComplete="off"
					id="nombre"
					type="text"
					
					//--- form netlify
					name="nombre"
					value={data.name}
					//---

					onChange={(e)=>{setData({...data,name:e.target.value})}}
					placeholder="riszart daryl" required/>	
			</div>
			<div className={divEstilos}>
				<label className={labelEstilos} htmlFor="email">CORREO ELECTRÓNICO</label>
				<input
					className={inputEstilos}
					autoComplete="off"
					id="email"

					//--- form netlify
					name="email"
					value={data.email}
					//---

					type="email"
					onChange={(e)=>{setData({...data,email:e.target.value})}}
					placeholder="riszart@example.com" required/>	
			</div>
			<div className={divEstilos}>
				<label className={labelEstilos} htmlFor="numero">CELULAR</label>
				<input
					className={inputEstilos}
					autoComplete="off"
					id="celular"
					type="tel"

					//--- form netlify
					name="celular"
					value={data.cell}
					//---

					onChange={(e)=>{setData({...data,cell:e.target.value})}}
					placeholder="+51 987 654 321" required/>	
			</div>
			<div className={divEstilos}>
				<label className={labelEstilos} htmlFor="message">mensaje</label>
				<textarea
					className={textareaEstilos}
					autoComplete="off"
					id="mensaje"
					
					//--- form netlify
					name="mensaje"
					value={data.message}
					//---

					onChange={(e)=>{setData({...data,message:e.target.value})}}
					placeholder="Cuéntame sobre tu proyecto..." required/>	
			</div>
			<Button type='submit'  text={'enviar mensaje'}/>
		</form>
	)
}
