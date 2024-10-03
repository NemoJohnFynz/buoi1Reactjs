import { useState } from "react";

function Login() {
    // Khởi tạo state cho tài khoản
    const [account, setAccount] = useState({
        username: "",
        password: "" // Đảm bảo key là "password" chứ không phải "Password"
    });

    const [admin, setAdmin] = useState(false); // State cho checkbox "Is Admin"

    const handleLogin = () => {
        console.log("Username:", account.username); // Ghi tên người dùng ra console
        console.log("Password:", account.password); // Ghi mật khẩu ra console
        console.log("Is Admin:", admin); // Ghi trạng thái Admin ra console

    };


    const handleChange = (event) => {
        const { name, value } = event.target; // Lấy tên và giá trị từ ô nhập liệu
        setAccount((prevAccount) => ({
            ...prevAccount,
            [name]: value 
        }));
    };

    return (
        <div style={{ padding: "20px", maxWidth: "300px", margin: "auto" }}>
            <h2>Đăng Nhập</h2>
            <label>
                Enter your username:
                <input
                    type="text"
                    name="username" // Đặt name cho input
                    value={account.username}
                    onChange={handleChange} // Cập nhật state cho tên người dùng
                    style={{ display: "block", width: "100%", marginBottom: "10px" }}
                />
            </label>
            <label>
                Enter your password:
                <input
                    type="password"
                    name="password" // Đặt name cho input
                    value={account.password}
                    onChange={handleChange} // Cập nhật state cho mật khẩu
                    style={{ display: "block", width: "100%", marginBottom: "10px" }}
                />
            </label>
            <label>
                <input
                    type="checkbox"
                    checked={admin}
                    onChange={(e) => setAdmin(e.target.checked)}
                />
                Is Admin?
            </label>
            <input
                type="button"
                value="Đăng nhập"
                onClick={handleLogin} 
                style={{ marginTop: "10px" }}
            />
        </div>
    );
}

export  {Login} 
