import { useContext } from "react"
import { context } from "../context"

export default function Content() {
  const {dark} = useContext(context)

  return (
    <div className={`p-10 bg-[#F2F9FE] xl:flex xl:justify-between xl:flex-row-reverse xl:h-full xl:pt-28 ${dark ? 'dark' : ''}`}>
      <div className="flex justify-center">
        <img className="mt-10 lg:w-[600px] xl:w-[100%] xl:h-[80%]" src="/assets/hero-image-simple-homepage.png" alt="" />
      </div>
      <div className="p-10 flex flex-col xl:gap-5 gap-7 w-[75%] lg:w-[88%] xl:w-[45%]">
        <span className={`font-bold text-sm text-[#223344] ${dark ? 'dark' : ''}`}>😎  SIMPLE WAY TO COMMUNICATE</span>
        <h1 className={`text-6xl font-extrabold leading-normal text-[#223344] ${dark ? 'dark' : ''}`}>Actions for Accessibility in Design</h1>
        <h2 className="text-[#909193] font-medium lg:w-[55%] xl:w-full">The fastest way to build and deploy websites with resusable components.</h2>
        <div className="flex items-center gap-8">
          <button className="bg-[#2A4DD0] px-8 py-3 text-white rounded-xl font-bold">GET STARTED</button>
          <a className="text-[#2A4DD0] font-bold border-b-[#2A4DD0] border-solid border-b-2" href="">Get live demo</a>
        </div>
        <ul className="list-image-[url('/assets/Done_ring_round_fill.svg')] flex gap-5 mt-5">
          <li className="flex items-center justify-center text-sm gap-2 text-[#909193] font-medium"><img src="/assets/Done_ring_round_fill.svg"/>No credit card required</li>
          <li className="flex items-center justify-center text-sm gap-2 text-[#909193] font-medium"><img src="/assets/Done_ring_round_fill.svg"/>No software to install</li>
        </ul>
      </div>
    </div>
  )
}