import React, { useState } from "react";

function EditProfile() {
    const [nickName, setNickName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [image, setImage] = useState("");
  return (
    <div className="editProfile">
      <div className="editProfile_container">
        <form action="">
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            accept="image/*"
          ></input>
          <input
            type="text"
            name=""
            id="nickName"
            onChange={(e) => setNickName(e.target.value)}
          />
          <input
            type="password"
            id="myInput"
            name=""
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
}

export default EditProfile;
