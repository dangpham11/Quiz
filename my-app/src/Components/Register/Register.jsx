import React, { useState } from "react";
import "./Register.css";
import { registerApi } from "../../Services/UseService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const Register = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    // Kiểm tra xem thông tin nhập vào có hợp lệ không
    if (!username || !password) {
      toast.error("All fields are required");
      return;
    }

    try {
      const res = await registerApi({ username, password });
      console.log("check>>>: ", res);
      if (res && Array.isArray(res) && res.length > 0) {
        // Lấy tất cả thông báo lỗi (description) và hiển thị bằng toast
        res.forEach((error) => {
          toast.error(error.description || "Unknown error");
        });
      } else if (res && res.token) {
        toast.success("Registration successful!");
        navigate("/Login"); // Chuyển hướng sang trang đăng nhập
      } else {
        toast.error(res);
      }
    } catch (error) {
      toast.error("An unexpected error occurred.");
      console.error(error);
    }
  };
  return (
    <div className="reigester">
      <div className="wrapper">
        <div className="title">Reigester</div>
        <form action="#">
          <div className="field">
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <label>Name</label>
          </div>
          <div className="field">
            <input
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
            <label>Username</label>
          </div>
          <div className="field">
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <label>Password</label>
          </div>
          <div className="field">
            <button type="button" onClick={() => handleRegister()}>
              Reigester
            </button>
          </div>
          <div className="signup-link">
            Already have an account? <a href="/Login">Login now</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
