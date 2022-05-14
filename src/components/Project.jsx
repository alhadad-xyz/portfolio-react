import React from 'react'

function Project() {
    return (
        <div className="flex lg:items-center flex-col space-y-4 lg:flex-row lg:space-y-0 lg:space-x-16 my-16 lg:my-20">
            <div className="w-full space-y-2">
                <h1 className="font-bold text-2xl lg:text-4xl uppercase text-gray-50">Elise Studio</h1>
                <ul className="flex flex-wrap space-x-2">
                    <li className="bg-gray-900 px-2 rounded-sm text-gray-50 font-bold text-sm uppercase">HTML</li>
                    <li className="bg-gray-900 px-2 rounded-sm text-gray-50 font-bold text-sm uppercase">CSS</li>
                    <li className="bg-gray-900 px-2 rounded-sm text-gray-50 font-bold text-sm uppercase">Javascript</li>
                </ul>
                <p className="text-gray-200 font-semibold lg:text-lg lg:font-light">
                    Portfolio Website that we build with html, css and js only to complete a project team challenge at orang siber indonesia x progate bootcamp.
                </p>
                <div className="flex space-x-4 text-gray-900 uppercase text-sm font-bold tracking-wider">
                    <a href="https://github.com/alhadad-xyz/elisetudio" target="_blank" rel="noreferrer">Github</a>
                    <a href="https://alhadad-xyz.github.io/elisetudio/" target="_blank" rel="noreferrer">Visit Site</a>
                </div>
            </div>
            <div className="w-full">
                <img src="./asset/projects/estudo.png" alt="" className="rounded-md shadow-xl" />
            </div>
        </div>
    )
}

export default Project