import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./UserProfile.scss";
import { UserTokenContext } from "../../context/UserTokenContext";
function UserProfile() {
  const { decodedToken, logout, addToken } = useContext(UserTokenContext);
  console.log(decodedToken);
  return (
    <div className="userProfile">
      <div className="userProfile_container">
        <div className="userProfile_container_top">
          <img src={decodedToken.image} alt="" />
          <p className="profileName">{decodedToken.name} </p>
        </div>
        <div className="userProfile_container_down">
          <Link to={"/edit"}>
            <i class="fa-solid fa-user-pen"></i> Edit Profile
          </Link>
          <Link>
            <i class="fa-solid fa-bookmark"></i> Watchlist
          </Link>
          <Link onClick={() => logout()}>
            <i class="fa-solid fa-arrow-right-from-bracket"></i> Logout
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
