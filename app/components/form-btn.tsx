"use client"

import { useFormStatus } from "react-dom"

interface ButtonProps {
  text: string
}

export default function Button({ text }: ButtonProps) {
  const { pending } = useFormStatus()
  return (
    <button
      disabled={pending}
      className="primary-btn h-10 rounded-md bg-blue-400 font-medium text-white disabled:cursor-not-allowed disabled:bg-neutral-300"
    >
      {pending ? "로딩 중" : text}
    </button>
  )
}
