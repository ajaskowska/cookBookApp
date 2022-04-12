import React from "react";
import Home from './Home';
import Cuisine from "./Cuisine";
import { Route, Routes, BrowserRouter} from 'react-router-dom';
import Recipe from '../components/Recipe'
import Searched from '../components/Searched'

function Pages () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/cuisine/' element={<Cuisine/>}/>
        {/*//         <Route path='/searched/:search' element={<Searched/>}/>*/}
        {/*//         <Route path= '/recipe/:id' element={<Recipe/>}/>*/}
        //     </Routes>
        </BrowserRouter>

    );
}
export default Pages;
