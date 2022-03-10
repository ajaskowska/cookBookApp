import {Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography} from "@mui/material";
import React  from "react";
import useStyles from "./styles";
import SearchForm from "./SearchForm";


const DefaultResultList = ({id, title, image}) => {
    const classes = useStyles();
    return (
        <Container className={classes.cardGrid} maxWidth='md' >
            <Grid container spacing={4}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card key={id} className={classes.card}>
                            <CardMedia
                                className={classes.cardMedia}
                                image={image}
                                />
                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom variant='h5'>
                                    {title}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size='small' color='primary'>see more</Button>
                            </CardActions>

                        </Card>
                    </Grid>

            </Grid>
        </Container>
    )
}

export default DefaultResultList;

