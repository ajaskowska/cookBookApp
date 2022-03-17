import {Container, ListItem, ListSubheader, Typography} from "@mui/material";
import React from "react";
import useStyles from "./styles";
import {Paper} from "@mui/material";
import {List} from "@mui/material";

const About = () => {
    const classes = useStyles();
    return (
        <>
            <Container className={classes.container} maxWidth="md" >
                <Paper elevation={4}>
                    <ul className={classes.about}><b>Strona została przygotowana w oparciu o technologie</b>
                        <Typography className={classes.about} variant='body1'>
                                    <li>biblioteka React</li>
                                    <li>React router - narzędzie do obsługi routingu po stronie klienta</li>
                                    <li>Material UI - biblioteka komponentów używanych do budowy aplikacji</li>
                                    <li>API Spoonacular</li>
                                    <li>FontAwsome icons - bibliotek icon fonts</li>
                                    <li>Freepic - baza zdjęć i plików graficznych</li>
                        </Typography>
                    </ul>
                </Paper>

                <Typography className={classes.about} variant='body1'>
                    Zapraszam na mój profil na <a href='https://www.linkedin.com/in/anna-ja%C5%9Bkowska-a9aa9ba3/' target="_blank">linkedIn</a>
                    <br/>
                    oraz do zapoznania się z moim portfolio na <a href='https://github.com/ajaskowska' target="_blank">GitHub</a>
                </Typography>
            </Container>








        </>






    )
}
export default About;