import React, { useEffect, useState } from 'react';
import {Typography, CardActionArea, Container, Grid, ImageListItem} from "@mui/material";
import {Link} from "react-router-dom";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import useStyles from "../styles";
import {SplideSlide, Splide} from "@splidejs/react-splide";
import '@splidejs/react-splide/css'
import {Wrapper} from "./style/Carousel.style";
import styled from 'styled-components';


function Popular() {
    const classes = useStyles();


    const [popular, setPopular] = useState([])

    useEffect(() => {
        getPopular();
    },[])


    const getPopular = async () => {
        const check = localStorage.getItem('popular')

        // if (check){
        //     setPopular(JSON.parse(check));
        // } else {
            const response = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=15`);
            const data = await response.json();
            // localStorage.setItem('popular', JSON.stringify(data.recipes));
            // console.log(data.recipes)
            setPopular(data.recipes);
        // }

    }
    return (
        <>
            <StyledContainer maxWidth="lg">
                <Typography variant='h5' gutterBottom={true}>Our most popular picks</Typography>
            <Splide options={{perPage:3, pagination: false, drag:'free', gap: '3rem'}}>
                {popular.map(el => (
                        <SplideSlide key={el.id}>
                            <StyledCard>
                                    <Link to={`/recipe/${el.id}`}>
                                       <p>{el.title}</p>
                                        <img
                                            src={el.image}
                                            alt={el.title}
                                        />
                                        <Gradient/>
                                    </Link>
                            </StyledCard>
                        </SplideSlide>
                    ))}
            </Splide>
            </StyledContainer>
        </>
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
const StyledContainer = styled(Container)`
margin: 3rem auto;
`


export default Popular;