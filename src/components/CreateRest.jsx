import { api } from "../services/api";
import React from "react";
import { useState, useRef } from "react";
import 'bootstrap/dist/css/bootstrap.css';

export const CreateRestaurant = () => {
    const [nameRest, setNameRest] = useState('');
    const [addressRest, setAddressRest] = useState('');
    const [imageRest, setImageRest] = useState(null);

    const nameRef = useRef();

    const AddRestaurant = async (event) => {
        event.preventDefault();
        console.log(nameRef.current.value);

        const RESTAURANT = new FormData();
        RESTAURANT.append('name', nameRest);
        RESTAURANT.append('address', addressRest);
        RESTAURANT.append('image', imageRest);

        try {
            await api.post('restaurants/', RESTAURANT, {
                headers: {'Content-Type': 'multipart-form-data'}
            });

            alert('Restaurante creado');
            window.location.href = 'list-restaurants';

        } catch (error) { console.log(error.message) };
    };   

    return (
        <div className="container mt-4 border p-2">
            <h2>Create Restaurant</h2>
            <form>
                <div className="mb-3">
                    <label className="form-label">Name:</label>
                    <input onChange={(event) => setNameRest(event.target.value)} ref={nameRef} type="text" className="form-control" required />
                </div>

                <div className="mb-3">
                    <label className="form-label">Address:</label>
                    <input onChange={(event) => setAddressRest(event.target.value)} type="text" className="form-control" required />
                </div>

                <div className="mb-3">
                    <label className="form-label">Image:</label>
                    <input onChange={(event) => setImageRest(event.target.files[0])} type="file" className="form-control" />
                </div>

                <button type="submit" onClick={AddRestaurant} className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};