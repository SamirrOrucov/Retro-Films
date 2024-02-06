import React, { useEffect, useState } from 'react'
import "./OldFilmsComponents.scss"
import OldFilmsCard from './OldFilmsCard/OldFilmsCard'
function OldFilmsComponents() {
    const [dbData, setDbData] = useState([]);
    async function fetchData() {
      const response = await fetch("http://localhost:3003/film");
      const data = await response.json();
      setDbData(data);
    }
    useEffect(() => {
      fetchData();
    }, []);
  
  return (
    <div className='oldFilms'>
        <div className="oldFilms_container">
            <div className="oldFilms_container_top">
                <h1>OLD FILMS</h1>
            </div>
            <div className="oldFilms_container_bottom">
                <div className="categorySide">
                    <p>Categories</p>
                    <div className="types">
                        <button>ALL</button>
                        <button>DRAMA</button>
                        <button>COMEDY</button>
                        <button>WAR</button>

                    </div>
                </div>
                <div className="cards">
                    {
                        dbData.map((item)=>
                        
                        <OldFilmsCard year={item.year} category={item.category} image={item.image} title={item.title} desc={item.desc} duration={item.duration}/>
                        )
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default OldFilmsComponents