import Link from "next/link"
import { getTweet, getUser } from "./actions"
import getSession from "./lib/session"
import { redirect } from "next/navigation"
import { Prisma } from "@prisma/client"
import TweetList from "./components/tweet-list"
import { FIRST_PAGE, PAGE_SIZE } from "./lib/constants"
import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/solid"
import AddTweetButton from "./components/add-tweet-btn"
import { RootLogin } from "./components/rootLogin"

export type InitialTweet = Prisma.PromiseReturnType<typeof getTweet>

export default async function RootView() {
  const items = await getTweet(FIRST_PAGE, PAGE_SIZE)
  const user = await getUser()
  const logout = async () => {
    "use server"
    const session = await getSession()
    await session.destroy()
    redirect("/")
  }
  return (
    <div className="">
      {user ? (
        <div className="min-h-screen animate-morphing-gradient bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900 via-cyan-800 via-gray-600 via-sky-600 via-teal-700 to-blue-900 bg-[length:400%_400%]">
          <div className="flex flex-row justify-between *:mt-6">
            <span className="ml-6 text-2xl font-bold shadow-red-50">Z-CHALLENAGE</span>
            <form action={logout}>
              <button>
                <ArrowRightStartOnRectangleIcon className="size-6 text-black" />
              </button>
            </form>
          </div>
          <div className="pb-4 pl-4 pr-4 pt-6">
            <TweetList initialTweet={items} />
            <AddTweetButton />
          </div>
        </div>
      ) : (
        <RootLogin />
      )}
    </div>
  )
}
