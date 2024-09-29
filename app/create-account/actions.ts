"use server"

import { z } from "zod"
import bcrypt from "bcrypt"
import { PrismaClient } from "@prisma/client"
import { PASSWORD_MIN_LENGTH, PASSWORD_REGEX, PASSWORD_REGEX_ERROR } from "@/lib/constants"

const db = new PrismaClient()

const checkUniqueUsername = async (username: string) => {
  const user = await db.user.findUnique({
    where: {
      username: username,
    },
    select: {
      id: true,
    },
  })
  return Boolean(user) === false
}

const checkUniqueEmail = async (email: string) => {
  const user = await db.user.findUnique({
    where: {
      email,
    },
    select: {
      id: true,
    },
  })
  return Boolean(user) === false
}

const formSchema = z
  .object({
    username: z
      .string({ invalid_type_error: "Username must be a string!", required_error: "where is my username???" })
      .min(3, "너무 짧아요 4~10자리 이름을 지어주세요.")
      .trim()
      .toLowerCase()
      // .transform((username) => `🔥 ${username}`)
      .refine((username) => !username.includes("potato"), "No potatoes allowed!")
      .refine(checkUniqueUsername, "This username is already taken"),
    email: z.string().email().refine(checkUniqueEmail, "There is an already registered with that email"),
    password: z.string().min(PASSWORD_MIN_LENGTH).regex(PASSWORD_REGEX, PASSWORD_REGEX_ERROR),
    confirm_password: z.string().min(PASSWORD_MIN_LENGTH),
  })
  .superRefine(({ password, confirm_password }, ctx) => {
    if (password !== confirm_password) {
      ctx.addIssue({
        code: "custom",
        message: "Two passwords should be equal",
        path: ["confirm_password"],
      })
    }
  })

export async function createAccount(prevState: any, formData: FormData) {
  const data = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirm_password: formData.get("confirm_password"),
  }

  const result = await formSchema.safeParseAsync(data)
  if (!result.success) {
    console.log(result.error.flatten())
    return result.error.flatten()
  } else {
    console.log(result.data)

    const hashPassword = await bcrypt.hash(result.data.password, 12)
    const user = await db.user.create({
      data: {
        username: result.data.username,
        email: result.data.email,
        password: hashPassword,
        tweets: {
          create: {
            tweet: `${result.data.username}님의 첫 번째 트윗입니다!`,
          },
        },
      },
      select: {
        id: true,
      },
    })
  }
}
