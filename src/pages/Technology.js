import { useState } from "react"
import data from "../starter-code/data.json"

export default function Technology() {
  const [cards] = useState(data.technology)
  const [value, setValue] = useState(0)

  const {name, images, description} =
cards[value]

  return (
    <>
      <section className="home technology px-5">
        <h1 className="pt-20 lg:pt-40 lg:max-w-7xl lg:mx-auto text-4xl uppercase mb-10 text-white">03 SPACE LAUNCH 101</h1>

        <div className="flex items-center justify-center flex-col-reverse md:grid grid-cols-2 gap-5 md:items-center lg:flex lg:max-w-7xl lg:mx-auto">
        

          <article className="text-center lg:text-left lg:flex items-center">
            <div>
              {cards.map((item, index) => (
                  <button key={index} onClick={() =>
                  setValue(index)} className={`uppercase text-white text-2xl h-10 w-10 p-1 border-2 border-white rounded-full pb-2 m-2 ${index === value && "bg-white text-gray-800"}`}>
                    {index + 1}
                  </button>
              ))}
            </div>
            <div className="lg:ml-10">
              <h4 className="uppercase text-gray-400 mb-5 text-2xl">THE TERMINOLOGY...</h4>
              
              <h2 className="text-5xl font-bold text-white my-5 uppercase tracking-widest">{name}</h2>
              <p className="text-gray-400 mb-10">{description}</p>
            </div>
            
          </article>

          <article>
            <picture>
              <source media="(min-width:768px)" srcSet={images.portrait} />
              <img src={images.landscape} alt={name} title={name} className="block mx-auto mb-10" />
            </picture>
          </article>

          
        </div>
      </section>
    </>
  );
}