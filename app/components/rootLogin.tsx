import Link from "next/link"

export function RootLogin() {
  return (
    <div className="flex flex-col gap-4 px-6 py-8 *:text-black">
      <div className="flex min-h-screen flex-col justify-between">
        <div className="h-2" />
        <div className="flex flex-col items-center">
          <div className="bg-clip-text text-sm font-thin">YOU CAN DO IT</div>
          <div className="bg-clip-text pt-2 text-5xl font-extrabold">CHALLENGE</div>
        </div>
        <div className="h-2" />
        <div className="h-2" />
        <div className="flex flex-col items-center gap-4">
          <Link href="/log-in">
            <button className="w-96 max-w-screen-md rounded-lg bg-gradient-to-r from-cyan-300 to-blue-500 px-8 py-4 pl-10 font-semibold text-white shadow-lg hover:opacity-90">
              Login Now
            </button>
          </Link>
          <div className="h-2" />
          <Link
            className="w-96 max-w-screen-md rounded-full text-center text-xl font-thin text-neutral-500"
            href="/create-account"
          >
            Join
          </Link>
        </div>
        <div className="h-2" />
      </div>
    </div>
  )
}
