import { ChangeEvent, MouseEvent } from "react"
import { toast } from "sonner"
import { StepProps } from "../types"

export default function Step1({setData, setStep, data}: StepProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target
    setData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const {name, email} = data
    !name || !email
      ? toast.error('Complete all fields')
      : setStep(2)
  }

  return (
    <div className="z-10 w-full h-full justify-center flex flex-col gap-8">
      <h1 className="text-[#e5e6eb] text-2xl font-semibold">Register</h1>
      <div className="flex flex-col gap-2">
        <label className="text-[#93939c]" htmlFor="name">Name</label>
        <input onChange={handleChange} className="bg-transparent focus-visible:outline-[#835eee] text-[#E5E7EB] p-3 border-[#454c5a] border-[3px] rounded-xl" type="text" name="name" id="name" />
      </div>
      <div className="flex flex-col gap-2 mt-[-20px]">
        <label className="text-[#93939c]" htmlFor="email">Email</label>
        <input onChange={handleChange} className="bg-transparent focus-visible:outline-[#835eee] text-[#E5E7EB] placeholder:text-[#49515e] p-3 border-[#454c5a] border-[3px] rounded-xl" placeholder="example@gmail.com" type="text" name="email" id="email" />
      </div>
      <button onClick={handleClick} className="bg-gradient-to-t font-semibold from-[#652CD1] to-[#845EEE] w-min px-10 py-3 rounded-full text-[#d4cee9] self-center">Continue</button>
    </div>
  )
}