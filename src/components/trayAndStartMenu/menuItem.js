/* React */
import React from "react";

/* Comps */

/* Styles & Animations*/
import Styled from "styled-components";
import { keyframes } from "styled-components";

const ItemsAnim = keyframes`
    0%{
      opacity: 0;
      -webkit-filter: blur(20px);
      filter: blur(20px);
    }
    50%{
      opacity: 0;
      -webkit-filter: blur(20px);
      filter: blur(20px);
    }
    100%{
      opacity: 1;
      -webkit-filter: blur(0px);
      filter: blur(0px);
    }
`;

const LauncherIcon = Styled.img`
    display: block;
    padding: 10px 20px 10px 10px;
    height: 50px;
    width: 50px;
    float: left;
`;

const Item = Styled.div`
    margin: 0px 0px 0px 64px;
    font-size: 150%;
    font-family: Raleway;
    display: flex;
    flex-direction: row;
    align-items: center;
    animation-name: ${ItemsAnim};
    animation-duration: 1.5s;
    animation-fill-mode: forward;

    &:hover {
      background-color: rgba(255, 103, 0, 1) !important
    }
`;

const MenuItem = (props) => {
  return (
    <Item onClick={props.onClick}>
      <LauncherIcon
        src={props.iconPath}
        alt="launcher_icon"
        draggable={false}
      />
      {props.itemName}
    </Item>
  );
};

export default MenuItem;
