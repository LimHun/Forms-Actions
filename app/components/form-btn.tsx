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
      className="max-w-screen-md rounded-lg bg-gradient-to-r from-cyan-300 to-blue-500 px-8 py-4 pl-10 font-semibold text-white shadow-lg hover:opacity-90"
    >
      {pending ? "로딩 중" : text}
    </button>
  )
}
