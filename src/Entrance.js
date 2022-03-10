import {Container, Typography} from "@mui/material";
import React from "react";
import useStyles from "./styles";

const Entrance = () => {
    const classes = useStyles();
    return (
            <div className={classes.container}>
                <Container maxWidth="sm">
                    <Typography variant="h5" align={"center"} color="textSecondary" paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis gravida, sem in tristique molestie,
                        odio ante porta turpis, nec convallis ex turpis vel elit. In dictum rhoncus eros eget efficitur.
                    </Typography>
                    <Typography variant="h2" align={"center"} color="textPrimary" gutterBottom>
                        Find a Recipe
                    </Typography>
                </Container>
            </div>
    )
}
export default Entrance;
