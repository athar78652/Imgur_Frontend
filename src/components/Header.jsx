import React from 'react';
import "./header.css";
import {BsFillPlusSquareFill} from "react-icons/bs";

const Header = () => {
    return (
        

        <div className='header'>
            
            <div className='logo'>
                <span><h1>imgur</h1></span> 
                <button className='new'><h3><BsFillPlusSquareFill className='post' size={20}/>New Post</h3></button>
            </div>
            
            <div className='search'>
                <input type='search' placeholder='images,#tags,@users oh my!'/>
            </div>

            <div className='sign'>
                <button className='ad'><h4>Go Ad Free</h4></button>
                <button className='in'><h4>Sign In</h4></button>
                <button className='up'><h4>Sign up</h4></button>
            </div>
            
            
        </div>
        
    );
}

export default Header;
