"use server"

import { resolve } from "path";
import {z} from "zod"


const emailSchema = z.string().email().refine((email) => email.endsWith('@zod.com'), { message: '오직 @zod.com 이메일만 허용됩니다.',
});

const usernameSchema = z.string()
    .min(5, { message: '유저명은 5글자 이상이어야 합니다.' })
    .max(10, { message: '유저명은 10글자를 넘을 수 없습니다.' }); 

const passwordSchema = z.string()
    .min(10, { message: '비밀번호는 10 글자 이상이어야 합니다..' })
    .refine((password) => /\d/.test(password), { message: '비밀번호에는 최소 1개의 숫자가 포함되어야 합니다.' });

export async function handleForm(prevState: any, formData: FormData) {
    await new Promise((resolve) => setTimeout(resolve, 3000))

    const data = {
      email: formData.get("email"),
      username: formData.get("username"),
      password: formData.get("password")
    }
    // 에러 배열 초기화
    const errors: Record<string, string[]> = {};

    // email 유효성 검사
    const emailResult = emailSchema.safeParse(data.email);
    if (!emailResult.success) {
        if (!errors["email"]) {
            errors["email"] = [];
        }
        emailResult.error.errors.map(error => {
            errors["email"].push(error.message);
        }) 
    }

    // username 유효성 검사
    const usernameResult = usernameSchema.safeParse(data.username);
    if (!usernameResult.success) {
        if (!errors["username"]) {
            errors["username"] = [];
        }
        usernameResult.error.errors.map(error => {
            errors["username"].push(error.message);
        }) 
    }

    // password 유효성 검사
    const passwordResult = passwordSchema.safeParse(data.password);
    if (!passwordResult.success) {
        if (!errors["password"]) {
            errors["password"] = [];
        }
        passwordResult.error.errors.map(error => {
            errors["password"].push(error.message);
        }) 
    }
    
    if (Object.keys(errors).length > 0) {
        console.log(errors)
        return { errors };
    }
    // 성공 시 처리 로직
    console.log("유효성 검사 통과:", data);
    return { errors: {} };

}

