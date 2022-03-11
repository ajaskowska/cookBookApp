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
import Bar from "./Bar";
import Footer from "./Footer";
import Entrance from "./Entrance";
import SearchForm from "./SearchForm";
import DefaultResultList from "./DefaultResultList";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Receipe from "./Receipe";

const App = () => {

  return (
    <>



        <Router>
            <div>
                <CssBaseline/>
                <Bar />
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/receipe/:id">
                        <Receipe />
                    </Route>
                    <Route path="/">
                       <div>
                           <Entrance />
                           <SearchForm/>
                       </div>
                    </Route>
                </Switch>
                <Footer/>
            </div>
        </Router>
    </>
  );
}

export default App;
