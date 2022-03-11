import React, {useEffect} from 'react';
import {
    useParams
} from "react-router-dom";
function Receipe(props) {
    let { id } = useParams();
    const API_KEY = '9524debb63144e16b843cbdf67dba817';
    const getRecipes = async () => {
        const response = await fetch(
            `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`
        );
        const data = await response.json();
        console.log(data);
    };
    useEffect(() => {
        getRecipes()
    }, [])
    return (
        <div></div>
    );
}

export default Receipe;