"use client"

import { useState } from "react"
import { InitialTweet } from "../page"
import ListTweet from "./list-tweet"
import { getTweet } from "../actions"
import { PAGE_SIZE } from "../lib/constants"

interface TweetListProps {
  initialTweet: InitialTweet
}

export default function TweetList({ initialTweet }: TweetListProps) {
  const [tweets, setTweets] = useState(initialTweet)
  const [isLoading, setIsLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [isLastPage, setIsLastPage] = useState(false)

  const onLoadMoreClick = async () => {
    setIsLoading(true)
    const newTweet = await getTweet(page + 1, PAGE_SIZE)
    if (newTweet.length === 0) {
      setIsLastPage(true)
    } else {
      setTweets((prev) => [...prev, ...newTweet])
      setPage((prev) => prev + 1) // 페이지 번호 증가
    }
    setIsLoading(false)
  }
  return (
    <div>
      {tweets.map((tweet) => (
        <ListTweet key={tweet.id} {...tweet} />
      ))}
      {isLastPage}
      <div className="flex flex-col items-center">
        {!isLastPage && (
          <button
            onClick={onLoadMoreClick}
            disabled={isLoading}
            className="mx-auto w-fit rounded-md bg-neutral-800 px-3 py-2 text-sm font-extrabold text-white hover:opacity-90 active:scale-95"
          >
            {isLoading ? "로딩 중" : "더보기"}
          </button>
        )}
      </div>
    </div>
  )
}
