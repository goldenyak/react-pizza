import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import './scss/app.scss';
import Cart from "./components/Cart";

function App() {


    return (
        <Router>
            <div className="wrapper">
                <Header/>
                <div className="content">
                    <Route path="/" exact>
                        <Home/>
                    </Route>
                    <Route path="/cart">
                        <Cart/>
                    </Route>

                </div>
            </div>
        </Router>

    );
}

export default App;
