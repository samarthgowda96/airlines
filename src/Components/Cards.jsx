import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import "./Cards.css";

const useStyles = makeStyles({
  root: {
    width: "300px",
    marginLeft: "16px",
    margin: "5px",
    height: "240px",
    textAlign: "center",
    verticalAlign: "middle",
    cursor: "context-menu",
    marginTop: "16px",
    borderRadius: "8px",
    boxShadow:
      "0 -1px 4px 0 rgba(25,32,36,0.04), 0 3px 6px 0 rgba(25,32,36,0.16)",
    "&:hover": {
      borderColor: "#564345"
    }
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: "16px",
    textAlign: "center",
    marginTop: "80px",
    fontFamily: "Helvetica",
    fontWeight: "bold",
    color: "#192024"
  },
  pos: {
    marginBottom: 12
  },
  flexbox: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    margin: "-10px 0 0 -10px"
  },
  box: {
    display: "flex",
    flexDirection: "row"
  },
  main: {
    marginLeft: "94px",
    marginRight: "60px"
  }
});
const Cards = ({ airlines, filterCat }) => {
  const [isShown, setIsShown] = useState({
    name: "",
    alliance: ""
  });

  const classes = useStyles();
  const set = (airline, alliance) => {
    setIsShown({ name: airline, alliance: alliance });
  };

  return (
    <div className={classes.main}>
      <div className={classes.flexbox}>
        {airlines.map((airline, idx) => (
          <Card
            className={classes.root}
            variant="outlined"
            onMouseEnter={(e) => set(airline.name, airline.alliance)}
            onMouseLeave={() => setIsShown("")}
            key={idx}
          >
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                {airline.name}
              </Typography>
              {airline.alliance !== "none" &&
              isShown.alliance === "SA" &&
              airline.name === isShown.name ? (
                <div className="alliance">Star Alliance</div>
              ) : (
                <div></div>
              )}
              {airline.alliance !== "none" &&
              isShown.alliance === "ST" &&
              airline.name === isShown.name ? (
                <div className="alliance">Star Team</div>
              ) : (
                <div></div>
              )}
              {airline.alliance !== "none" &&
              isShown.alliance === "OW" &&
              airline.name === isShown.name ? (
                <div className="alliance">One World</div>
              ) : (
                <div></div>
              )}
              {airline.name === isShown.name && (
                <div className="numb">
                  {" "}
                  <p>
                    {airline.phone}
                    <br></br>
                    {airline.site.substring(airline.site.lastIndexOf("/") + 1)}
                  </p>{" "}
                </div>
              )}
              {/* Logo URL from API is breaking */}
              {/*  <img src={airline.logoURL} alt="Image is broken"/> */}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Cards;
