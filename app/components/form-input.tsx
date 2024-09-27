interface FormInputProps {
  icon: React.ReactNode;
  name: string
  type: string
  placeholder: string
  required: boolean
  errors: Record<string, string[]>
}

export default function FormInput({ icon, name, type, placeholder, required, errors = {} }: FormInputProps) {
  const errorMessages: string[] = errors[name] || []; 
  
  return (
    <div className="flex flex-col gap-2">
    <div className="flex h-14 items-center w-full rounded-full border-none bg-transparent ring-2 focus-within:ring-offset-2 ring-neutral-200 focus-within:ring-2 focus-within:ring-gray-300">
      {icon && (
        <span className="pl-4 ">
          {icon} {/* 아이콘 */}
        </span>
      )}
      <input
        name={name}
        className="flex-1 bg-transparent p-2 placeholder:text-neutral-400 focus:outline-none"
        type={type}
        placeholder={placeholder}
        required={required}
      />
    </div> 
      {errorMessages.map((error, index) => (
        <span key={index} className="text-red-500">
          {error}
        </span>
      ))}
    </div>
  )
}
