import {Paper, Container, Typography} from "@mui/material";
import React from "react";
import useStyles from "../styles";



const Entrance = () => {
    const classes = useStyles();
    return (
            <div className={classes.banner}>

                <Container  className={classes.container} maxWidth="md" >
                        <Paper className={classes.quote} elevation={6}>
                            “The discovery of a new dish does more for the happiness of mankind than the discovery of a star.”
                            <br/>
                            <i>Anthelme Brillat-Savarin</i>
                        </Paper>
                </Container>
            </div>
    )
}
export default Entrance;
