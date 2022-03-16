import {Typography} from "@mui/material";
import React from "react";
import useStyles from "./styles";

const About = () => {
    const classes = useStyles();
    return (

            <Typography variant='h6' align='center' gutterBottom>
                Strona została przygotowana w oparciu o technologie:
                React
                React router
                Material UI
                API Spoonacular
            </Typography>




    )
}
export default About;