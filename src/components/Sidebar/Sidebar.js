import React from 'react';
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import analitycsImg from "./img/analitycs.svg";
import boardImg from "./img/board-brief.svg";
import briefImg from "./img/briefcase.svg";
import newsImg from "./img/newspaper-o.svg";

const Sidebar = ({className}) => {
  return (
    <ul className={className}> 
        <h3 className="navigate">NAVIGATE</h3><hr className="line"/>
      <NavLink className="navigation-link" to="/analitycs">
        <img src={analitycsImg} className="image" alt="analitycs" />Analitycs
      </NavLink>
      <NavLink className="navigation-link" to="/news">
        <img src={newsImg} className="image" alt="news" /> News
      </NavLink>
      <NavLink className="navigation-link" to="/">
        <img src={boardImg} className="image" alt="board_brief" /> Board Brief
      </NavLink>
      <NavLink className="navigation-link" to="/">
        <img src={briefImg} className="image" alt="briefcase" /> Briefcase
      </NavLink>
    </ul>
  );
}

export default styled(Sidebar)`
    display: block;
    width: 264px;
    height: 100vh;
    background-color: #2f323a;
    float: left;
    margin-top: 60px;
    padding: 0px;

    .navigate {
        float: left;
        color: #373b42;
        padding-left: 24px;
    }

    .line {
        display: block;
        width: 215px;
        height: 2px;
        border: 0;
        margin: 1em 0;
        padding: 0; 
        border-top: 2px solid #373b42;
        margin-left: 24px;
    }

    .navigation-link {
        display: block;
        font-size: 19px;
        height: 48px;
        text-align: left;
        color: #ffff;
        text-decoration: none;
    
        &:hover,
        &:active,
        &:focus {
          text-decoration: underline;
        }
        padding-left: 24px;
      }

      .image {
          float: left;
          margin-top: 5px;
          margin-right: 15px;
      }
`;