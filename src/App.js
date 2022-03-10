import React from 'react';
import {
    Typography,
    AppBar,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    CssBaseline,
    Grid,
    Toolbar,
    Container,
    Button
} from "@mui/material";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import useStyles from "./styles";
import TextField from '@mui/material/TextField'
import Bar from "./Bar";
import Footer from "./Footer";
import Entrance from "./Entrance";
import SearchForm from "./SearchForm";
import DefaultResultList from "./DefaultResultList";

const App = () => {

  return (
    <>
      <CssBaseline/>
        <Bar />
        <Entrance />
        <SearchForm/>
        <Footer/>
    </>
  );
}

export default App;
