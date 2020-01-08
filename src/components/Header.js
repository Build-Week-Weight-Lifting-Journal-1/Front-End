import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../images/Ml_logo.png"

const HeaderStyle = styled.header`
  background-color: #18181E;
  height: 65px;
  display: flex;
  width: 100%;
  align-items: center;

`
const NavStyle = styled.nav`
  display: flex;
  width: 50%;
  justify-content: space-evenly;
  padding-left: 10%;
`

const ImgCont = styled.div`
  width: 50%;
  display: flex;
`

const Logo = styled.img`
  margin-left: 15%;
  width: 74px;
`


export default function Header() {
  return (
    <HeaderStyle>
      <ImgCont>
        <Logo src={logo}/>
      </ImgCont>
      <NavStyle>
        <Link className="nav-link">Home</Link>
        <Link className="nav-link">Logout</Link>
      </NavStyle>
    </HeaderStyle>
  )
};