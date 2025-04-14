import React from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router';

const PostDetails = () => {
    const details = useLoaderData();
    const navigate = useNavigate();
    const param = useParams();
    console.log(param);
    return (
        <div style={{border: '1px solid red', margin: '10px', padding: '10px'}}>
            <h1>{details.title}</h1>
            <p>{details.body}</p>
            <button onClick={
            ()=>    navigate(-1)
            }>Go Back</button>
        </div>
    );
};

export default PostDetails;