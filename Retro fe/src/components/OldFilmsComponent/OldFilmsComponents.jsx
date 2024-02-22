import React, { useEffect, useState } from "react";
import "./OldFilmsComponents.scss";
import OldFilmsCard from "./OldFilmsCard/OldFilmsCard";

function OldFilmsComponents() {
  const [dbData, setDbData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filmsPerPage] = useState(6);
  const [category, setCategory] = useState("All");

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
  const handleCategoryClick = (category) => {
    setCategory(category);
    setCurrentPage(1); // Reset to first page when category changes
  };

  const filteredProducts =
    category === "All"
      ? dbData
      : dbData.filter((item) => item.category === category);

  const totalPages = Math.ceil(filteredProducts.length / filmsPerPage);

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
              <button onClick={() => handleCategoryClick("All")}>ALL</button>
              <button onClick={() => handleCategoryClick("dram")}>DRAMA</button>
              <button onClick={() => handleCategoryClick("komediya")}>COMEDY</button>
              <button onClick={() => handleCategoryClick("war")}>WAR</button>
            </div>
          </div>
          <div className="cards">
            {currentFilms.map((item, index) => (
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
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => paginate(i + 1)}
                  className={currentPage === i + 1 ? "active" : ""}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OldFilmsComponents;
