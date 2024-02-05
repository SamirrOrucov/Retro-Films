import React from "react";
import { Link } from "react-router-dom";
import ActorCard from "./ActorCard/ActorCard";

function ActorsSection() {
  return (
    <div className="actors">
      <div className="actors_container">
        <div className="actors_container_top">
          <p className="actors">Actors</p>
          <div className="link">
            <p>
              <Link>
                ALL  <i class="fa-solid fa-arrow-right"></i>
              </Link>
            </p>
          </div>
        </div>
        <div className="actors_container_cards">
            <ActorCard/>
        </div>
      </div>
    </div>
  );
}

export default ActorsSection;
