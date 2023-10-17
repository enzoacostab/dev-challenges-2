import { Toaster } from "sonner"
import Form from "./components/form"
import { useState } from "react"
import Steps from "./components/steps"

function App() {
  const [step, setStep] = useState(1)

  return (
    <div className="absolute bg-[#121826] h-screen w-screen overflow-hidden flex flex-col justify-center items-center">
      <Toaster richColors visibleToasts={1} position="top-center"/>
      <img className="absolute top-[-250px] left-[-250px]" src="/assets/blur-radial.svg" alt="" />
      <img className="absolute bottom-[-250px] right-[-250px]" src="/assets/blur-radial.svg" alt="" />
      <Form setStep={setStep} step={step}/>
      <Steps step={step}/>
    </div>
  )
}

export default App
