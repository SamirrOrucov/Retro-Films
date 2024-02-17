import React, { useEffect, useState } from "react";
import "./OldFilmsComponents.scss";
import OldFilmsCard from "./OldFilmsCard/OldFilmsCard";

function OldFilmsComponents() {
  const [dbData, setDbData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filmsPerPage] = useState(6);
  const [sortBy, setSortBy] = useState(null)
  async function fetchData() {
    const response = await fetch("http://localhost:3003/film");
    const data = await response.json();
    setDbData(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const indexOfLastFilm = currentPage * filmsPerPage;
  const indexOfFirstFilm = indexOfLastFilm - filmsPerPage;
  const currentFilms = dbData.slice(indexOfFirstFilm, indexOfLastFilm);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="oldFilms">
      <div className="oldFilms_container">
        <div className="oldFilms_container_top">
          <h1>OLD FILMS</h1>
        </div>
        <div className="oldFilms_container_bottom">
          <div className="categorySide">
            <p>CATEGORIES</p>
            <div className="types">
              <button>ALL</button>
              <button onClick={()=>setSortBy({field:"category",asc:true})}>DRAMA</button>
              <button>COMEDY</button>
              <button>WAR</button>
            </div>
          </div>
          <div className="cards">
            {currentFilms
            
            .map((item, index) => (
              <OldFilmsCard
                key={index}
                year={item.date}
                category={item.category}
                image={item.image}
                title={item.title}
                desc={item.desc}
                duration={item.duration}
                item={item}
              />
            ))}
          </div>
          <div className="pagination">
            <div className="container">
              {Array.from(
                { length: Math.ceil(dbData.length / filmsPerPage) },
                (_, i) => (
                  <button key={i} onClick={() => paginate(i + 1)}>
                    {i + 1}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OldFilmsComponents;
