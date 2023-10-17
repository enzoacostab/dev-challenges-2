export default function Steps({step}: {step: number}) {
  return (
    <div className="w-[300px] flex mt-5 h-5  items-center gap-5">
      <span className="text-[#394150]">Step {step} of 3</span>
      <div className="flex gap-5 absolute left-[50%] items-center translate-x-[-50%]">
        <div className={`h-3 w-3 rounded-full  ${step===1 ? 'ring-[#652CD1] ring-4 ring-opacity-50' : ''} ${step>=1 ? 'bg-[#845EEE]' : 'bg-[#4D5562]'}`}></div>
        <div className={`h-3 w-3 rounded-full  ${step===2 ? 'ring-[#652CD1] ring-4 ring-opacity-50' : ''} ${step>=2 ? 'bg-[#845EEE]' : 'bg-[#4D5562]'}`}></div>
        <div className={`h-3 w-3 rounded-full  ${step===3 ? 'ring-[#652CD1] ring-4 ring-opacity-50' : ''} ${step>=3 ? 'bg-[#845EEE]' : 'bg-[#4D5562]'}`}></div>
      </div>
    </div>
  )
}