import { useContext } from "react"
import { Context } from "./UseContext"

export default function E() {
    let result = useContext(Context)
  return (
    <div>E
        <br /><br />
        Tên {result}

    </div>
  )
}
