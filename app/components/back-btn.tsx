"use client"

import { useRouter } from "next/navigation"
import { ChevronLeftIcon } from "@heroicons/react/24/solid"
import Link from "next/link"

export function BackButton() {
  const router = useRouter()
  return (
    <button onClick={() => router.back()} className="flex items-center rounded-md">
      <ChevronLeftIcon className="m-4 h-6 w-6 text-black" /> {/* 크기와 색상 설정 */}
    </button>
  )
}

export function BackHomeButton() {
  return (
    <Link href="/">
      <ChevronLeftIcon className="m-4 h-6 w-6 text-black" />
    </Link>
  )
}
