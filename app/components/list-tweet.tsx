import Link from "next/link"
import Image from "next/image"
import { formatToTileAgo } from "../lib/utils"
import { User } from "@prisma/client"

interface ListTweetProps {
  id: number
  tweet: string
  user: User
  userId: number
  createdAt: Date
}

export default function ListTweet({ id, tweet, user, userId, createdAt }: ListTweetProps) {
  return (
    <div className="bg-red-300">
      <Link href={`tweet/${id}`}>
        <div className="relative size-28 overflow-hidden rounded-md"></div>
        <div className="flex flex-col gap-1 *:text-white">
          <span className="text-lg">{tweet}</span>
          <span className="text-sm text-neutral-500">{formatToTileAgo(createdAt.toString())}</span>
        </div>
      </Link>
    </div>
  )
}
