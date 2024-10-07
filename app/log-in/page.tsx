"use client"

import Input from "../components/form-input"
import Button from "../components/form-btn"
import { useFormState } from "react-dom"
import { login } from "./actions"
import { PASSWORD_MIN_LENGTH } from "../lib/constants"
import Link from "next/link"

export default function Login() {
  const [state, dispatch] = useFormState(login, null)
  return (
    <div className="flex flex-col gap-4 px-6 py-8 *:text-black">
      <div className="flex min-h-screen flex-col justify-between">
        <div className="h-2" />
        <div className="flex flex-col items-center">
          <div className="bg-clip-text text-sm font-thin">YOU CAN DO IT</div>
          <div className="bg-clip-text pt-2 text-5xl font-extrabold">CHALLENGE</div>
        </div>
        <div className="h-2" />
        <div className="h-2" />
        <div className="flex flex-col gap-4 px-6 py-8">
          <div className="flex flex-col items-center gap-2 *:font-medium">{/* <FireIcon /> */}</div>
          <form action={dispatch} className="flex flex-col gap-3">
            <Input name="email" type="email" placeholder="email" required errors={state?.fieldErrors.email} />
            <Input
              name="password"
              type="password"
              placeholder="Password"
              required
              errors={state?.fieldErrors.password}
              minLength={PASSWORD_MIN_LENGTH}
            />
            <Button text="Login" />
          </form>
        </div>
        <Link href="/">
          <div className="text-neutral-600">나중에 하기</div>
        </Link>
        <div className="h-2" />
      </div>
    </div>
  )
}
