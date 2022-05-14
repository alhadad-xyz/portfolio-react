export function ArrowLeft() {
  return (
    <div className="flex justify-center items-center absolute mx-2 w-16 h-16 bg-gray-50 top-0 bottom-0 left-0 m-auto rounded-full opacity-50 cursor-pointer z-20">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
      </svg>
    </div>
  )
}

export function ArrowRight() {
  return (
    <div className="flex justify-center items-center absolute mx-2 w-16 h-16 bg-gray-50 top-0 bottom-0 right-0 m-auto rounded-full opacity-50 cursor-pointer z-20">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
      </svg>
    </div>
  )
}