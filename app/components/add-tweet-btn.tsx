"use client"

import { PlusIcon } from "@heroicons/react/20/solid"
import Link from "next/link"

export default function AddTweetButton() {
  return (
    <div className="w-screen">
      <Link
        href="/write"
        className="fixed bottom-24 right-8 flex size-16 items-center justify-center rounded-full bg-cyan-400 text-white transition-colors hover:bg-cyan-200"
      >
        <PlusIcon className="size-10" />
      </Link>
    </div>
  )
}
