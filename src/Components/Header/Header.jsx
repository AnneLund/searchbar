import React from "react";
import { Link } from "react-router-dom";
import {MainNav} from './MainNav.styled'
import {useState, useEffect} from 'react'
import styled from "styled-components";
import useIsOpenNavStore from './useIsOpenNavStore'
import Logo from '../../Assets/Images/overlook-logo.png'


const Header = () => {
  const {isOpen, setIsOpen} = useIsOpenNavStore()
  const [shrinkHeader, setShrinkHeader] = useState(false);

  useEffect(() => {
    const handler = () => {
      let shrink = document.body.scrollTop > 50 || document.documentElement.scrollTop > 50 ? true : false;
      setShrinkHeader(shrink)
    }

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler)
  }, [])

  const Hamburger = styled.div`
  flex-direction: column;
  
  cursor: pointer;
  span{
    height: 5px;
    width: 25px;
    background-color: #000000;
    margin-bottom: 4px;
    border-radius: 5px;

    @media screen and (max-width: 768px){
      display: flex;
    }
  }
`

const Menu = styled.nav`
overflow: hidden;
display: flex;
justify-content: space-between;
align-items: center;
gap: 0.5rem;
position: relative;

@media (max-width: 768px){
  flex-direction: column;
  transition: max-height 0.3 ease-in;
  width: 100%;
  z-index: 50000;
  max-height: ${({isOpen}) => isOpen ? 'auto' : '0'};
}
`

const MenuLink = styled(Link)`
  padding: .4rem 1.2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: white;
  transition: all 0.3s ease-in;
  font-size: .9rem;
  &:hover{
    color: #d3e2e8;
  }

  @media (max-width: 768px){
    display: block;
    width: 100%;
  }
`
  return (
   
    <MainNav shrinkHeader={shrinkHeader}>
       <img src={Logo} alt="logo"/>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
       <span></span>
       <span></span>
       <span></span>
      </Hamburger>
      <Menu isOpen={isOpen}>
      <li>
        <MenuLink to="/">Forside</MenuLink>
      </li>
      <li>
        <MenuLink to="/destinations">Hoteller og destinationer</MenuLink>
      </li>
      <li>
        <MenuLink to="/rooms">Værelser</MenuLink>
      </li>
      <li>
        <MenuLink to="/reservations">Reservation</MenuLink>
      </li>
      <li>
        <MenuLink to="/login">Log ind</MenuLink>
      </li>
      </Menu>
    </MainNav>
 
  );

};

export default Header;