interface FormInputProps {
  icon: React.ReactNode;
  type: string;
  placeholder: string;
  required: boolean;
  errors: string[];
}

export default function FormInput({
  icon,
  type,
  placeholder,
  required,
  errors,
}: FormInputProps) {
  return ( 
    <div className="flex flex-row grap-2 items-center h-10 border-none bg-transparent p-3 ring-2 ring-neutral-200 placeholder:text-neutral-400 focus:outline-none focus:ring-4 focus:ring-orange-500 rounded-full">
      {icon} 
      <input 
      className="focus:outline-none pl-2"
        type={type}
        placeholder={placeholder}
        required={required}
      />
      {errors.map((error, index) => (
        <span key={index} className="text-red-500">
          {error}
        </span>
      ))}
    </div> 
  );
}
