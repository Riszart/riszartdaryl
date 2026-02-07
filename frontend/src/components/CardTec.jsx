export function CardSkill({name, description}){
  const styleType = `p-4 flex flex-col gap-4 items-start rounded-2xl border-cyber-green/30 border`
  return (
    <div className={styleType}>
      <div className="w-15 h-15 bg-cyber-green/10 rounded-xl"></div>
      <h3 className="capitalize text-2xl font-bold">{name}</h3>
      <p className="text-gray-100/40 capitalize">{description}</p>
    </div>
  )
}

export function HeaderCardSection({nameSection ,icon}){
  return (
    <div className="my-6 flex items-center gap-2 text-cyber-green">
      <div className="h-10 aspect-square ">{icon}</div>
      <strong className="uppercase text-xl font-medium">{nameSection}</strong>
      <span className="block w-full border-b border-cyber-green/50"></span>
    </div>
  )
}