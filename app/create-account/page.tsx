"use client"

import Input from "../components/form-input"
import Button from "../components/form-btn"
import { useFormState } from "react-dom"
import { createAccount } from "./actions"
import { PASSWORD_MIN_LENGTH } from "../lib/constants"
import Link from "next/link"

export default function CreateAccount() {
  const [state, dispatch] = useFormState(createAccount, null)
  return (
    <div className="flex flex-col gap-4 px-6 py-8">
      <div className="flex flex-col items-center gap-2 *:font-medium">{/* <FireIcon /> */}</div>
      <form action={dispatch} className="flex flex-col gap-3">
        <Input
          name="username"
          type="text"
          placeholder="Username"
          required
          errors={state?.fieldErrors.username}
          minLength={3}
          maxLength={10}
        />
        <Input name="email" type="email" placeholder="Email" required errors={state?.fieldErrors.email} />
        <Input
          name="password"
          type="password"
          placeholder="Password"
          required
          errors={state?.fieldErrors.password}
          minLength={PASSWORD_MIN_LENGTH}
        />
        <Input
          name="confirm_password"
          type="password"
          placeholder="Password Confirm"
          required
          errors={state?.fieldErrors.confirm_password}
          minLength={PASSWORD_MIN_LENGTH}
        />
        <Button text="Create account" />
      </form>
      <Link href="/">
        <div className="text-neutral-600">나중에 하기</div>
      </Link>
    </div>
  )
}
