/* React */
import React from "react";

/* Components */
import ADayOfForecasts from "./aDayOfForecasts";
import Loader from "../../loader";

const WeatherForecasts = (props) => {
  const dailyForecasts = props.weatherForecasts.DailyForecasts;

  const arrayOfUndefined = [...Array(5).map((x) => undefined)];

  const loadingAnimStyle = {
    border: "solid",
    borderRadius: "25px",
    borderColor: "#18232e",
    margin: "5px",
    padding: "5px",
    width: "128px",
    height: "323px",
    lineHeight: "441px",
    backgroundColor: "#18232e",
  };

  return (
    <React.Fragment>
      {/* If the dailyForecasts is undefined 
      this expression will return an array which contains only undefineds. This way we can avoid the app's crash*/}
      {(dailyForecasts || arrayOfUndefined).map((day, index) => (
        <Loader
          key={index}
          type={1}
          data={{ detailsOfTheDay: day }}
          style={loadingAnimStyle}
        >
          <ADayOfForecasts key={index} />
        </Loader>
      ))}
    </React.Fragment>
  );
};

export default WeatherForecasts;
