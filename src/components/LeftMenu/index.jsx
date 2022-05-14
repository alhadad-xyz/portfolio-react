function LeftMenu() {
    return (
      <nav className="flex justify-center items-center absolute w-screen h-80 text-gray-50 pt-6 pr-1 pl-3 lg:flex-col lg:w-1/6 lg:h-screen lg:p-0 lg:pl-24 lg:py-12">
          <a href="/" className="flex justify-center w-full order-2 self-stretch text-4xl font-bold text-shadow lg:justify-start lg:items-start lg:h-full lg:order-1 lg:text-2xl lg:shadow-none 2xl:text-4xl ">
              Alhadad.
          </a>
          <div className="flex flex-col justify-center items-start w-full order-1 self-stretch lg:flex-row lg:justify-start lg:items-center lg:h-full">
              <span className="w-1 h-32 2xl:h-48 bg-gray-50">
                  <span className="drop w-1 h-32 bottom bg-gray-500 absolute transition"></span>
              </span>
          </div>
          <ul className="flex flex-col justify-center items-end gap-y-16 w-full order-3 self-stretch text-sm lg:justify-start lg:flex-row lg:items-end lg:gap-x-8 lg:h-full 2xl:text-xl">
              <li className="transform -rotate-90 lg:rotate-0"><a href="/">FAQ</a></li>
              <li className="transform -rotate-90 lg:rotate-0"><a href="/">Help</a></li>
          </ul>
      </nav>
    )
}

export default LeftMenu