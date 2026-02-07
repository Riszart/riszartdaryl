import { NavLink } from 'react-router-dom'
import { LogoRD } from './logo.jsx'


export function Navbar(){

	const navLinkStyle = ({isActive})=>(
		`flex flex-col items-center gap-2 ${
			isActive 
			? `text-cyber-green drop-shadow-[0_0_100px_rgba(255,255,0,0.7)]`
			: `text-white opacity-70 hover:opacity-100`
		}`
	)

  return (
    <>
      {/* <section className="fixed top-0 left-0"><img src={logo} alt="logo riszart daryl" className='w-16 border border-cyber-green rounded-xl bg-cyber-green' /></section> */}
      <nav className="fixed bottom-0 border-t-2 border-cyber-green pt-4 pb-4 bg-black z-1000 ">
        <div className="hidden md:block"></div>
        <section className="w-screen">
          <ul className="capitalize flex justify-around text-xs">
            <li className="">
              <NavLink to={'/'} className={navLinkStyle}>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
              <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/>
              </svg> home</NavLink></li>
            <li className="">
              <NavLink to={'/Project'} className={navLinkStyle}>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
              <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-400H160v400Zm140-40-56-56 103-104-104-104 57-56 160 160-160 160Zm180 0v-80h240v80H480Z"/>
              </svg>project</NavLink></li>
						<li className="">
              <div to={'/Project'} className="">
							<div className='w-27'>
                <LogoRD className="w-27 h-27 absolute bottom-0 text-cyber-green"/>
							</div>
              </div></li>
            <li className="">
              <NavLink to={'/Tech'} className={navLinkStyle}>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
              <path d="M320-240 80-480l240-240 57 57-184 184 183 183-56 56Zm320 0-57-57 184-184-183-183 56-56 240 240-240 240Z"/>
              </svg> tech</NavLink></li>
            <li className="">
              <NavLink to={'Contact'} className={navLinkStyle}>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
              <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/>
              </svg>contact</NavLink></li>
          </ul>
        </section>
        <div className="hidden md:block"></div>
        <div className="hidden md:block"><p>desarrollado por riszart daryl</p></div>
      </nav>
    </>
  )
}

