import React, { createContext, useState } from "react";
import useLocalHook from "../hook/useLocalHook";

export const WatchlistContext = createContext();
function WatchlistProvider({ children }) {
  const [watchlist, setWatchlist] = useLocalHook("watchlist", []);
  function addWatchlist(item) {
    const index = watchlist.findIndex((x) => x._id === item._id);
    if (index === -1) {
      setWatchlist([...watchlist, item]);
    } else {
      setWatchlist(watchlist.filter((x) => x._id !== item._id));
    }
  }
  return <WatchlistContext.Provider value={{addWatchlist,watchlist}}>{children}</WatchlistContext.Provider>;
}

export default WatchlistProvider;
