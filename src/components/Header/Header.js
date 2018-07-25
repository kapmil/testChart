import React from 'react';
import logo from '../../logo.svg';
import shape from './img/shape.svg';
import styled from "styled-components";

const Header = ({className}) => {
    return (
      <div className={className}>
        <div className="logo_wrapper">
            <img src={logo} className="logo" alt="logo" />
        </div>
        <div className="right-part">
            <p className="admin_name">Admin name</p>
            <img src={shape}
                className="shape" alt="shape"/>
        </div>
      </div>
     
    );
  }

export default styled(Header)`
  position: absolute;
  top: 0;
  width: 100%;
  height: 61px;
  background-color: #2f323a;

  .right-part {
      position: relative;
      height: 100%;
      content-align: center;
      overflow: hidden;
      float: right;
      display: inline;
  }

  .admin_name {
    width: 95px;
    height: 100%;
    float: left;
    padding-right: 66px;
    padding-top: 21px;
    color: #ffff;
  }

  .shape {
    width: 16px;
    height: 16px;
    object-fit: contain;
    float: right;
    padding-right: 40px;
    padding-top: 23px;
  }

  .logo_wrapper {
      position: relative;
    width: 264px;
    height: 60px;
    float: left;
    overflow: hidden;
    background-color: #1e2025;
  }

  .logo {
    position: relative;
    
    padding-top: 20px;
    padding-left: 48px;
    padding-right: 48px;
    padding-bottom: 20px;
  }
  
`;
