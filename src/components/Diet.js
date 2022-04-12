import React, {useState, useEffect} from "react";
import {Container, Typography, CardActionArea, ImageListItem} from "@mui/material";
import {Link} from "react-router-dom";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import useStyles from "../styles";
import {SplideSlide, Splide} from "@splidejs/react-splide";
import '@splidejs/react-splide/css'
import {Wrapper} from "./style/Carousel.style";
import styled from "styled-components";

function Diet() {
    const classes = useStyles();
    const API_KEY = '42605c2f81444adfa854a18bcfd08b8c';

    const [diet, setDiet] = useState([])

    useEffect(() => {
        getDiet();
    },[])


    const getDiet = async () => {
        const check = localStorage.getItem('diet')

        // if (check){
        //     setDiet(JSON.parse(check));
        // } else {
            const response = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=15&type=GlutenFree`);
            const data = await response.json();
            // localStorage.setItem('diet', JSON.stringify(data.recipes));
            // console.log(data.recipes)
            setDiet(data.recipes);
        // }

    }
    return (
        <>
            <StyledContainer maxWidth="lg">
                <Typography variant='h5' gutterBottom={true}>Our Gluten free picks</Typography>
                <Splide options={{perPage:4,  pagination: false, drag:'free', gap: '3rem'}}>
                    {diet.map(el => (
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




export default Diet;