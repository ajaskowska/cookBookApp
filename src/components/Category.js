import {FaPizzaSlice, FaHamburger} from "react-icons/fa";
import {GiNoodles, GiMussel} from "react-icons/gi";
import styled from 'styled-components'
import { NavLink} from "react-router-dom";
import React from "react";
import {Container} from "@mui/material";

function Category(){
    return (
        <>
            <StyledContainer>
            <Container maxWidth='md'>

            <List>
                <Text>
                    or filer by cuisine
                </Text>
                <StyledDiv>
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
                </StyledDiv>
            </List>
            </Container>
            </StyledContainer>
        </>

    )
}
const StyledContainer = styled.div`
  background:  rgb(248 248 248);
  padding-bottom: 1rem;
  display: flex;
  border-bottom: solid rgb(163, 134, 91) 1px;
`
const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  
  @media (max-width: 576px){
    flex-direction: row;
    margin: 0 auto;
  }
  @media (max-width: 300px){
    flex-wrap: wrap;
    width: 100%;
  }
`
const List = styled.div`
display: flex;
  justify-content: center;
  text-align: center;
  margin: 1rem 0rem 2rem 0rem;
  flex-direction: row;
  @media (max-width: 576px){
    flex-direction: column;
    margin: 1rem auto;
  }
`
const Text = styled.div`
  font-family: 'Grape Nuts', cursive;
  font-size: 1.5rem;
  text-align: center;
  color: rgb(163, 134, 91);
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 1rem;
  @media (max-width: 576px){
    display: inline-block;
  }
  
`
const StyledNavLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 1rem;
  text-decoration: none;
  background: linear-gradient(35deg, rgb(160 160 160), rgb(120 120 120));
  width: 5rem;
  height: 5rem;
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
  
  &:hover{
    cursor: pointer;
    background: #62A5A1;
  }
  &.active {
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