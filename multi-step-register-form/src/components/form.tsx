import { Dispatch, SetStateAction, useState } from "react"
import Step1 from "./step-1"
import Step2 from "./step-2"
import Step3 from "./step-3"
import { FormData } from "../types"

type Props = {
  setStep: Dispatch<SetStateAction<number>>,
  step: number
}

export default function Form({step, setStep}: Props) {
  const [data, setData] = useState<FormData>({name: '', email: '', topics: []})
  
  return (
    <form className="bg-[#212936] min-h-[390px] p-10 border-[#454c5a] border-2 rounded-2xl z-10 w-[70%] h-[55%] max-w-[500px]">
      {step === 1 
        ? <Step1 data={data} setData={setData} setStep={setStep}/> 
        : step === 2 
        ? <Step2 data={data} setData={setData} setStep={setStep}/>
        : <Step3 data={data}/>}
    </form>
  )
}