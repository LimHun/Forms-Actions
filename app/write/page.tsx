"use client"

import { useState } from "react"
import { useFormState } from "react-dom"
import { updateTweet } from "./actions"
import Button from "../components/form-btn"
import InputArea from "../components/form-textarea"

function setError(arg0: string) {
  throw new Error(arg0)
}

export default function AddProduct() {
  const [preview, setPreview] = useState("")
  const [state, action] = useFormState(updateTweet, null)
  return (
    <div>
      <form action={action} className="flex flex-col gap-5 p-5">
        <InputArea
          name="tweet"
          required
          placeholder="메시지를 남겨주세요."
          rows={4} // 기본 4줄을 보여줌
          className="w-full resize-none rounded-md border border-neutral-300 p-3"
          errors={state?.fieldErrors.tweet}
        />
        <Button text="작성 완료" />
      </form>
    </div>
  )
}
