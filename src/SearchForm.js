import {
    Button,
    Card,
    Container,
    Grid,
    ImageListItem, Typography
} from "@mui/material";
import ImageListItemBar from '@mui/material/ImageListItemBar';
import React, {useEffect, useState} from "react";
import useStyles from "./styles";
import Input from '@mui/material/Input';
import { Link} from "react-router-dom";
import { CardActionArea } from '@mui/material';


const SearchForm = () => {
    const classes = useStyles();
    const API_KEY = 'b21d5757a69247b69005e207873d07d2';

    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('')
    const [query, setQuery] = useState('spring')


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
                <Typography className={classes.textUnderSearchForm} variant="h3" align={"center"} color="textSecondary" gutterBottom>
                    Find a Recipe
                </Typography>
                    <form className={classes.searchForm} onSubmit={getSearch}>
                            <Input className={classes.search} color='primary'  value={search} onChange={updateSearch}/>
                            <Button className={classes.searchButton} variant="contained"  type="submit" color='primary'>GO</Button>
                    </form>

                <Grid container spacing={4} className={classes.cardGrid}>
                    {recipes.map(el => (
                        <Grid  item  key={el.id}  s={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardActionArea >
                                    <Link to={`/recipe/${el.id}`}>

                                    <ImageListItem>
                                        <img
                                            src={el.image}
                                            alt={el.title}
                                        />
                                        <ImageListItemBar
                                            title={el.title}
                                        />



                                    </ImageListItem>
                                    </Link>
                                </CardActionArea>

                            </Card>


                        </Grid>))}
                </Grid>


            </Container>

        </>

    )

}

export default SearchForm;