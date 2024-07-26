import { useState, useRef } from "react";
import { api } from "../services/api";

export const CommentForm = ({ id }) => {
    const [commentName, setCommentName] = useState('');
    const [commentDescrip, setCommentDescrip] = useState('');
    const [commentRating, setCommentRating] = useState(null);

    const commentNameRef = useRef();
    const commentDescripRef = useRef();
    const commentRatingRef = useRef();

    const AddComment = async (event) => {
        event.preventDefault();

        const COMMENT = new FormData();
        COMMENT.append('restaurant', id)
        COMMENT.append('name', commentName);
        COMMENT.append('description', commentDescrip);
        COMMENT.append('rating', commentRating);

        try {
            await api.post(`comments/`, COMMENT, {
                headers: {'Content-Type' : 'multipart-form-data'}
            });

            alert('Comentario agregado');
            commentNameRef.current.value = '';
            commentDescripRef.current.value = '';
            commentRatingRef.current.value = '';

        } catch (error) { console.log(error.message) };
    };

    return (
        <form className="mt-4">
            <h3>Add a Comment</h3>
            <div className="mb-3">
                <label className="form-label">Name:</label>
                <input ref={commentNameRef} onChange={(e) => setCommentName(e.target.value)} type="text" className="form-control" required />
            </div>
            <div className="mb-3">
                <label className="form-label">Description:</label>
                <textarea ref={commentDescripRef} onChange={(e) => setCommentDescrip(e.target.value)} className="form-control" required></textarea>
            </div>
            <div className="mb-3">
                <label className="form-label">Rating:</label>
                <input ref={commentRatingRef} onChange={(e) => setCommentRating(Number(e.target.value))} type="number" min="1" max="5" className="form-control" required />
            </div>
            <button onClick={AddComment} type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
};