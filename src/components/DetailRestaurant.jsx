import { useState, useEffect } from "react";
import { api } from "../services/api";
import { useParams } from "react-router-dom";
import { CommentForm } from "./CommentForm";
import Estrella from '../img/strella.png';
import Vacias from '../img/estrvacia.png'

export const DetailRestaurant = () => {
    const { id } = useParams();

    const [restName, setRestName] = useState('');
    const [address, setAddress] = useState('');
    const [image, setImage] = useState('');
    const [comment, setComment] = useState([]);
    const [rating, setRating] = useState('')

    const ListDetails = async () => {
        try {
            const response = await api.get(`restaurants/${id}/`);
            setRestName(response.data.name);
            setAddress(response.data.address);
            setImage(response.data.image);
            setComment(response.data.comments);
            setRating(response.data.average_rating);
            
        } catch (error) { console.log(error.message) };
    };

    useEffect(() => {
        ListDetails();
    });

    const DeleteComment = async (id) => {
        console.log(id);

        try {
            await api.delete(`comments/${id}`);
            alert('Comentario Eliminado');

        } catch (error) { console.log(error.message) };
    };

    const imgen = <img src={Estrella} alt="" width={'2%'} />
    const vacia = <img src={Vacias} alt="" width={'2%'} />

    return (
        <div className="container mt-4 border p-2">
            <h2>{restName}</h2>
            <p>{address}</p>
            <img src={image} alt="" width={'30%'} />
            <h3 className="mt-4">{
                
                [...new Array(5)].map((start, index) => {
                    return index < rating ? imgen : vacia
                })

            }</h3>
            <h3>Comments:</h3>

            <ul className="list-group">

                {
                    comment.map((comment) => 
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <span>
                                <strong>{comment.name}:</strong> {comment.description} {`(Rating: ${comment.rating})`}
                            </span>
                            <button onClick={() => DeleteComment(comment.id)} className="btn btn-danger btn-sm">
                                Delete
                            </button>
                        </li>
                    )
                }

            </ul>
        
            {
                <CommentForm id={id}/>
            }

            <button className="btn btn-primary mt-4">Edit Restaurant</button>
        </div>
    );
};