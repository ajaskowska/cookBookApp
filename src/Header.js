import React from "react";
import { makeStyles, useTheme } from "@mui/styles";
import {AppBar} from "@mui/material";
import {Toolbar} from "@mui/material";
import {IconButton} from "@mui/material";
import {MenuItem} from "@mui/material";
import {Menu} from "@mui/material";
import {useMediaQuery} from "@mui/material";
import { withRouter } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu'
import useStyles from "./styles";


const Header = props => {
    const classes = useStyles();
    const { history } = props;
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const handleMenu = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClick = pageURL => {
        history.push(pageURL);
        setAnchorEl(null);
    };

    const handleButtonClick = pageURL => {
        history.push(pageURL);
    };

    const menuItems = [
        {
            menuTitle: "Home",
            pageURL: "/"
        },
        {
            menuTitle: "Favorites",
            pageURL: "/favorites"
        },
        {
            menuTitle: "About",
            pageURL: "/about"
        }
    ];

    return (
        <div className={classes.root}>
            <AppBar  position="static">
                <Toolbar className={classes.toolbar}>

                    <MenuItem className={classes.title}
                        variant="h2"
                        onClick={() => handleButtonClick("/")}
                    >
                        anna cooks
                    </MenuItem>
                    {isMobile ? (
                        <>
                            <IconButton
                                edge="start"
                                className={classes.menuButton}
                                color="inherit"
                                aria-label="menu"
                                onClick={handleMenu}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: "top",
                                    horizontal: "right"
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "right"
                                }}
                                open={open}
                                onClose={() => setAnchorEl(null)}
                            >
                                {menuItems.map(menuItem => {
                                    const { menuTitle, pageURL } = menuItem;
                                    return (
                                        <MenuItem key={menuTitle} onClick={() => handleMenuClick(pageURL)}>
                                            {menuTitle}
                                        </MenuItem>
                                    );
                                })}
                            </Menu>
                        </>
                    ) : (
                        <div className={classes.headerOptions}>
                            <MenuItem
                                variant="contained"
                                onClick={() => handleButtonClick("/")}
                            >
                                HOME
                            </MenuItem>
                            <MenuItem
                                variant="contained"
                                onClick={() => handleButtonClick("/favorites")}
                            >
                                FAVORITES
                            </MenuItem>
                            <MenuItem
                                variant="contained"
                                onClick={() => handleButtonClick("/about")}
                            >
                                ABOUT
                            </MenuItem>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default withRouter(Header);
