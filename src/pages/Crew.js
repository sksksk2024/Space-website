import { useState } from "react"
import data from "../starter-code/data.json"
import {BsCircle} from "react-icons/bs"

export default function Crew() {
  const [people] = useState(data.crew)
  const [value, setValue] = useState(0)

  const {name, images, role, bio} =
  people[value]

  return (
    <>
      <section className="home crew px-5">
        <h1 className="pt-20 lg:pt-40 lg:max-w-7xl lg:mx-auto text-4xl uppercase mb-10 text-white">02 Meet your crew</h1>

        <div className="flex items-center justify-center flex-col-reverse md:grid grid-cols-2 gap-5 md:items-center lg:max-w-7xl lg:mx-auto">
          <article className="text-center lg:text-left">
            <h4 className="uppercase text-gray-400 mb-5 text-2xl">{role}</h4>

            <h2 className="text-5xl font-bold text-white mb-5 uppercase tracking-widest">{name}</h2>
            <p className="text-gray-400 mb-10">{bio}</p>

            {people.map((item, index) => (
              <button key={index} onClick={() =>
              setValue(index)} className={`uppercase text-white text-2xl h-5 rounded-full pb-2 mx-2 ${index === value && "bg-white"}`}>
                <BsCircle className="h-5 w-5" /> 
              </button>
            ))}
          </article>

          <article>
            <img src={images.png} alt={name} title={name} className="block mx-auto w-3/4 mb-10" />
          </article>
        </div>
      </section>
    </>
  );
}