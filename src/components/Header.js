import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderStyle = styled.header`
  background-color: #18181E;
  height: 50px;
  display: flex;
  width: 100%;
  align-items: center;

`
const NavStyle = styled.nav`
  display: flex;
  width: 50%;
  justify-content: space-evenly;

`

const ImgCont = styled.div`
  width: 50%;
  display: flex;
`

const Logo = styled.img`
  margin-left: 15%;
`


export default function Header() {
  return (
    <HeaderStyle>
      <ImgCont>
        <Logo src="https://via.placeholder.com/40"/>
      </ImgCont>
      <NavStyle>
        <Link className="nav-link">Home</Link>
        <Link className="nav-link">Account</Link>
        <Link className="nav-link">Logout</Link>
      </NavStyle>
    </HeaderStyle>
  )
};