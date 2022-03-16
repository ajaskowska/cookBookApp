import {AppBar, CssBaseline, Link, Toolbar, Typography} from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import React from "react";
import useStyles from "./styles";


const Bar = () => {
    const classes = useStyles();

    return (
        <>
            <AppBar position="relative">
                <Toolbar>
                    <Link to="/">
                        <MenuBookIcon className={classes.icon}/>
                    </Link>
                    <Typography variant="h6">
                        anna cooks
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    )
}
export default Bar;