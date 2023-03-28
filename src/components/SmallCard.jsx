import React from 'react';
import "./smallcard.css";

const SmallCard = () => {

const smallCardData = [
    {
        id:1,
        img:"https://media.istockphoto.com/id/184114153/photo/bonsai-tree.jpg?s=612x612&w=0&k=20&c=XYYYqbpINNjC9KZb2mIJ7G8WlGo-S16e0fRKhV1AzwY=",
        title:"Save Tree",
        post:"6,192 Post"
    },
    {
        id:2,
        img:"https://media.istockphoto.com/id/184114153/photo/bonsai-tree.jpg?s=612x612&w=0&k=20&c=XYYYqbpINNjC9KZb2mIJ7G8WlGo-S16e0fRKhV1AzwY=",
        title:"Save Tree",
        post:"6,192 Post"
    },
    {
        id:3,
        img:"https://media.istockphoto.com/id/184114153/photo/bonsai-tree.jpg?s=612x612&w=0&k=20&c=XYYYqbpINNjC9KZb2mIJ7G8WlGo-S16e0fRKhV1AzwY=",
        title:"Save Tree",
        post:"6,192 Post"
    },
    {
        id:4,
        img:"https://media.istockphoto.com/id/184114153/photo/bonsai-tree.jpg?s=612x612&w=0&k=20&c=XYYYqbpINNjC9KZb2mIJ7G8WlGo-S16e0fRKhV1AzwY=",
        title:"Save Tree",
        post:"6,192 Post"
    },
    {
        id:6,
        img:"https://media.istockphoto.com/id/184114153/photo/bonsai-tree.jpg?s=612x612&w=0&k=20&c=XYYYqbpINNjC9KZb2mIJ7G8WlGo-S16e0fRKhV1AzwY=",
        title:"Save Tree",
        post:"6,192 Post"
    },
    {
        id:7,
        img:"https://media.istockphoto.com/id/184114153/photo/bonsai-tree.jpg?s=612x612&w=0&k=20&c=XYYYqbpINNjC9KZb2mIJ7G8WlGo-S16e0fRKhV1AzwY=",
        title:"Save Tree",
        post:"6,192 Post"
    },
    {
        id:8,
        img:"https://media.istockphoto.com/id/184114153/photo/bonsai-tree.jpg?s=612x612&w=0&k=20&c=XYYYqbpINNjC9KZb2mIJ7G8WlGo-S16e0fRKhV1AzwY=",
        title:"Save Tree",
        post:"6,192 Post"
    },
    

]

    return (
        <>
            {
                smallCardData.map((item)=>{
                    return (
                        <div className='inner'>
                            <div className='image'>
                                <img src={item.img} alt=""/>
                            </div>
                            <div className='title'>
                                <h1>{item.title}</h1>
                                <h2>{item.post}</h2>
                            </div>
                        </div>
                    )
                })
            }
        </>
    );
}

export default SmallCard;
