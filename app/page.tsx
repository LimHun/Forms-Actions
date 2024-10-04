import Link from "next/link"
import { getUser } from "./actions"
import getSession from "./lib/session"
import { redirect } from "next/navigation"
import db from "./lib/db"
import { Prisma } from "@prisma/client"
import TweetList from "./components/tweet-list"

async function getInitialTweet() {
  const products = await db.tweet.findMany({
    select: {
      id: true,
      tweet: true,
      user: true,
      userId: true,
      likes: true,
      createdAt: true,
    },
    take: 1,
    orderBy: {
      createdAt: "desc",
    },
  })
  return products
}

export type InitialTweet = Prisma.PromiseReturnType<typeof getInitialTweet>

export default async function RootView() {
  const items = await getInitialTweet()
  const user = await getUser()
  const logout = async () => {
    "use server"
    const session = await getSession()
    await session.destroy()
    redirect("/")
  }
  return (
    <div>
      {user ? (
        <div>
          <div>
            <TweetList initialTweet={items} />
          </div>
          <div>로그인 된 유저</div>
          <form action={logout}>
            <button>Log out</button>
          </form>
        </div>
      ) : (
        <div className="flex flex-col gap-4 px-6 py-8">
          <div className="flex flex-col gap-2 *:font-medium">
            <div className="text-8xl font-semibold text-purple-400" href="/create-account">
              트윗 시작하기!
            </div>
            <div className="h-20" />
            <Link className="text-3xl font-semibold text-purple-400" href="/create-account">
              회원가입
            </Link>
            <Link className="text-3xl font-semibold text-purple-400" href="/log-in">
              로그인
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
