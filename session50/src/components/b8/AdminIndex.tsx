import { Outlet } from "react-router-dom";

export default function AdminIndex() {
  return (
    <div>
        <h2>Đây là AdminIndex</h2>
        <Outlet></Outlet>
    </div>
  )
}
