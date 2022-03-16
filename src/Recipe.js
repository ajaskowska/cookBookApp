import React, {useEffect, useState} from 'react';
import {Paper, Container, Grid, Typography} from "@mui/material";
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
    const API_KEY = 'b21d5757a69247b69005e207873d07d2';

    const [recipe, setRecipe] = useState([]);
    const [ingredients, setIngredients] = useState([]);
    const [instruction, setInstruction] = useState([]);
    const [wine, setWine] = useState("");
    const [diet, setDiet] = useState([]);
    const [occasions, setOccasions] = useState([]);
    const [dishType, setDishType] = useState([]);



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
        setDiet(data.diets);
        // console.log(diet);
        setOccasions(data.occasions);
        console.log(data.dishTypes);
        setDishType(data.dishTypes)



    };

    useEffect(() => {
        getRecipes();
    }, [])


    return (
        <>
            <Container className={classes.cardGrid} maxWidth='md'>
                <Typography variant='h4' align='center' gutterBottom >
                    {recipe.title}
                </Typography>

                <Grid container spacing={2}>
                    <Grid item xs={12}  sm={8} md={8}>
                        <img className={classes.recipeImg}
                             src={recipe.image}
                             alt={recipe.title}
                        />
                    </Grid>
                    <Grid item xs sm md>
                        <Typography component={'span'} variant={'body1'}>
                            <QueryBuilderIcon/>
                            <b>Cooks in</b> {recipe.readyInMinutes} minutes
                        <hr/>
                            <RestaurantIcon/>
                            <b>Serves</b> {recipe.servings}
                            <hr/>
                            <b>Diet</b> {diet.join(", ")}
                            <hr/>
                            <b>Occasions</b> {occasions.join(", ")}
                            <hr/>
                            <b>Dish type</b> {dishType.join(", ")}
                        </Typography>
                    </Grid>

                </Grid>
            </Container>

                <Container maxWidth='lg'>
                <Grid container spacing={4}>
                    <Grid item xs={12} s={12} sm={4} md={4}>
                        <Paper className={classes.ingredients} elevation={2}>
                        <Typography align='center' component='div' variant='h6'>
                            Ingredients
                        </Typography>
                        <List >
                            {ingredients.map(el => (
                                <ListItem key={el.id} >
                                    {el.original}
                                </ListItem>

                            ) )}
                        </List>
                        </Paper>
                    </Grid>
                    <Grid className={classes.method}item xs={12} s={12} sm={8} md={8}>
                        <Typography align='center' component='div' variant='h6'>
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
                <Typography className={classes.wine} >
                    {wine.pairingText}
                </Typography>
            </Container>

        </>

    );
}

export default Recipe;