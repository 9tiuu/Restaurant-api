import { api } from "../services/api";
import React, { useEffect } from "react";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';

export const ListRestaurant = () => {
    const [restaurant, setRestaurant] = useState([]);

    const listRest = async () => {
        try {
            const response = await api.get('restaurants/');
            setRestaurant(response.data);

        } catch (error) { console.log(error.message) };
    };

    useEffect(() => {
        listRest();
    }, [restaurant]);

    const DeleteRest = async (id) => {
        try {
            await api.delete(`/restaurants/${id}`);
            alert('Restaurante Eliminado');

        } catch (error) { console.log(error.message); }
    };

    return (
        <div className="container mt-4">
            <h1 className="mb-4">Restaurants</h1>
            <ul className="list-group">
                {
                    restaurant.map(restaurant => 
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <div className="d-flex gap-3 align-item-center justify-content-center">
                                <img src={restaurant.image} style={{width: '50px'}} alt="" />
                                <a href={`detail-restaurant/${restaurant.id}`}>{restaurant.name}</a>
                            </div>
                            <button className="btn btn-danger btn-sm" onClick={() => DeleteRest(restaurant.id)}>Delete</button>
                        </li>
                    )
                }
            </ul>
        </div>
    );
};