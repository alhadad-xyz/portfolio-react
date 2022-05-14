import React from 'react'
import { NavLink } from 'react-router-dom'
import Project from '../components/Project'

function Projects() {
  return (
    <div className="bg-gray-600 px-8 lg:px-16 py-8 min-h-screen">
      <div className="flex w-full flex-col justify-start items-center">
            <NavLink className="flex w-full border-gray-50 justify-start items-center cursor-pointer" to="/">
                <img className="w-4" src="./asset/icons/left.svg" alt="left"/>
                <div className="font-semibold text-gray-50 uppercase tracking-wide text-md">back</div>
            </NavLink>
            <div className="flex w-full border-gray-50 justify-center items-center">
                <div className="font-semibold text-gray-50 uppercase tracking-wide text-md">My Latest Work</div>
            </div>
        </div>

        <Project />
    </div>
  )
}

export default Projects;