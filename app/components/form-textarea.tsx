import { TextareaHTMLAttributes } from "react"

interface InputProps {
  name: string
  errors?: string[]
}

export default function InputArea({
  name,
  errors = [],
  ...rest
}: InputProps & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <div className="flex flex-col gap-2">
      <textarea
        name={name}
        className="h-[200px] w-full resize-none rounded-md border-none bg-transparent p-2 text-black ring-2 ring-neutral-200 placeholder:text-neutral-400 focus:outline-none focus:ring-4 focus:ring-cyan-600"
        {...rest}
      />
      {errors.map((error, index) => (
        <span key={index} className="text-red-500">
          {error}
        </span>
      ))}
    </div>
  )
}
