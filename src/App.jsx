import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

import { CreateRestaurant } from "./components/CreateRest";
import { ListRestaurant } from "./components/ListRestaurant";
import { DetailRestaurant } from "./components/DetailRestaurant";

const create = <CreateRestaurant />;
const list = <ListRestaurant />;
const detail = <DetailRestaurant />;

export const App = () => {
    return (
        <Router>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    {/* <a className="navbar-brand" href="#">Restaurant Reviews</a> */}
                    <Link to={'/list-restaurants'} className="navbar-brand">Restaurant Reviews</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                {/* <a className="nav-link" href="#">Home</a> */}
                                <Link to={'/home'} className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                {/* <a className="nav-link" href="#">Create Restaurant</a> */}
                                <Link to={'/create-restaurant'} className="nav-link">Create Restaurant</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Routes>
                <Route path={'/list-restaurants'} element={list}></Route>
                <Route path={'/detail-restaurant/:id'} element={detail}></Route>
                <Route path={'/create-restaurant'} element={create}></Route>
            </Routes>
        </Router>
    );
};