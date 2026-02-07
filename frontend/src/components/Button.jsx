export function Button({icon,text,variant='primary'}){
  const variants = {
    primary:"bg-cyber-green/90 font-extrabold active:bg-cyber-skyblue active:shadow-neon active:shadow-neon-blue active:text-white",
    secondary:" bg-black text-white/80 border border-cyber-green active:border-cyber-skyblue active:shadow-neon-blue active:text-white",
  }
  return (
    <>
      <button className={`flex gap-2 justify-center outline-none uppercase text-black p-2 font-bold tracking-[1px] rounded-md pt-3 pb-3 ${variants[variant]}`}>{text}{icon}</button>
    </>
  )
}

export function ButtonIcon(){
  return (
    <>
      <button></button>
    </>
  )
}