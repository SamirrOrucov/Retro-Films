import React, { useContext } from "react";
import "./OldFilmsCards.scss";
import { WatchlistContext } from "../../../context/WatchlistContext";
function OldFilmsCard({ year, item, image, title, desc, duration }) {
  const { addWatchlist, watchlist } = useContext(WatchlistContext);

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
          {watchlist.some((x) => x._id === item._id) ? (
                <button
                  onClick={() => addWatchlist(item)}
                  className="addedWatchlist"
                >
                  Added
                </button>
              ) : (
                <button onClick={() => addWatchlist(item)}>
                  Add Watchlist
                </button>
              )}
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
