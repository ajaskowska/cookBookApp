import React from 'react';
import {
    Typography,
    AppBar,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    CssBaseline,
    Grid,
    Toolbar,
    Container,
    Button
} from "@mui/material";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import useStyles from "./styles";
import TextField from '@mui/material/TextField'

const cards = [1, 2, 3, 4, 5, 6]


const App = () => {
    const classes = useStyles();

  return (
    <>
      <CssBaseline/>
      <AppBar position="relative">
          <Toolbar>
              <MenuBookIcon className={classes.icon}/>
              <Typography variant="h6">
                         anna cooks
              </Typography>
          </Toolbar>
      </AppBar>
        <main>
            <div className={classes.container}>
                <Container maxWidth="sm">
                    <Typography variant="h5" align={"center"} color="textSecondary" paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis gravida, sem in tristique molestie,
                        odio ante porta turpis, nec convallis ex turpis vel elit. In dictum rhoncus eros eget efficitur.
                    </Typography>
                    <div>
                        <Grid container spacing={2}  justifyContent="center">

                            <Grid item>
                                <Typography variant="h2" align={"center"} color="textPrimary" gutterBottom>
                                Find a Recipe
                                </Typography>
                            </Grid>
                            <Grid item>
                                <TextField className={classes.searcher} size='small' variant="outlined" />
                            </Grid>
                            <Grid item>
                                <Button className={classes.btnGo} variant="contained"  color="primary">GO</Button>
                            </Grid>
                        </Grid>
                    </div>
                </Container>
            </div>
            <Container className={classes.cardGrid} maxWidth='md' >
                <Grid container spacing={4}>
                    {cards.map (() => (
                        <Grid item xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image='https://source.unsplash.com/random'
                                    title='Image title'/>
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant='h5'>
                                        Recipe title
                                    </Typography>
                                    <Typography>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size='small' color='primary'>see more</Button>
                                </CardActions>

                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </main>
        <footer className={classes.footer}>
            <Typography variant='h6' align='center' gutterBottom>
                Footer
            </Typography>
            <Typography variant='subtitle1' align='center' color='textSecondary'>
                Copyright © Your Website 2022.
            </Typography>

        </footer>
    </>

  );
}

export default App;
