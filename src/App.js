import React from 'react';
import {
    CssBaseline,
} from "@mui/material";
import Bar from "./Bar";
import Header from "./Header";
import Footer from "./Footer";
import Entrance from "./Entrance";
import SearchForm from "./SearchForm";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Recipe from "./Recipe";
import About from "./About";


const App = () => {

  return (
    <>


        <Router>
            <div>
                <CssBaseline/>
                <Header/>


                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/recipe/:id">
                        <Recipe />
                    </Route>
                    <Route path="/about">
                        <About />
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
