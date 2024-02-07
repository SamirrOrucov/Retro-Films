import React from "react";
import "./OldFilmsCards.scss";
function OldFilmsCard({ year, category, image, title, desc, duration }) {
  const { hours, minutes } = timeConvert(duration);
  function timeConvert(duration) {
    const minutes = duration % 60;
    const hours = (duration - minutes) / 60;
    return { hours, minutes };
  }
  return (
    <div className="oldFilmsCard">
      <div className="oldFilmsCard_container">
        <div className="top">
          <div className="year">
            <p>{year}</p>
          </div>
          <div className="catgory">
            <button>{category}</button>
          </div>
        </div>
        <div className="image">
          <img src={image} alt="" />
        </div>
        <div className="middle">
          <div className="title">
            <p>{title}</p>
          </div>
          <div className="desc">{desc}</div>
        </div>
        <div className="duration">
          <p>
            <span>Duration: </span>
            {hours+ "h" + " " + minutes+"min"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default OldFilmsCard;
