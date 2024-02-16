import React, { useContext } from 'react'
import { WatchlistContext } from '../../context/WatchlistContext'

function Watchlist() {
    const {watchlist} = useContext(WatchlistContext)
  return (
    <div className='watchlist'>
        <div className="watchlist_container">
{
    watchlist.title
}
        </div>
    </div>
  )
}

export default Watchlist