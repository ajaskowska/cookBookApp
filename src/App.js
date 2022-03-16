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


const App = () => {

  return (
    <>

        <Router>
            <div>
                <CssBaseline/>
                {/*<Bar/>*/}
                <Header/>
                {/*<nav>*/}
                {/*    <ul>*/}
                {/*        <li>*/}
                {/*            <Link to={`/`}>Home</Link>*/}
                {/*        </li>*/}
                {/*    </ul>*/}
                {/*</nav>*/}

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/recipe/:id">
                        <Recipe />
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
