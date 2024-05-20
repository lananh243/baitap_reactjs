import React, { useState } from 'react'

export default function Bai9() {
    const [studentName, setStudentName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Kiểm tra các trường bắt buộc không được để trống
        if (!studentName || !email || !password) {
        setErrorMessage('Vui lòng điền đầy đủ thông tin.');
        return;
        }

        // Kiểm tra email có bị trùng không (giả sử đã có email trong localStorage)
        const existingUser = localStorage.getItem('user');
        if (existingUser && JSON.parse(existingUser).email === email) {
        setErrorMessage('Email đã được sử dụng.');
        return;
        }

        // Lưu dữ liệu vào localStorage
        const formData = {
        studentName,
        email,
        password,
        address,
        };
        localStorage.setItem('user', JSON.stringify(formData));

        // Xóa giá trị trong ô input
        setStudentName('');
        setEmail('');
        setPassword('');
        setAddress('');

        // Hiển thị thông báo thành công
        setSuccessMessage('Đăng ký tài khoản thành công.');

        // Focus vào ô input Tên sinh viên
        const nameInput = document.getElementById('studentName') as HTMLInputElement;
        if (nameInput) {
        nameInput.focus();
        }
    };
  return (
    <div>
        <h1>Bài 9</h1>
        
        <form onSubmit={handleSubmit}>
            <h2>Đăng ký tài khoản</h2>
            <div>
            <label htmlFor="studentName">Tên sinh viên</label> <br /><br />
            <input
                type="text"
                id="studentName"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
            />
            </div>
            <br />
            <div>
            <label htmlFor="email">Email</label><br /><br />
            <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            </div>
            <br />
            <div>
            <label htmlFor="password">Mật khẩu</label> <br /><br />
            <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            </div>
            <br />
            <div>
            <label htmlFor="address">Địa chỉ</label><br /><br />
            <input
                type="text"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
            />
            </div>
            <br /><br />
            <button type="submit">Đăng ký</button>
        </form>
        {errorMessage && <p>{errorMessage}</p>}
        {successMessage && <p>{successMessage}</p>}
    </div>
  )
}
