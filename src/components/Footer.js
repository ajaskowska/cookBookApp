import {Typography} from "@mui/material";
import React from "react";
import styled from 'styled-components'

const Footer = () => {

    return (
        <FooterStyled >
            <Typography variant='h6' align='center'  gutterBottom>
                React app
            </Typography>
            <Typography variant='subtitle1' align='center' >
                Copyright © Anna Jaśkowska 2022.
            </Typography>

        </FooterStyled>
    )
}


const FooterStyled = styled.footer`
  padding: 3rem 0;
  background: #62A5A1;
  color: white;
  border-top: solid rgb(163, 134, 91) 1px;
`
export default Footer;