import { Dispatch, SetStateAction } from "react"

export type FormData = {
  name: string,
  email: string,
  topics: string[]
}

export type StepProps = {
  setData: Dispatch<SetStateAction<FormData>>,
  setStep: Dispatch<SetStateAction<number>>,
  data: FormData,
}