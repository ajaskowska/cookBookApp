import {Typography} from "@mui/material";
import React from "react";
import useStyles from "./styles";

const Footer = () => {
    const classes = useStyles();
    return (
        <footer  className={classes.footer}>
            <Typography variant='h6' align='center'  gutterBottom>
                React app
            </Typography>
            <Typography variant='subtitle1' align='center' >
                Copyright © Anna Jaśkowska 2022.
            </Typography>

        </footer>
    )
}
export default Footer;