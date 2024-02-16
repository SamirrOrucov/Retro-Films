import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserTokenContext } from "../../context/UserTokenContext";

function Register() {
  const { addToken } = useContext(UserTokenContext);
  const navigate = useNavigate();
  const [passwordStatus, setPasswordStatus] = useState(true);
  const [nickName, setNickName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");

  function passwordToggle() {
    const x = document.getElementById("myInput");

    if (passwordStatus) {
      x.type = "text";
    } else if (passwordStatus == false) {
      x.type = "password";
    }
    setPasswordStatus(!passwordStatus);
  }
  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("nickName", nickName);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("avatar", image);
    const response = await fetch("http://localhost:3003/auth/register", {
      method: "POST",
      body: formData,
    });
    const tokenResponse = await response.json();
      const token = tokenResponse.token;

      if (!token || typeof token !== 'string') {
        throw new Error('Invalid token received from the server');
      }

      addToken(token);
      navigate("/");
  }
  return (
    <>
      <div className="form">
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            name=""
            id="nickName"
            onChange={(e) => setNickName(e.target.value)}
          />
          <input
            type="email"
            name=""
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="password">
            <input
              type="password"
              id="myInput"
              name=""
              onChange={(e) => setPassword(e.target.value)}
            />
            <i
              className={
                passwordStatus ? "  fa-solid fa-eye" : "fa-solid fa-eye-slash"
              }
              onClick={() => passwordToggle()}
            ></i>
          </div>

          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            accept="image/*"
          ></input>
          <button>Submit</button>
        </form>
      </div>
    </>
  );
}

export default Register;
