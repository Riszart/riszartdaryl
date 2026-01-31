// import logo from'../assets/img/logo-riszart-1056-light.png'
import { Link } from 'react-router-dom'

export function Navbar(){
  return (
    <>
      {/* <section className="fixed top-0 left-0"><img src={logo} alt="logo riszart daryl" className='w-16 border border-cyber-green rounded-xl bg-cyber-green' /></section> */}
      <nav className="fixed bottom-0 border-t border-gray-600 pt-4 pb-4 bg-black">
        <div className="hidden md:block"></div>
        <section className="w-screen">
          <ul className="capitalize flex justify-around text-xs">
            <li className="">
              <Link to={'/'} className="flex flex-col items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3">
              <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/>
              </svg> home</Link></li>
            <li className="">
              <Link to={'/Project'} className="flex flex-col items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3">
              <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-400H160v400Zm140-40-56-56 103-104-104-104 57-56 160 160-160 160Zm180 0v-80h240v80H480Z"/>
              </svg>project</Link></li>
            <li className="">
              <Link to={'/Tech'} className="flex flex-col items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3">
              <path d="M320-240 80-480l240-240 57 57-184 184 183 183-56 56Zm320 0-57-57 184-184-183-183 56-56 240 240-240 240Z"/>
              </svg> tech</Link></li>
            <li className="">
              <Link to={'Contact'} className="flex flex-col items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3">
              <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/>
              </svg>contact</Link></li>
          </ul>
        </section>
        <div className="hidden md:block"></div>
        <div className="hidden md:block"><p>desarrollado por riszart daryl</p></div>
      </nav>
    </>
  )
}