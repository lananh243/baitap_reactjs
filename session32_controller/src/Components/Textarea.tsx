import React, { useState } from 'react'

export default function Textarea() {
    const [feedback,setFeedback] = useState<string>("")
    const handleChange=(e:React.ChangeEvent<HTMLTextAreaElement>) => {
        setFeedback(e.target.value)
    }
  return (
    <div>Textarea
        <textarea name="" id="" onChange={handleChange}></textarea>
    </div>
  )
}
