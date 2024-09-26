import Image from "next/image";
import FormInput from "./components/form-input";
import SocialLogin from "./components/social-login";
import FormButton from "./components/form-btn";


const fireIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.362 5.214A8.252 8.252 0 0112 21a8.25 8.25 0 01-5.962-13.953 8.287 8.287 0 003.962 4.553A8.983 8.983 0 0115.362 5.214z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 18a3.75 3.75 0 10-.495-7.468 5.99 5.99 0 011.925 3.547A5.975 5.975 0 0112 18z"
    />
  </svg>
);

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <svg
        data-slot="icon"
        fill="red"
        strokeWidth="1.5"
        stroke="white"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="text-red-500 h-20"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
        ></path>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
        ></path>
      </svg>
      <div className="flex flex-col gap-6 pt-6">
      <FormInput type="email" placeholder="Email" required errors={[]} icon={fireIcon} />  
      <FormInput type="email" placeholder="Username" required errors={[]} icon={fireIcon} />  
      <FormInput type="email" placeholder="Password" required errors={[]} icon={fireIcon} /> 
      <FormButton loading={false} text={"Log in"} />
      </div>
    </div>
  );
}
