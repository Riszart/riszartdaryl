import { Button } from "./Button"

import { useState } from "react"

export function Form(){
	const [honeypot,setHoneypot] = useState("")

	const [data,setData] = useState({
		name:"",
		email:"",
		cell:"",
		message:""
	})

	function enviarForm(event){
		event.preventDefault()
		if(honeypot){
			console.log("Formulario enviado por un bot")
			return
		}
		console.log("Formulario enviado por un humano")
		console.log(data)
	}

	const inputEstilos = "h-15 border border-cyber-green focus:border-cyber-skyblue focus:outline-none p-2 rounded-md"
	const textareaEstilos = "h-30 border border-cyber-green focus:border-cyber-skyblue focus:outline-none rounded-md p-2 resize-none"
	const labelEstilos = "uppercase text-sm font-medium pb-2"
	const divEstilos = "flex flex-col"

	return (
		<form onSubmit={enviarForm} className="flex flex-col gap-4">
			<div className="opacity-0 absolute -z-10 w-0 h-0 overflow-hidden">
				<input autoComplete="off" type="text" onChange={(e)=>{setHoneypot(e.target.value)}}/>	
			</div>
			<div className={divEstilos}>
				<label className={labelEstilos} htmlFor="name">name</label>
				<input className={`capitalize ${inputEstilos}`} autoComplete="off" id="name" type="text" onChange={(e)=>{setData({...data,name:e.target.value})}} placeholder="riszart daryl" required/>	
			</div>
			<div className={divEstilos}>
				<label className={labelEstilos} htmlFor="email">email</label>
				<input className={inputEstilos} autoComplete="off" id="email" type="email" onChange={(e)=>{setData({...data,email:e.target.value})}} placeholder="riszart@example.com" required/>	
			</div>
			<div className={divEstilos}>
				<label className={labelEstilos} htmlFor="numero">cell</label>
				<input className={inputEstilos} autoComplete="off" id="numero" type="number" onChange={(e)=>{setData({...data,cell:e.target.value})}} placeholder="987 654 321" required/>	
			</div>
			<div className={divEstilos}>
				<label className={labelEstilos} htmlFor="message">message</label>
				<textarea className={textareaEstilos} autoComplete="off" id="message" onChange={(e)=>{setData({...data,message:e.target.value})}} placeholder="Tell me about your project ..." required/>	
			</div>
			<Button type='submit'  text={'send message'}/>
		</form>
	)
}
