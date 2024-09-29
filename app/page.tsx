"use client"

import FireIcon from "./components/icon"
import Link from "next/link"

export default function Login() {
  return (
    <div className="flex flex-col gap-4 px-6 py-8">
      <div className="flex flex-col gap-2 *:font-medium">
        <FireIcon />
        <Link className="text-8xl font-semibold text-purple-400" href="/create-account">
          create-account
        </Link>
      </div>
    </div>
  )
}
