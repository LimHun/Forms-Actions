"use client"

import { useState } from "react"
import { InitialTweet } from "../page"
import ListTweet from "./list-tweet"

interface TweetListProps {
  initialTweet: InitialTweet
}

export default function TweetList({ initialTweet }: TweetListProps) {
  const [tweets, setTweets] = useState(initialTweet)

  return (
    <div className="flex flex-col gap-5 p-5">
      {tweets.map((tweet) => (
        <ListTweet key={tweet.id} {...tweet} />
      ))}
    </div>
  )
}
