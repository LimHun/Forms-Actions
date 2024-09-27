"use client"

import { useFormStatus } from "react-dom"

interface FormButtonProps {
  text: string
}

export default function FormButton({ text }: FormButtonProps) {
  const { pending } = useFormStatus()
  return (
    <div className="flex flex-col gap-4">
      <button disabled={pending} className="bg-gray-200 rounded-full primary-btn h-14 disabled:cursor-not-allowed disabled:bg-neutral-300 text-black font-medium">
        {pending ? "loading..." : text}
      </button> 
    </div>
  )
}
