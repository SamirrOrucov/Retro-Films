import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./FilmsDetailComponent.scss";
function FilmsDetailComponent() {
  const [dbData, setDbData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:3003/film/" + id);
        const data = await response.json();
        setDbData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);
  return (
    <div className="filmsDetailComponent">
      <div className="filmsDetailComponent_container">
        <div className="top">
          <div className="top_up">
            <div className="title">
              <h5>{dbData.title}</h5>
            </div>
            <div className="desc">
              <p>{dbData.desc}</p>
            </div>
          </div>
          <div className="top_down">
            <div className="details">
              <div className="date">
                <p>
                  <span>Date: </span>
                  {dbData.date}
                </p>
              </div>
              <div className="date">
                <p>
                  <span>Duration: </span>
                  {dbData.duration} min
                </p>
              </div>
            </div>
            <div className="category">
              <button>{dbData.category}</button>
            </div>
          </div>
        </div>
        <div className="image">
          <img src={dbData.image} alt="" />
        </div>
        <div className="allDetail">
          <div className="left">
            <div className="director">
              <img
                src="https://s3-alpha-sig.figma.com/img/58cd/5642/6ac18649dca52965c00a427aef038cc2?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FvJ-O1YqQlHAMbxHDIfeM7JHUE05bJVQ53S~yfaad9FY-UIl1rVpIifJ3BYe109M698yDDEwbt~NX9xXHLdhULZpxZVmnfw4fOXBwflLACDaUHxrvkXPz1PxPFfdX6maSYg-O-7xOPUNDelTKKs69RFd3kFx68C3Duk6EgElNQ8Xi~BQoM~Y0oO~YXVQ8qXEafLzUoNwAqtrpl284sOoYfJ-Z97KZyfPa3dm6XaWRGznx31s9ThGnyVWSrKPw5zgzYJRdy8vG0CWe5RPxuZsDCvf~hABd90LOAAybkZarLoDS8JBA3Ful1qU8jCfv3fnQXT3u15kq7CgqwCJwWSgIw__"
                alt=""
              />
              <p>{dbData.director}</p>
            </div>
            <div className="line"></div>
            <div className="directorYears">
              <p>Director of the film</p>
              <span>{dbData.directorYears}</span>
            </div>
          </div>
          <div className="right">
            <p>{dbData.desc}</p>
          </div>
        </div>
        <div className="feedbackSection">
          <p className="feedback">
            FEEDBACK <i class="fa-solid fa-arrow-right"></i>
          </p>
          <div className="rating">
            <p>What do you think of the film?</p>
            <div className="stars">
              <i  class="fa-solid fa-star"></i>
              <i  class="fa-solid fa-star"></i>
              <i  class="fa-solid fa-star"></i>
              <i class="fa-regular fa-star-half-stroke"></i>
              <i class="fa-regular fa-star"></i>
            </div>
          </div>
          <div className="commentSection">
            <p>Do you have any thoughts you’d like to share?</p>
            <input type="text" name="" id="" />
            <button>SUBMIT</button>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default FilmsDetailComponent;