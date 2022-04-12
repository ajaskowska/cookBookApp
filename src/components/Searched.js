import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {Container, Grid, Typography} from "@mui/material";
import styled from 'styled-components';
import useStyles from "../styles";

function Searched() {

    const classes = useStyles();
    const [searchedRecipes, setSearchedRecipes] = useState([]);
    let params = useParams();

    const getSearched = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${name}&number=18&apiKey=${process.env.REACT_APP_API_KEY}`);
        const recipes = await data.json();
        setSearchedRecipes(recipes.results);
    }
    useEffect(() => {
        getSearched(params.search);
    },[params.search])


    return (
        <Container maxWidth="lg">
            <Typography variant='h5' align='center'>Results for {params.search} </Typography>
            <Grid container spacing={4} className={classes.cardGrid}>
                {searchedRecipes.map((el) => (
                    <Grid  item  key={el.id} xs={12} s={12} sm={6} md={4}>

                        <StyledCard>
                            <Link to={`/recipe/${el.id}`}>

                                <p>{el.title}</p>
                                <img
                                    src={el.image}
                                    alt={el.title}
                                />



                            </Link>
                            <Gradient/>
                        </StyledCard>


                    </Grid>))}
            </Grid>
        </Container>
    );
}
const StyledCard = styled.div`
  height: 15rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;
img{
  border-radius: 1rem;
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
  p{
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 5%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: end;
  }
`
const Gradient = styled.div`
  z-index: 2;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`

export default Searched;