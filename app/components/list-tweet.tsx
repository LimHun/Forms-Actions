import Link from "next/link"
import Image from "next/image"
import { User } from "@prisma/client"
import { formatToTimeAgo } from "../lib/utils"

interface ListTweetProps {
  id: number
  tweet: string
  user: User
  userId: number
  createdAt: Date
}

export default function ListTweet({ id, tweet, user, userId, createdAt }: ListTweetProps) {
  return (
    <div className="w-full">
      <div className="max-h-80 min-h-16 rounded-3xl bg-neutral-800 p-3">
        <Link href={`tweet/${id}`}>
          <div className="flex min-h-16 flex-col items-center justify-center gap-1 *:text-white">
            <span className="line-clamp-6 min-h-2 w-full text-lg font-bold">{tweet}</span>
          </div>
        </Link>
      </div>
      <span className="pl-2 pt-2 text-sm font-extrabold text-neutral-500">
        {formatToTimeAgo(createdAt.toString())}에 작성됨
      </span>
      <div className="h-8" />
    </div>
  )
}
