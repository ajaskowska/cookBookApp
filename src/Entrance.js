import {Container, Typography} from "@mui/material";
import React from "react";
import useStyles from "./styles";

const Entrance = () => {
    const classes = useStyles();
    return (
            <div className={classes.container}>
                <Container maxWidth="md">
                    <Typography variant="h5" align={"center"} color="textSecondary" paragraph gutterBottom>
                        “The discovery of a new dish does more for the happiness of mankind than the discovery of a star.”
                    <br/>
                        <i>Anthelme Brillat-Savarin</i>
                    </Typography>
                    <Typography variant="h3" align={"center"} color="textSecondary" gutterBottom>
                        Find a Recipe
                    </Typography>
                </Container>
            </div>
    )
}
export default Entrance;
