import {Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography} from "@mui/material";
import React, {useEffect, useState} from "react";
import useStyles from "./styles";
import Input from '@mui/material/Input';
import { Link} from "react-router-dom";

const SearchForm = () => {
    const classes = useStyles();
    const API_KEY = 'ac872cba383045d3935d2fe5307bf553';

    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('')
    const [query, setQuery] = useState('easter')


    useEffect(()=> {
        getRecipes();
    }, [query]);

    const getRecipes = async () => {
        const response = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?query=${query}&number=12&apiKey=${API_KEY}`

        );
        const data = await response.json();
        setRecipes(data.results);
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
            <Container maxWidth="md">
                    <form className={classes.searchForm} onSubmit={getSearch}>
                            <Input className={classes.search} color='primary'  value={search} onChange={updateSearch}/>
                            <Button className={classes.searchButton} variant="contained"  type="submit" color="primary">GO</Button>
                    </form>
            </Container>


                <Container className={classes.cardGrid} maxWidth='md'>
                    <Grid container spacing={4}>
                    {recipes.map(el => (
                        <Grid  item  key={el.id} xs={12} s={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image={el.image}
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography  variant='h6'>
                                        {el.title}
                                    </Typography>
                                </CardContent>
                                <Link to={`/recipe/${el.id}`}>
                                    <CardActions>
                                        <Button className={classes.btnSeeMore} size='small' color='primary'>see more</Button>
                                    </CardActions>
                                </Link>

                            </Card>
                        </Grid>))}
                    </Grid>


                </Container>
        </>


    )

}

export default SearchForm;