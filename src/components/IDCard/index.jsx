import React from 'react'

function Card() {
    return (
        <main className="flex flex-col justify-center items-center w-screen h-screen">
            <div className="card flex flex-col justify-center gap-4 w-10/12 lg:flex-row lg:w-8/12">
                <div className="w-full h-full relative">
                    <img src="./asset/hero.jpeg" alt="mypic" className="img-hero w-full h-full object-cover"/>
                </div>
                <div className="flex flex-col justify-center items-center w-full h-full lg:items-start lg:pl-16">
                    <ul className="pro flex justify-center items-center gap-4 text-xs text-gray-50 lg:text-sm 2xl:text-2xl">
                        <li className="px-1 bg-gray-400">Frontend</li>
                        <li className="px-1 bg-gray-400">Backend</li>
                    </ul>
                    <h1 className="desc text-gray-900 text-4xl font-bold my-1 text-center lg:text-5xl lg:my-2 lg:text-left 2xl:text-8xl">Good Night</h1>
                    <p className="desc text-gray-600 text-md font-medium text-center my-2 lg:text-lg lg:text-left 2xl:text-3xl">
                        My name is <span className="text-gray-900">Mohammad Khalid I Al Hadad</span>, you can call me al, i am 20 y.o, Junior Web Fullstack Developer and now i currently develop my UI Design & frontend skill.
                    </p>
                    <a href="/" className="desc uppercase font-semibold text-2xl tracking-wider mt-8 text-gray-800 transform transition 2xl:text-4xl">
                        Get in touch
                    </a>
                </div>
            </div>
        </main>
    )
}

export default Card