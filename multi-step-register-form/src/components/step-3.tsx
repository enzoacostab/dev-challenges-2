import { MouseEvent } from "react";
import { StepProps } from "../types";
import { toast } from "sonner";

export default function Step3({data}: Pick<StepProps, 'data'>) {
  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    console.log(data);
    toast.success('Success')
  }
  return (
    <div className="z-10 w-full h-full justify-center flex flex-col gap-8">
      <h1 className="text-[hsl(230,13%,91%)] text-xl font-semibold">Summary</h1>
      <div>
        <p className="text-[#E5E7EB] text-lg"><span className="text-[#878891] text-lg">Name: </span>{data.name}</p>
        <p className="text-[#E5E7EB] text-lg"><span className="text-[#878891] text-lg">Email: </span>{data.email}</p>
      </div>
      <div>
        <span className="text-[#878891] text-lg">Topics:</span>
        <ul className="list-disc text-[#E5E7EB]">
          {data.topics.map(topic => <li key={topic} className="ml-5">{topic}</li>)}
        </ul>
      </div>
      <button onClick={handleSubmit} className="bg-gradient-to-t font-semibold from-[#652CD1] to-[#845EEE] w-min px-10 py-3 rounded-full text-[#d4cee9] self-center">Confirm</button>
    </div>
  )
}