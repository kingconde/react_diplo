import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom"
import FinancingPage from "../pages/FinancingPage";
import LocationPage from "../pages/LocationsPage";
import VideosPage from "../pages/VideosPage";

const MenuItems = () => (
    <>
        <Router>
            <Switch>
                <Route exact path="/locationsPage" component={LocationPage} />
                <Route exact path="/videosPage" component={VideosPage} />
                <Route exact path="/financingPage" component={FinancingPage} />

                <Route path="*">
                    <div className="s-center">
                        <h1>Error</h1>
                        <h1>404</h1>
                        <h3>Not Found</h3>
                    </div>
                </Route>
            </Switch>
            <nav>
                <ol>
                    <Link to="/locationsPage" className="button">Inicio</Link>
                    <Link to="/videosPage" className="button">Registrarse</Link>
                    <Link to="/financingPage" className="button">Registrarse</Link>
                </ol>
            </nav>

        </Router>
    </>
)

export default MenuItems