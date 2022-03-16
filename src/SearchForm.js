import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Container,
    Grid,
    ImageListItem,
    Typography
} from "@mui/material";
import ImageListItemBar from '@mui/material/ImageListItemBar';
import CardHeader from '@mui/material/CardHeader';
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
    const [query, setQuery] = useState('easter')
    const [page, setPage] = useState([])


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
                                <CardActionArea >
                                    <Link className={classes.link}to={`/recipe/${el.id}`}>
                                    {/*<CardMedia*/}
                                    {/*    className={classes.cardMedia}*/}
                                    {/*    image={el.image}*/}
                                    {/*/>*/}
                                    <ImageListItem>
                                        <img
                                            src={el.image}/>
                                        <ImageListItemBar
                                            title={el.title}
                                        />
                                    </ImageListItem>
                                    </Link>
                                </CardActionArea>



                                {/*<CardContent className={classes.cardContent}>*/}
                                {/*    <Typography  variant='h6'>*/}
                                {/*        {el.title}*/}
                                {/*        <br/>*/}
                                {/*        <Link className={classes.link}to={`/recipe/${el.id}`}>*/}

                                {/*                <Button className={classes.btnSeeMore} size='small' color='primary'>see more</Button>*/}

                                {/*        </Link>*/}
                                {/*    </Typography>*/}
                                {/*</CardContent>*/}



                                {/*<Link className={classes.link}to={`/recipe/${el.id}`}>*/}
                                {/*    <CardActions className={classes.btnSeeMore}>*/}
                                {/*        <Button className={classes.btnSeeMore} size='small' color='primary'>see more</Button>*/}
                                {/*    </CardActions>*/}
                                {/*</Link>*/}

                            </Card>


                        </Grid>))}
                </Grid>


            </Container>





        </>


    )

}

export default SearchForm;