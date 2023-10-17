import { ChangeEvent, MouseEvent } from "react"
import { toast } from "sonner"
import { StepProps } from "../types"

export default function Step2({setData, setStep, data}: StepProps) {

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.checked
      ? setData(prevData => ({
          ...prevData,
          topics: prevData.topics.concat(e.target.value)
        }))
      : setData(prevData => ({
          ...prevData, 
          topics: prevData.topics.filter(topic => topic != e.target.value)
        }))
  }

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    data.topics.length === 0
      ? toast.error('Choose at least one topic')
      : setStep(3)
  }

  return (
    <div className="z-10 w-full h-full justify-center flex flex-col gap-8">
      <h1 className="text-[hsl(230,13%,91%)] text-xl font-semibold">Which topics you are interested in?</h1>
      <div>
        <div className="pb-5">
          <label className="mt-3 ml-5 absolute text-[#8d8f98]" htmlFor="software-development">Software Development</label>
          <input onChange={handleChange} className="bg-[#394050] h-[50px] flex justify-center items-center border-2 rounded-xl border-[#434b59] w-full appearance-none checked:bg-[#652cd1]" type="checkbox" value="Software Development" name="topic" id="software-development" />
        </div>
        <div className="pb-5">
          <label className="mt-3 ml-5 absolute text-[#8d8f98]" htmlFor="user-experience">User Experience</label>
          <input onChange={handleChange} className="bg-[#394050] h-[50px] flex justify-center items-center border-2 rounded-xl border-[#434b59] w-full appearance-none checked:bg-[#652cd1]" type="checkbox" value="User Experience" name="topic" id="user-experience" />
        </div>
        <div className="">
          <label className="mt-3 ml-5 absolute text-[#8d8f98]" htmlFor="graphic-design">Graphic Design</label>
          <input onChange={handleChange} className="bg-[#394050] h-[50px] flex justify-center items-center border-2 rounded-xl border-[#434b59] w-full appearance-none checked:bg-[#652cd1]" type="checkbox" value="Graphic Design" name="topic" id="graphic-design" />
        </div>
      </div>
      <button onClick={handleClick} className="bg-gradient-to-t font-semibold from-[#652CD1] to-[#845EEE] w-min px-10 py-3 rounded-full text-[#d4cee9] self-center">Continue</button>
    </div>
  )
}