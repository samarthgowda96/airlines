import React, { useState, useEffect } from "react";
import "./Categories.css";
const Categories = ({ filterCat }) => {
  const [oneWorld, setOneWorld] = useState(false);
  const [skyTeam, setSkyTeam] = useState(false);
  const [starAlliance, setStarAlliance] = useState(false);

  useEffect(() => {
    filterCat({ oneWorld, skyTeam, starAlliance });
  }, [oneWorld, skyTeam, starAlliance]);

  return (
    <div>
      <h3 className="filter-title">Filter by Alliances</h3>
      <div className="cont">
        <input
          type="checkbox"
          className="filter-btn"
          onClick={() => setOneWorld(!oneWorld)}
        />
        <label className="label">Oneworld</label>
        <input
          type="checkbox"
          className="filter-btn"
          onClick={() => setSkyTeam(!skyTeam)}
        />
        <label className="label">Sky Team</label>
        <input
          type="checkbox"
          className="filter-btn"
          onClick={() => setStarAlliance(!starAlliance)}
        />
        <label className="label">Star Alliance</label>
      </div>
    </div>
  );
};

export default Categories;
