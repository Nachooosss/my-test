import React from "react";
import "./../../Styles/Categories.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const Categories = () => {
  const sections = [
    "Action Games",
    "Sports Games",
    "adventure Games",
    "Arcade Games",
    "Fantasy Games",
    "Strategy Games",
    "Shooter Games",
  ];
  return (
    <>
      <span className="title-span title-cat">Trending Categories</span>
      <section className="grid-container grid-category">
        {sections.map((sections, index) => (
          <div key={index} className="item box-category">
            <span className="title-span box-text box-index">
              <span className="custom-color">/</span>
              {index}
            </span>
            <br className="box-gabs" />
            <span className="title-span box-text box-game">{sections}</span>
            <br className="box-gabs" />
            <button className="btn-arrow">
              <FontAwesomeIcon icon={faArrowRight} size="lg" />
            </button>
          </div>
        ))}
        <div className="item box-category-all box-category">
          <span className="title-span box-text box-index">
            <span className="custom-color">/</span>View All
          </span>
          <br className="box-gabs" />
          <span className="title-span box-text box-game">All Categories</span>
          <br className="box-gabs" />
          <button className="btn-arrow">
            <FontAwesomeIcon icon={faArrowRight} size="lg" />
          </button>
        </div>
      </section>
    </>
  );
};

export default Categories;
