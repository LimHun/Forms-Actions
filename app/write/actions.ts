"use server"

import { z } from "zod"
import fs from "fs/promises"
import getSession from "@/lib/session"
import db from "@/lib/db"
import { redirect } from "next/navigation"

const tweetSchema = z.object({
  tweet: z.string({ required_error: "photo is required" }),
})
export async function updateTweet(_: any, formData: FormData) {
  const data = {
    tweet: formData.get("tweet"),
  }
  console.log(data)

  const result = tweetSchema.safeParse(data)
  if (!result.success) {
    return result.error.flatten()
  } else {
    const session = await getSession()
    if (session.id) {
      const tweet = await db.tweet.create({
        data: {
          tweet: result.data.tweet,
          user: {
            connect: {
              id: session.id,
            },
          },
        },
        select: {
          id: true,
        },
      })
      redirect(`/tweet/${tweet.id}`)
    }
  }
}
