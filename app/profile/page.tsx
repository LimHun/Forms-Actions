import getSession from "@/lib/session"
import { redirect } from "next/navigation"
import { getUser } from "@/actions"

export default async function Profile() {
  const user = await getUser()

  if (!user) {
    return <div>로그인이 필요합니다.</div>
  }

  const logout = async () => {
    "use server"
    const session = await getSession()
    await session.destroy()
    redirect("/")
  }

  return (
    <div>
      <div>
        <p className="text-6xl font-medium text-sky-700">{user.username}</p> {/* 이제 user에 제대로 접근할 수 있음 */}
        <p className="text-6xl font-medium text-sky-700">{user.email}</p>
        <p className="text-6xl font-medium text-sky-700">{user.id}</p>
      </div>
      <div className="h-[50px]" />
      <form action={logout}>
        <button className="text-2xl font-extrabold text-red-600">Log out</button>
      </form>
    </div>
  )
}
