import { NavLink } from 'react-router-dom'
import { LogoRD } from './logo.jsx'


export function Navbar(){

	const navLinkStyle = ({isActive})=>(
    `flex flex-col md:flex-row md:text-xl md:gap-4 items-center w-full gap-1 py-4 md:px-6 transition-all md:font-semibold${
      isActive
        ? `drop-shadow-[0_0_100px_rgba(255,255,0,0.7)] md:text-black md:bg-cyber-green md:rounded-md text-cyber-green font-extrabold`
        : `text-white opacity-70 hover:opacity-100 hover:bg-white/5`
    }`
	)

  return (
    <>
      <nav className=" fixed bottom-0 sm:bottom-auto sm:top-0 border-t-2 md:border-t-0 md:border-r-2 border-cyber-green bg-black z-1000 w-full md:h-full md:w-55 md:flex md:flex-col md:items-stretch md:justify-center font-mono">

        <div className='hidden md:block w-full mb-10 md:border-y md:border-cyber-green md:py-2'>
          <p className='uppercase w-full text-center text-2xl bg-linear-to-r from-cyber-green via-cyber-white to-cyber-skyblue bg-clip-text text-transparent drop-shadow-[0_0_30px_var(--color-cyber-green-shadow)]black font-extrabold font-orbitron'>riszart daryl</p>
        </div>
        
        <section className=" w-full">
          <ul className="capitalize grid grid-cols-[1fr_1fr_auto_1fr_1fr] md:grid-cols-1 md:gap-4 w-full ">
            
            {/* EDUCACIÓN */}
            <li className="md:mx-2 text-[10px] mb-1">
              <NavLink to={'/Education'} className={navLinkStyle}>
                {
                  ({isActive})=>(
                    <>
                      <div className=''>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
                          <path d="M480-120 200-272v-240L40-600l440-240 440 240v320h-80v-276l-80 44v240L480-120Zm0-332 274-148-274-148-274 148 274 148Zm0 241 200-108v-151L480-360 280-470v151l200 108Zm0-241Zm0 90Zm0 0Z"/>
                        </svg>
                      </div>
                      <span className="md:text-left">Estudios</span>
                        {isActive && (
                          <div className="absolute bottom-2 w-10 mb-1 h-[2px] bg-cyber-green shadow-[0_0_8px_rgba(0,255,0,0.8)] rounded-full animate-pulse"></div>
                        )}  
                    </>   
                  )
                }
              </NavLink>
            </li>

            {/* PROYECTOS */}
            <li className="md:mx-2 text-[10px] mb-1">
              <NavLink to={'/Project'} className={navLinkStyle}>
                {
                  ({isActive})=>(
                    <>
                      <div className=''>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
                          <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-400H160v400Zm140-40-56-56 103-104-104-104 57-56 160 160-160 160Zm180 0v-80h240v80H480Z"/>
                        </svg>
                      </div>
                      <span className="md:text-left">proyectos</span>
                        {isActive && (
                          <div className="absolute bottom-2 w-10 mb-1 h-[2px] bg-cyber-green shadow-[0_0_8px_rgba(0,255,0,0.8)] rounded-full animate-pulse"></div>
                        )}  
                    </>   
                  )
                }
              </NavLink>
            </li>

            {/* LOGO (Solo escritorio arriba o posición especial) */}
            <li className="relative md:absolute md:top-10 md:left-0 md:w-full flex justify-center w-27 drop-shadow-[0_0_15px_rgba(0,255,0,0.5)]">
              <NavLink to={'/'}>
                <LogoRD className="absolute w-27 h-27 md:w-48 md:h-48 text-cyber-green bottom-0 left-0 md:relative"/>
              </NavLink>
            </li>

            {/* STACK */}
            <li className="md:mx-2 text-[10px] mb-1">
              <NavLink to={'/Tech'} className={navLinkStyle}>
                {
                  ({isActive})=>(
                    <>
                      <div className=''>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
                          <path d="M320-240 80-480l240-240 57 57-184 184 183 183-56 56Zm320 0-57-57 184-184-183-183 56-56 240 240-240 240Z"/>
                        </svg>
                      </div>
                      <span className="md:text-left">Stack</span>
                        {isActive && (
                          <div className="absolute bottom-2 w-10 mb-1 h-[2px] bg-cyber-green shadow-[0_0_8px_rgba(0,255,0,0.8)] rounded-full animate-pulse"></div>
                        )}  
                    </>   
                  )
                }
              </NavLink>
            </li>

            {/* CONTACTO */}
            <li className="md:mx-2 text-[10px] mb-1">
              <NavLink to={'Contact'} className={navLinkStyle}>
                {
                  ({isActive}) =>(
                    <>
                      <div className=''>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
                          <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/>
                        </svg>
                      </div>
                      <span className="md:text-left">contacto</span>
                      {isActive && (
                        <div className="absolute bottom-2 w-10 mb-1 h-[2px] bg-cyber-green shadow-[0_0_8px_rgba(0,255,0,0.8)] rounded-full animate-pulse"></div>
                      )}                    
                    </>
                  )
                }
              </NavLink>
            </li>
          </ul>
        </section>
        <p className='hidden md:block absolute bottom-2 w-full text-center capitalize'>Desarrollado por <span className='font-extrabold uppercase text-cyber-green'>Riszart Daryl</span></p>
      </nav>
    </>
  )
}

