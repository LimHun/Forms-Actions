import { notFound } from "next/navigation"
import { getTweetDetail } from "./actions"
import { BackButton, BackHomeButton } from "@/app/components/back-btn"
import { formatToTimeAgo } from "@/app/lib/utils"

export default async function tweetDetail({ params }: { params: { id: string } }) {
  const id = Number(params.id)
  if (isNaN(id)) {
    return notFound()
  }
  const tweet = await getTweetDetail(id)

  return (
    <div className="*:max-w-screen">
      {tweet ? (
        <div className="flex flex-row items-start">
          <BackHomeButton />

          <div className="flex w-full flex-col pr-4">
            <div className="mt-4 w-full rounded-lg bg-slate-200 p-10 text-xl">{tweet.tweet}</div>
            <span className="pl-2 pt-2 text-sm font-extrabold text-neutral-200">
              {formatToTimeAgo(tweet.createdAt.toString())}에 작성됨
            </span>
          </div>
        </div>
      ) : null}
    </div>
  )
}
