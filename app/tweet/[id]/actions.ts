"use server"

import db from "@/app/lib/db"

export async function getTweetDetail(id: number) {
  const tweets = await db.tweet.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      tweet: true,
      user: true,
      userId: true,
      likes: true,
      createdAt: true,
    },
  })
  return tweets
}
