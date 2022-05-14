import React from 'react'
import { NavLink } from 'react-router-dom'

function About() {
  return (
    <div className="bg-gray-900 px-8 lg:px-16 py-8 min-h-screen">
      <div className="flex w-full flex-col justify-start items-center">
          <NavLink className="flex w-full border-gray-50 justify-start items-center cursor-pointer" to="/">
              <img className="w-4" src="./asset/icons/left.svg" alt="left"/>
              <div className="font-semibold text-gray-50 uppercase tracking-wide text-md">back</div>
          </NavLink>
      </div>
    </div>
  )
}

export default About;