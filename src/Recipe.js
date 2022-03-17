import React, {useEffect, useState} from 'react';
import {Paper, ImageListItem, ImageListItemBar, Container, Grid, Typography} from "@mui/material";
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import {List} from "@mui/material";
import {ListItem} from "@mui/material";
import {
    useParams
} from "react-router-dom";
import useStyles from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faPeopleGroup, faCircleCheck, faCalendarCheck, faBurger} from "@fortawesome/free-solid-svg-icons";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IconButton from "@mui/material/IconButton";






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
    const [favRecipe , setFavRecipe] = useState({})




    const getRecipes = async () => {
        const response = await fetch(
            `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`
        );
        const data = await response.json();
        setRecipe(data);
        setIngredients(data.extendedIngredients)
        setInstruction(data.analyzedInstructions[0].steps)
        setWine(data.winePairing)
        setDiet(data.diets);
        setOccasions(data.occasions);
        setDishType(data.dishTypes)
    };
    const addToFav = e => {
        setFavRecipe(e);
        console.log(e)
    }

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
                        <ImageListItem>
                            <img className={classes.recipeImg}
                                             src={recipe.image}
                                             alt={recipe.title}
                            />
                            <ImageListItemBar
                                sx={{
                                    background:
                                        'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                                        'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                                }}
                                position="top"
                                actionIcon={
                                    <IconButton
                                        sx={{ color: 'white' }}
                                        // onClick={()=> toggleFavAction(recipe)}
                                    >
                                        <FavoriteBorderIcon />
                                    </IconButton>
                                }
                                actionPosition="left"
                            />
                        </ImageListItem>


                    </Grid>
                    <Grid item xs sm md>
                        <Typography component={'span'} variant={'body1'}>
                            {/*<QueryBuilderIcon/>*/}
                           <div><FontAwesomeIcon icon={faClock} /> <b>Cooks in</b> {recipe.readyInMinutes} minutes</div>

                        <hr/>
                            <div><FontAwesomeIcon icon={faPeopleGroup} /> <b>Serves</b> {recipe.servings}</div>

                            <hr/>
                            <div><FontAwesomeIcon icon={faCircleCheck} /> <b>Diet</b> {diet.join(", ")}</div>

                            <hr/>
                            <div><FontAwesomeIcon icon={faCalendarCheck} /> <b>Occasions</b> {occasions.join(", ")}</div>

                            <hr/>
                            <div><FontAwesomeIcon icon={faBurger} /> <b>Dish type</b> {dishType.join(", ")}</div>

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