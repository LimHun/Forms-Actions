"use server"

import { z } from "zod"
import bcrypt from "bcrypt"
import { PrismaClient } from "@prisma/client"
import { PASSWORD_MIN_LENGTH, PASSWORD_REGEX, PASSWORD_REGEX_ERROR } from "@/lib/constants"
import getSession from "@/lib/session"
import { redirect } from "next/navigation"

const db = new PrismaClient()

const checkUniqueEmail = async (email: string) => {
  const user = await db.user.findUnique({
    where: {
      email,
    },
    select: {
      email: true,
    },
  })
  console.log(user)
  return Boolean(user?.email === email)
}

const formSchema = z.object({
  email: z.string().email().refine(checkUniqueEmail, "There is an already registered with that email"),
  password: z.string().min(PASSWORD_MIN_LENGTH).regex(PASSWORD_REGEX, PASSWORD_REGEX_ERROR),
})

export async function login(prevState: any, formData: FormData) {
  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  }

  const result = await formSchema.safeParseAsync(data)
  if (!result.success) {
    console.log(result.error.flatten())
    return result.error.flatten()
  } else {
    console.log(result.data)

    const hashPassword = await bcrypt.hash(result.data.password, 12)
    const user = await db.user.findUnique({
      where: {
        email: result.data.email,
      },
      select: {
        id: true,
        password: true,
      },
    })
    console.log(user)

    const ok = await bcrypt.compare(result.data.password, user!.password ?? "xxxx")
    if (ok) {
      const session = await getSession()
      session.id = user!.id
      await session.save()
      redirect("/")
    } else {
      return {
        fieldErrors: {
          password: ["Wrong password."],
          email: [],
        },
      }
    }
  }
}
