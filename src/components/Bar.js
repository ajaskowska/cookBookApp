import {
    Link
} from "react-router-dom";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import React from "react";
import useStyles from "../styles";
import styled from "styled-components";



const Bar = () => {

    return (
        <>

                <Nav>
                        <Logo to={'/'}>anna cooks</Logo>

                </Nav>


        </>
    )
}
const Logo = styled(Link)`
  font-family: 'Grape Nuts', cursive;
  font-size: 2rem;
  color: white;
  text-decoration: none;
  padding-left: 4rem;
`

const Nav = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  background: #62A5A1;
`
export default Bar;