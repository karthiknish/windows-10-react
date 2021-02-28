/* React */
import React from "react";

const WeatherIcon = (props) => {
  const { style, weatherIconType } = props;

  function importAll(r) {
    return r.keys().map(r);
  }

  const images = importAll(
    require.context("../../img", false, /\.(png|jpe?g|svg)$/)
  );

  switch (weatherIconType) {
    case 1:
    case 2:
      return (
        <img
          src={images[1]}
          style={style}
          draggable={false}
          alt="weather_icon_01"
        />
      );
    case 3:
    case 4:
      return (
        <img
          src={images[9]}
          style={style}
          draggable={false}
          alt="weather_icon_11"
        />
      );
    case 5:
    case 6:
      return (
        <img
          src={images[10]}
          style={style}
          draggable={false}
          alt="weather_icon_12"
        />
      );
    case 7:
      return (
        <img
          src={images[3]}
          style={style}
          draggable={false}
          alt="weather_icon_03"
        />
      );
    case 8:
      return (
        <img
          src={images[11]}
          style={style}
          draggable={false}
          alt="weather_icon_13"
        />
      );
    case 11:
      return (
        <img
          src={images[8]}
          style={style}
          draggable={false}
          alt="weather_icon_11"
        />
      );
    case 12:
      return (
        <img
          src={images[12]}
          style={style}
          draggable={false}
          alt="weather_icon_14"
        />
      );
    case 13:
    case 14:
      return (
        <img
          src={images[14]}
          style={style}
          draggable={false}
          alt="weather_icon_17"
        />
      );
    case 15:
      return (
        <img
          src={images[4]}
          style={style}
          draggable={false}
          alt="weather_icon_04"
        />
      );
    case 16:
      return (
        <img
          src={images[15]}
          style={style}
          draggable={false}
          alt="weather_icon_19"
        />
      );
    case 17:
      return (
        <img
          src={images[16]}
          style={style}
          draggable={false}
          alt="weather_icon_20"
        />
      );
    case 18:
      return (
        <img
          src={images[13]}
          style={style}
          draggable={false}
          alt="weather_icon_15"
        />
      );
    case 19:
    case 21:
    case 32:
      return (
        <img
          src={images[5]}
          style={style}
          draggable={false}
          alt="weather_icon_05"
        />
      );
    case 20:
    case 43:
      return (
        <img
          src={images[18]}
          style={style}
          draggable={false}
          alt="weather_icon_23"
        />
      );
    case 22:
    case 23:
    case 44:
      return (
        <img
          src={images[19]}
          style={style}
          draggable={false}
          alt="weather_icon_28"
        />
      );
    case 24:
      return (
        <img
          src={images[6]}
          style={style}
          draggable={false}
          alt="weather_icon_06"
        />
      );
    case 25:
    case 29:
      return (
        <img
          src={images[20]}
          style={style}
          draggable={false}
          alt="weather_icon_29"
        />
      );
    case 26:
      return (
        <img
          src={images[17]}
          style={style}
          draggable={false}
          alt="weather_icon_21"
        />
      );
    case 30:
      return (
        <img
          src={images[25]}
          style={style}
          draggable={false}
          alt="weather_icon_40"
        />
      );
    case 31:
      return (
        <img
          src={images[26]}
          style={style}
          draggable={false}
          alt="weather_icon_44"
        />
      );
    case 33:
      return (
        <img
          src={images[2]}
          style={style}
          draggable={false}
          alt="weather_icon_02"
        />
      );
    case 34:
    case 35:
    case 36:
      return (
        <img
          src={images[21]}
          style={style}
          draggable={false}
          alt="weather_icon_32"
        />
      );
    case 37:
    case 38:
      return (
        <img
          src={images[22]}
          style={style}
          draggable={false}
          alt="weather_icon_33"
        />
      );
    case 39:
    case 40:
      return (
        <img
          src={images[24]}
          style={style}
          draggable={false}
          alt="weather_icon_35"
        />
      );
    case 41:
    case 42:
      return (
        <img
          src={images[23]}
          style={style}
          draggable={false}
          alt="weather_icon_34"
        />
      );

    /* Until that point the icon numbers come from the API */

    case "Umbrella":
      return (
        <img
          src={images[27]}
          style={style}
          draggable={false}
          alt="weather_icon_45"
        />
      );
    case "Humidity":
      return (
        <img
          src={images[7]}
          style={style}
          draggable={false}
          alt="weather_icon_07"
        />
      );
    case "Wind":
      return (
        <img
          src={images[5]}
          style={style}
          draggable={false}
          alt="weather_icon_05"
        />
      );

    default:
      return (
        <img
          src={images[0]}
          style={style}
          draggable={false}
          alt="weather_icon_0"
        />
      );
  }
};

export default WeatherIcon;
