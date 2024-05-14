import React, {useState} from 'react'

export default function Function() {
    const [fullName, setFullName] = useState<string>("Hoa");
    const [age, setAge] = useState<number>(18);
    const [students, setStudents] = useState<string[]>([]);
    const [isActive, setIsActive] = useState<boolean>(true);
    const handleChange = () => {
        setAge(20);
        setFullName("Hồng")
    }
    // const fullName:string = "Hoa"
  return (
    <div>Function
        {/* 
        State : dùng để quản lí dữ liệu trong component
        Đối với function để quản lí dữ liệu dùng useState
        đây là hook sinh ra giúp function có thể quản lí dữ liệu
         */}
        <p>{fullName} năm nay {age} tuổi</p>
        <button onClick={handleChange}>change age</button>
    </div>
  )
}
