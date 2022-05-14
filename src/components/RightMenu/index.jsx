import { useState } from 'react'
import { SocMedDesktop, SocMedMobile } from '../SocialMedia'

function RightMenu() {
    const [toggle, setToggle] = useState(false)

    return (
      <nav className="flex lg:flex-col justify-center items-center w-full lg:w-24 2xl:w-28 h-16 lg:h-screen fixed bottom-0 lg:bottom-auto bg-white left-0 lg:left-auto right-0 lg:top-0 border-t-2 border-gray-200 lg:border-none"
      style={{zIndex: 99}}
      >
          <label 
            className="flex justify-center items-center lg:order-first w-full h-16 lg:h-32 bg-gray-100 lg:bg-none lg:opacity-50 cursor-pointer"
            onClick={() => setToggle(!toggle)}
          >
              <img src="./asset/icons/menu.svg" alt="menu"/>
          </label>

          <SocMedDesktop/>

          <div className="flex justify-center items-center order-first lg:order-3 w-full h-16 lg:h-32 bg-gray-100 lg:bg-none text-lg 2xl:text-2xl font-semibold text-gray-900">
              En
          </div>


          <div className="lg:hidden w-full h-16 bg-gray-100 lg:bg-none">
          </div>

          <MenuDesktop toggle={toggle}/>
          <MenuMobile toggle={toggle}/>
      </nav>
    )
}

function MenuDesktop({toggle}) {
  return (
    <div className={`hidden lg:flex justify-center items-center absolute top-0 right-0 pl-8 pr-28 h-24 2xl:h-28 bg-gray-100 text-gray-900 text-medium font-medium 2xl:text-2xl tracking-wide uppercase gap-x-4 ${toggle ? "translate-x-0" : "translate-x-full"} transform transition duration-1000`}
      style={{zIndex: -9}}
    >
        <label className="flex justify-center items-center w-32 2xl:w-48 h-full cursor-pointer">
            Projects
        </label>
        <label className="flex justify-center items-center w-32 2xl:w-48 h-full cursor-pointer">
            Skills
        </label>
        <div className="flex justify-center items-center w-32 2xl:w-48 h-full">
            <a href="/" className="bg-gray-900 text-gray-50 py-1 px-4">Get my cv</a>
        </div>
    </div>
  )
}


function MenuMobile({toggle}) {
  return (
    <nav className={`flex lg:hidden flex-col items-center absolute w-screen h-80 rounded-3xl bottom-0 left-0 right-0 bg-gray-900 py-8 transform ${toggle ? "translate-y-0" : "translate-y-full"} transition`}
      style={{zIndex: -9}}
    >
      <ul className="flex flex-col justify-center items-center w-screen text-lg font-semibold tracking-widest uppercase pb-4 mb-2 gap-2">
          <li><a href="/">Projects</a></li>
          <li><a href="/">Skills</a></li>
          <li>
              <a href="/" className="bg-gray-50 text-gray-900 px-4 font-medium hover:bg-gray-200">Get my cv</a>
          </li> 
      </ul>
      
      <h6>follow me</h6>
      <SocMedMobile/>

    </nav>
  )
}
export default RightMenu