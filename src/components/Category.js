import {FaPizzaSlice, FaHamburger} from "react-icons/fa";
import {GiNoodles, GiMussel} from "react-icons/gi";
import styled from 'styled-components'
import { NavLink} from "react-router-dom";
import React from "react";
import {Container} from "@mui/material";

function Category(){
    return (
        <>
            <Container maxWidth='md'>
            <Text>
                or filer by cuisine
            </Text>
            <List>
                <StyledNavLink to={'/cuisine/Italian'}>
                    <FaPizzaSlice/>
                    <h4>Italian</h4>
                </StyledNavLink>
                <StyledNavLink to={'/cuisine/American'}>
                    <FaHamburger/>
                    <h4>American</h4>
                </StyledNavLink>
                <StyledNavLink to='/cuisine/Thai'>
                    <GiNoodles/>
                    <h4>Thai</h4>
                </StyledNavLink>
                <StyledNavLink to={'/cuisine/French'}>
                    <GiMussel/>
                    <h4>French</h4>
                </StyledNavLink>
            </List>
            </Container>
        </>

    )
}
const List = styled.div`
display: flex;
  justify-content: center;
  text-align: center;
  margin: 1rem 0rem 2rem 0rem;
`
const Text = styled.div`
  font-family: 'Grape Nuts', cursive;
  font-size: 1.5rem;
  text-align: center;
  
`
const StyledNavLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 2rem;
  text-decoration: none;
  background: linear-gradient(35deg, rgb(160 160 160), rgb(120 120 120));
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transform: scale(0.8);
  position: relative;

  h4 {
    color: white;
    font-size: 0.8rem;
  }
  svg {
    color: white;
    font-size: 1.5rem;
    
  }
  &.hover{
    cursor: pointer;
    transform: rotate(360deg);
  }
  &.active {
    //background: linear-gradient(35deg, #494949, #62A5A1);
    background: #62A5A1;
    svg {
      color: #FFFFFF;
    }
    h4{
      color: #FFFFFF;
    }
  }
`
export default Category