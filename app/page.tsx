"use client"

import Image from "next/image";
import FormInput from "./components/form-input";
import SocialLogin from "./components/social-login";
import FormButton from "./components/form-btn";
import { useFormState } from "react-dom"
import { handleForm } from "./login/actions"
import FireIcon from "./components/icon"; 
import { icon } from "./components/icon"; 

export default function Login() { 
  const [state, action] = useFormState(handleForm, null)
  return (
    <div className="flex flex-col gap-4 px-6 py-8">
      <div className="flex flex-col gap-2 *:font-medium">
        <FireIcon />
        <h2 className="text-xl">Login with email and password</h2>
      </div>
      <form action={action} className="flex flex-col gap-3">
        <FormInput name="email" type="email" placeholder="Email" required errors={(state?.errors ?? {})} icon={icon} />
        <FormInput name="username" type="string" placeholder="Username" required errors={(state?.errors ?? {})} icon={icon}/>
        <FormInput name="password" type="password" placeholder="Password" required errors={(state?.errors ?? {})} icon={icon}/>
        <FormButton text="Create account" />
      </form> 
    </div>
  )
}
