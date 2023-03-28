import React, { useState } from 'react';
import {FaThumbsUp,FaCommentAlt,FaRegEye} from "react-icons/fa";
import "./counter.css";



const Counter = () => {

const [like,setLike] = useState(0)
const [comment,setComment] = useState(0)
const [views,setViews] = useState(0)

const likeHandle = () =>{
    setLike(like+1);
}

const commentHandle = () =>{
    setComment(comment+1);
}

const viewsHandle = () =>{
    setViews(views+1)
}

    return (
        <>
            <div className='social'>
                <div className='like'>
                    <FaThumbsUp onClick={likeHandle}/> {like}
                </div>
                <div>
                    <FaCommentAlt onClick={commentHandle}/> {comment}
                </div>
                <div>
                    <FaRegEye onClick={viewsHandle}/> {views}
                </div>
            </div>
        </>
    );
}

export default Counter;
