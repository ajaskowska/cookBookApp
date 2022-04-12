import React from 'react';
import {
    CssBaseline,
} from "@mui/material";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Entrance from "./components/Entrance";
import SearchForm from "./components/SearchForm";
import { HashRouter } from 'react-router-dom'
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Recipe from "./components/Recipe";
import About from "./components/About";
import Popular from "./components/Popular";
import Cuisine from './pages/Cuisine'

//2wersja
import Pages from './pages/Pages'
import Category from './components/Category';
import Search from "./components/Search";
import Diet from "./components/Diet";
import Searched from "./components/Searched";
import styled from "styled-components";
import Bar from './components/Bar'




function App() {

  return (
    <>

                <HashRouter>
                    <div>
                    <CssBaseline/>
                        <Bar/>



                    <Routes>

                    <Route path='/recipe/:id' element={<Recipe/>} />

                    <Route path="/cuisine/:type" element={<><Search/><Category/><Cuisine/></>}/>

                    {/*<Route path="/popular"  element={<Popular/>}/>*/}

                    {/*<Route path="/about" element={<><About/></>}/>*/}

                    <Route path="/" element={<><Entrance/><Search/><Category/><Popular/><Diet/></>} />

                    <Route path="/searched/:search" element={<><Search/><Category/><Searched/></>}/>

                    </Routes>
                    </div>
                </HashRouter>
                <Footer/>








    </>

 );
}

export default App;
