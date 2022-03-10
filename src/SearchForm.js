import {Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography} from "@mui/material";
import React, {useEffect, useState} from "react";
import { InputLabel } from '@mui/material';
import useStyles from "./styles";
import TextField from '@mui/material/TextField'
import DefaultResultList from "./DefaultResultList";
import Input from '@mui/material/Input';


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
        );
        const data = await response.json();
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

            {recipes.map(el => (

                <Container className={classes.cardGrid} maxWidth='md' >
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} md={4}>

                            <Card key={el.id} className={classes.card}>
                                <CardMedia
                                            className={classes.cardMedia}
                                            image={el.image}
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant='h5'>
                                                {el.title}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size='small' color='primary'>see more</Button>
                                </CardActions>

                            </Card>
                        </Grid>

                    </Grid>
                </Container>
                        ))}

        </>


    )

}

export default SearchForm;