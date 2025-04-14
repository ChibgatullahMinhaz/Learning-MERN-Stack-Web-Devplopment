import React from 'react';
import { Link, useNavigate, useNavigation } from 'react-router';

const Post = ({post}) => {
    const {title,body,id} = post;
    const navigate = useNavigate();
   const handleNavigate = ()=>{
    navigate(`/posts/${id}`)
   }
    return (
        <div style={{border: '1px solid red', margin: '10px', padding: '10px'}}>
            <h1>{title}</h1>
            <p>{body}</p>
            <Link to={`/posts/${id}`}>
            <button>See Details</button>
            </Link>
            <button onClick={handleNavigate}>See Details of : {id}</button>
        </div>
    );
};

export default Post;