import {Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography} from "@mui/material";
import React, {useEffect, useState} from "react";
import { InputLabel } from '@mui/material';
import useStyles from "./styles";
import TextField from '@mui/material/TextField'
import DefaultResultList from "./DefaultResultList";
import Input from '@mui/material/Input';
import {
    Link
} from "react-router-dom";

const SearchForm = () => {
    const classes = useStyles();
    const API_KEY = '9524debb63144e16b843cbdf67dba817';

    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('')
    const [query, setQuery] = useState('pizza')



    useEffect(()=> {
        getRecipes();
    }, [query]);

    const getRecipes = async () => {
        const response = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${API_KEY}`
            //`https://api.spoonacular.com/recipes/656329/information?apiKey=${API_KEY}`
            // `https://api.spoonacular.com/recipes/716429/information?includeNutrition=false`
        );
        const data = await response.json();
        console.log(data);
        setRecipes(data.results);
        console.log(data.results);
    };

    const updateSearch = e => {
        setSearch(e.target.value)
    }
    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch('');
    }
    return (
        <>
            <Container maxWidth="sm">
                <Grid container spacing={2}  justifyContent="center">
                    <form className={classes.searchForm} onSubmit={getSearch}>
                            <Input className={classes.search} color='primary'  value={search} onChange={updateSearch}/>
                            <Button className={classes.searchButton} variant="contained"  type="submit" color="primary">GO</Button>
                    </form>
                 </Grid>
            </Container>


                <Container className={classes.cardGrid} maxWidth='md'>
                    <Grid container spacing={2}>



                            {recipes.map(el => (  <Card key={el.id} className={classes.card}>
                                <CardMedia
                                            className={classes.cardMedia}
                                            image={el.image}
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant='h5'>
                                                {el.title}
                                    </Typography>
                                </CardContent>
                                <Link to={`/receipe/${el.id}`}>
                                    <CardActions>
                                        <Button size='small' color='primary'>see more</Button>
                                    </CardActions>
                                </Link>

                            </Card>))}




                    </Grid>
                </Container>

        </>


    )

}

export default SearchForm;