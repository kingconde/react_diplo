import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import RegisterPage from "../pages/RegisterPage";
import HomePage from "../pages/HomePage";
import FinancingPage from "../pages/FinancingPage";
import LocationPage from "../pages/LocationsPage";
import VideosPage from "../pages/VideosPage";
import Item from "./Item";


const Menu = () => (
    <>
        <Router>
            <nav>
                <ol className="s-right">
                    <div>
                        <Link to="/" className="button">Inicio</Link>
                        <Link to="/registerPage" className="button">Registrarse</Link>
                    </div>
                </ol>
            </nav>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/registerPage" component={RegisterPage} />

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
                    <div className="ed-grid m-grid-3">
                        <Link to="/locationsPage" className="card" >
                            <Item
                                title="Ubicación de todas nuestras franquicias"
                                description="Alguna descripción"
                                image="https://guiauniversitaria.mx/wp-content/uploads/2020/02/Estas-son-las-5-nuevas-funciones-que-implemento%CC%81-Google-Maps.jpg"
                                price="$1,200 mxn" />
                        </Link>
                        <Link to="/videosPage" className="card">
                            <Item
                                title="Videos Tutoriales de Gloflox"
                                description="Alguna descripción"
                                image="https://www.marketingdirecto.com/wp-content/uploads/2019/09/video-online.jpg"
                                price="$1,200 mxn" />
                        </Link>
                        <Link to="/financingPage" className="card">
                            <Item
                                title="Genera repotes de tus ventas"
                                description="Alguna descripción"
                                image="https://www.questionpro.com/blog/wp-content/uploads/2021/03/Portada-tipos-de-graficas-para-encuestas-768x512.jpg"
                                price="$1,200 mxn" />
                        </Link>
                    </div>
                </ol>
            </nav>
        </Router>
    </>
)

export default Menu