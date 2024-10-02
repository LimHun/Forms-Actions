import { NextRequest, NextResponse } from "next/server"
import { Optional } from "./utils"
import getSession from "./app/lib/session"

interface Routes {
  [key: string]: boolean
}

const publicOnlyUrls: Routes = {
  "/": true,
  "/log-in": true,
  "/profile": true,
  "/create-account": true,
}

export default async function middlewere(request: NextRequest) {
  const session = await getSession()
  const exists = publicOnlyUrls[request.nextUrl.pathname]
  console.log(exists)
  Optional(session.id)
    .some((id) => {
      console.log(id)
      if (exists) {
        return NextResponse.redirect(new URL("/profile", request.url))
      }
    })
    .none(() => {
      console.log("id 조회 안됨 게스트 유저")
      if (!exists) {
        return NextResponse.redirect(new URL("/", request.url)) // 리다이렉션을 반환
      }
    })
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
}
