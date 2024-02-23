import React, { useContext } from "react";
import "./OldFilmsCards.scss";
import { WatchlistContext } from "../../../context/WatchlistContext";
import { Link } from "react-router-dom";
function OldFilmsCard({ year, item, image, title, desc, duration }) {
  const { addToWatchlist, watchlist ,removeFromWatchlist} = useContext(WatchlistContext);
  console.log("oldfilmm card--");
  console.log(watchlist);

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
          {watchlist.some((x) => x === item._id) ? (
                <button
                  onClick={() => removeFromWatchlist(item)}
                  className="addedWatchlist"
                >
                  Added
                </button>
              ) : (
                <button onClick={() => addToWatchlist(item)}>
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
          <Link to={"/films/" + item._id}>
            <p>{title}</p>
            </Link>
          </div>
          <div className="desc">{desc.slice(0,250)}..</div>
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
