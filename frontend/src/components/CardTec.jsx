import { 
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoJavascript,
  IoLogoDocker
} from "react-icons/io5";

import { 
  SiTailwindcss,
  SiPug,
  SiVite,
  SiSanity,
  SiMysql,
} from "react-icons/si";

import { 
  FaSass,
  FaReact,
  FaPython,
  FaGithub,
  FaFigma,
  FaGitAlt,
  FaLinux,
} from "react-icons/fa";

export function CardSkill({ name, description,icon }) {
  const styleType = `
    p-4 flex flex-col gap-3 rounded-xl border border-cyber-green/20 
    bg-gradient-to-b from-gray-900/50 to-black
    transition-all duration-300 ease-out
    hover:border-cyber-green hover:shadow-[0_0_20px_rgba(0,255,0,0.15)] 
    hover:-translate-y-1 group md:aspect-square md:w-full
  `;

  const styleClas = 'w-full h-full'
  
  const icons ={
    "HTML5": <IoLogoHtml5 className={styleClas}/>,
    "CSS3": <IoLogoCss3 className={styleClas}/>,
    "JavaScript": <IoLogoJavascript className={styleClas}/>,
    "Tailwind CSS": <SiTailwindcss className={styleClas}/>,
    "SASS": <FaSass className={styleClas}/>,
    "React": <FaReact className={styleClas}/>,
    "PUG.js": <SiPug className={styleClas}/>,
    "Python": <FaPython className={styleClas}/>,
    "GitHub": <FaGithub className={styleClas}/>,
    "Vite": <SiVite className={styleClas}/>,
    "Figma": <FaFigma className={styleClas}/>,
    "Git": <FaGitAlt className={styleClas}/>,
    "Sanity.io": <SiSanity className={styleClas}/>,
    "MySQL": <SiMysql className={styleClas}/>,
    "Linux": <FaLinux className={styleClas}/>,
    "Docker": <IoLogoDocker className={styleClas}/>,
  }

  return (
    <div className={styleType }>
      <div className="w-12 h-12 bg-cyber-green/10 rounded-lg flex items-center justify-center border border-cyber-green/10 group-hover:border-cyber-green/40 transition-colors">
        <div className="w-8 h-8  rounded-sm">
          {icons[name]}
        </div> 
      </div>

      <div className="flex flex-col gap-1">
        <h3 className="text-sm font-bold text-white tracking-tight leading-tight items-center">
          {name}
        </h3>
      </div>
    </div>
  );
}

export function HeaderCardSection({nameSection ,icon}){
  return (
<div className="my-10 flex items-center gap-4 text-cyber-green">
  <div className="w-8 h-8 flex items-center justify-center shrink-0">
    {icon}
  </div>

  <strong className="uppercase text-sm font-bold tracking-widest whitespace-nowrap">
    {nameSection}
  </strong>

  <span className="grow border-b border-cyber-green/30 shadow-[0_0_10px_rgba(0,255,0,0.1)]"></span>
</div>
  )
}