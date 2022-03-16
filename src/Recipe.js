import React, {useEffect, useState} from 'react';
import {Button, Card, CardActions, CardContent, Paper, Container, Grid, Typography} from "@mui/material";
import {Image} from "@mui/icons-material";
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import {List} from "@mui/material";
import {ListItem} from "@mui/material";
import {
    useParams
} from "react-router-dom";
import useStyles from "./styles";
function Recipe() {

    const classes = useStyles();
    let { id } = useParams();
    const API_KEY = 'ac872cba383045d3935d2fe5307bf553';

    const [recipe, setRecipe] = useState([]);
    const [ingredients, setIngredients] = useState([]);
    const [instruction, setInstruction] = useState([]);
    const [wine, setWine] = useState("")
    const [diet, setDiet] = useState([])



    const getRecipes = async () => {
        const response = await fetch(
            `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`
        );
        const data = await response.json();
        console.log(data);
        setRecipe(data);
        setIngredients(data.extendedIngredients)
        // console.log(data.extendedIngredients);
        setInstruction(data.analyzedInstructions[0].steps)
        // console.log(data.occasions);
        setWine(data.winePairing)
        // console.log(data.winePairing);
        setDiet(data.diets)
        // console.log(data.diets);


    };

    useEffect(() => {
        getRecipes();
    }, [])


    return (
        <>
            <Container className={classes.cardGrid} maxWidth='lg'>
                <Typography variant='h4' align='center'>
                    {recipe.title}
                </Typography>
                <img
                    src={recipe.image}
                    height={320}
                />
                <Grid container spacing={2}>
                    <Grid item s={6} sm={4} md={4}>
                        <Typography component={'span'} variant={'body1'}>
                            <QueryBuilderIcon/>
                            <b>Cooks in</b> {recipe.readyInMinutes} minutes
                            <RestaurantIcon/>
                            <b>Serves</b> {recipe.servings}
                        </Typography>
                    </Grid>
                </Grid>


                <Grid container spacing={4}>
                    <Grid item s={12} sm={4} md={4}>
                        <Paper elevation={2}>
                        <Typography component='div' variant='h6'>
                            Ingredients
                        </Typography>
                        <List>
                            {ingredients.map(el => (
                                <ListItem key={el.id} disableGutters={true}>
                                    {el.original}
                                </ListItem>

                            ) )}
                        </List>
                        </Paper>
                    </Grid>
                    <Grid item item s={12} sm={8} md={8}>
                        <Typography component='div' variant='h6'>
                            Method

                        </Typography>
                        <List>
                                {instruction.map(el => (
                                <ListItem key={el.number} disableGutters={true}>
                                    {el.number}. {el.step}
                                </ListItem>

                            ) )}
                        </List>
                    </Grid>
                </Grid>

                <Paper elevation={2}>
                    {wine.pairingText}

                </Paper>


            </Container>

        </>

    );
}

export default Recipe;