import { useEffect, useState } from "react";
import Cards from "./Components/Cards";
import Categories from "./Components/Categories";
import logo from "./image/Logo.svg";
import "./App.css";

import fetchJsonp from "fetch-jsonp";

export default function App() {
  const [newAir, setNewAir] = useState([]);
  const [airlines, setAirlines] = useState([]);
  const [fill, setfill] = useState([]);

  useEffect(() => {
    fetchJsonp(
      "https://www.kayak.com/h/mobileapis/directory/airlines/homework",
      {
        jsonpCallback: "jsonp"
      }
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        setAirlines(json);
        setNewAir(json);
        setfill(json);
      })
      .catch(function (ex) {
        console.log("parsing failed", ex);
      });
  }, []);
  const effect = () => {
    setAirlines(fill);
  };
  const filterCat = (props) => {
    effect();
    if (
      props.oneWorld &&
      props.skyTeam === false &&
      props.starAlliance === false
    ) {
      const sortedAirlines = airlines.filter(
        (airline) => airline.alliance === "OW"
      );
      setAirlines(sortedAirlines);
    } else if (
      props.skyTeam &&
      props.oneWorld === false &&
      props.starAlliance === false
    ) {
      const sortedAirlines = airlines.filter(
        (airline) => airline.alliance === "ST"
      );
      setAirlines(sortedAirlines);
    } else if (
      props.starAlliance &&
      props.skyTeam === false &&
      props.oneWorld === false
    ) {
      const sortedAirlines = airlines.filter(
        (airline) => airline.alliance === "SA"
      );
      setAirlines(sortedAirlines);
    } else if (
      props.starAlliance &&
      props.oneWorld &&
      props.skyTeam === false
    ) {
      let sortedAirlines = newAir.filter(
        (airline) => airline.alliance === "SA" || airline.alliance === "OW"
      );

      setAirlines(sortedAirlines);
    } else if (
      props.starAlliance &&
      props.skyTeam &&
      props.oneWorld === false
    ) {
      const sortedAirlines = newAir.filter(
        (airline) => airline.alliance === "SA" || airline.alliance === "ST"
      );

      setAirlines(sortedAirlines);
    } else if (
      props.oneWorld &&
      props.skyTeam &&
      props.starAlliance === false
    ) {
      let sortedAirliness = newAir.filter(
        (airline) => airline.alliance === "OW" || airline.alliance === "ST"
      );

      setAirlines(sortedAirliness);
    } else if (props.oneWorld && props.skyTeam && props.starAlliance) {
      var sortedAirlines = fill.filter(
        (airline) =>
          airline.alliance === "OW" ||
          airline.alliance === "ST" ||
          airline.alliance === "SA"
      );

      setAirlines(sortedAirlines);
    }
  };
  return (
    <div className="App">
      <div className="header">
        <img className="logo" src={logo} alt="kayak-logo" />
      </div>
      <h1 className="title"> Airlines </h1>
      <Categories filterCat={filterCat} />
      <Cards airlines={airlines} filterCat={filterCat} />
    </div>
  );
}
