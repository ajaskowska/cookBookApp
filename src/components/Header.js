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
import useStyles from "../styles";
import {Container} from "@mui/material";
import styled from "styled-components";
import {Link} from  "react-router-dom";
import {useNavigate} from 'react-router-dom'


const Header = props => {
    const classes = useStyles();
    const { history } = props;
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    let navigate = useNavigate();


    const handleMenu = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClick = pageURL => {
        history.push(pageURL);
        setAnchorEl(null);
    };

    const handleButtonClick = pageURL => {
        // history.push(pageURL);
        <Link to={{pageURL}}/>
        // navigate(pageURL);

    };

    const menuItems = [
        {
            menuTitle: "Home",
            pageURL: "/"
        },
        {
            menuTitle: "Popular",
            pageURL: "/popular"
        },
        {
            menuTitle: "About",
            pageURL: "/about"
        }
    ];

    return (
        <div className={classes.root}>
            <AppBar  position="static">
                <Container maxWidth='lg'>
                    <Toolbar className={classes.toolbar}>

                        {/*<MenuItem className={classes.title}*/}
                        {/*          variant="h2"*/}
                        {/*          // onClick={() => handleButtonClick("/")}*/}
                        {/*>*/}
                            <Logo onClick={() => navigate('/')}>anna cooks </Logo>
                        {/*</MenuItem>*/}
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
                                    onClick={() => handleButtonClick("/popular")}
                                >
                                    POPULAR
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
                </Container>

            </AppBar>
        </div>
    );
};
const Logo = styled.div`
  font-family: 'Grape Nuts', cursive;
  font-size: 2rem;
`
export default Header;
