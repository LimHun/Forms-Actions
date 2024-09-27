"use client"

import Image from "next/image";
import FormInput from "../components/form-input";
import SocialLogin from "../components/social-login";
import FormButton from "../components/form-btn";
import { useFormState } from "react-dom"
import { handleForm } from "./actions"
import FireIcon from "../components/icon"; 
import { icon } from "../components/icon"; 

export default function Login() { 
  const [state, action] = useFormState(handleForm, null)
  // 에러가 없는지 확인하는 조건
  const noErrors = state?.errors && Object.keys(state.errors).length === 0;

  return (
    <div className="flex flex-col gap-4 px-6 py-8">
      <div className="flex flex-col gap-2 *:font-medium items-center">
        <FireIcon /> 
      </div>
      <form action={action} className="flex flex-col gap-3">
        <FormInput name="email" type="email" placeholder="Email" required errors={(state?.errors ?? {})} icon={icon} />
        <FormInput name="username" type="string" placeholder="Username" required errors={(state?.errors ?? {})} icon={icon}/>
        <FormInput name="password" type="password" placeholder="Password" required errors={(state?.errors ?? {})} icon={icon}/>
        <FormButton text="Log in" />
      </form>  
      { noErrors && (
        <div className="flex justify-center items-center h-14 bg-green-500 text-black font-bold rounded-full">Welcome back!</div>
      )}
    </div>
  )
}
