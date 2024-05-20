import React, { useState } from 'react';
interface User {
    email?: string;
}
export default function Bai1() {
    const [email, setEmail] = useState("");

    const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const user: User = {
            email: email,
        }
        console.log("Email người dùng nhập :", user);
        
        
    };

    return (
        <div>
            <h1>Bài 1 :</h1>
            <form onSubmit={handleSubmit}>
                <h2>Form</h2>
                <p>Email: {email}</p>
                <input type="text" placeholder="Nhập email" onChange={changeEmail} />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}