"use server"

import db from "@/lib/db"
import getSession from "@/lib/session"

export async function getUser() {
  const session = await getSession()
  if (session.id) {
    const user = await db.user.findUnique({
      where: {
        id: session.id,
      },
      select: {
        username: true,
        id: true,
        email: true,
      },
    })
    if (user) {
      return user
    }
  }
}

export async function getTweet(page: number, pageSize: number) {
  const skip = Math.max((page - 1) * pageSize, 0) // skip 값이 0 이상으로 설정되도록 처리
  const tweets = await db.tweet.findMany({
    select: {
      id: true,
      tweet: true,
      user: true,
      userId: true,
      likes: true,
      createdAt: true,
    },
    skip: skip,
    take: pageSize,
    orderBy: {
      createdAt: "desc",
    },
  })
  return tweets
}
