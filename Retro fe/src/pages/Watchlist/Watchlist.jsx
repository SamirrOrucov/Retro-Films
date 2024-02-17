import React, { useContext } from "react";
import { WatchlistContext } from "../../context/WatchlistContext";
import "./Watchlist.scss";
function Watchlist() {
  const { watchlist,addWatchlist } = useContext(WatchlistContext);
  return (
    <div className="watchlist">
      <div className="watchlist_container">
        <div className="watchlist_container_cards">
          {watchlist.length?watchlist.map((item) => (
            <div className="watchlist_container_cards_card">
              <div className="top">
                <div className="year">
                <button
                  onClick={() => addWatchlist(item)}
                  className="addedWatchlist"
                >
                  Added
                </button>
                </div>
                <div className="catgory">
                  <button>{item.category}</button>
                </div>
              </div>
              <div className="image">
                <img src={item.image} alt="" />
              </div>
              <div className="middle">
                <div className="title">
                  <p>{item.title}</p>
                </div>
                <div className="desc">{item.desc}</div>
              </div>
              <div className="duration">
                <p>
                  <span>Duration: </span>
                  {item.duration} min
                </p>
              </div>
            </div>
          )):<h1>Watchlist is empty..</h1>}
        </div>
      </div>
    </div>
  );
}

export default Watchlist;
