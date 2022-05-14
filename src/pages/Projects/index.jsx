import { useState } from 'react'
import { ArrowLeft, ArrowRight } from '../../components/Arrow'

const sliderItems = [
  {
    id: 1,
    img: "estudo.png",
    title: "ELISE STUDIO",
    desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
    bg: "bg-gray-500",
  },
  {
    id: 2,
    img: "foodies.png",
    title: "Foodie's",
    desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
    bg: "bg-orange-500",
  }
];

function Projects() {
  const [slide, setSlide] = useState(0)
  const handleSlide = (direction) => {
    if (direction === "left") {
      setSlide(slide > 0 ? slide - 1 : 2);
    } else {
      setSlide(slide < 2 ? slide + 1 : 0);
    }
  };

  return (
    <main className="flex relative w-full h-screen overflow-hidden">
      <ArrowLeft/>

      <div className="flex h-full transition-all duration-1000 ease-in-out -translate-x-full"
        // style={{ translateX: `${slide * -100}vw` }}
      >
        {
          sliderItems.map(item => (
            <div className="flex items-center w-screen h-screen p-24 bg-gray-500" key={item.id}>
              <div className="flex-1 p-16">
                <h1 className="text-8xl">{item.title}{slide}</h1>
                <h5 className="text-4xl text-gray-800">Company Profile</h5>
                <p className="my-16 font-semibold tracking-wide text-gray-800 text-xl">{item.desc}</p>
                <button className="py-8 px-16 text-xl bg-transparent cursor-pointer uppercase font-bold border-2 border-gray-900">Live Demo</button>
              </div>
              <div className="h-full flex justify-center items-center flex-1">
                <img src={`./asset/projects/estudo.png`} alt="slideImg"/>
              </div>
            </div>
          ))
        }
      </div>

      <ArrowRight direction="right" onClick={() => handleSlide("right")}/>
    </main>
  )
}

export default Projects;
 