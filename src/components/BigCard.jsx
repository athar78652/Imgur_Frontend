import React from 'react';
import "./bigcard.css";
import Counter from './Counter';

const BigCard = () => {

    const cardData = [
        {
          id: 1,
          img: "https://images.unsplash.com/photo-1669862643738-62132527f7b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNzU4Nzl8MHwxfGFsbHwxMHx8fHx8fDJ8fDE2NzAxMzcyMzY&ixlib=rb-4.0.3&q=80&w=1080",
          title: "a starry night sky with a ",
        },
        {
          id: 2,
          img: "https://images.unsplash.com/photo-1664575196412-ed801e8333a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNzU4Nzl8MXwxfGFsbHwxfHx8fHx8Mnx8MTY3MDEzNzIzNg&ixlib=rb-4.0.3&q=80&w=1080",
          title: "Closer to what you love",
        },
        {
          id: 3,
          img: "https://images.unsplash.com/photo-1669919174638-51069d852a40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNzU4Nzl8MHwxfGFsbHwyfHx8fHx8Mnx8MTY3MDEzNzIzNg&ixlib=rb-4.0.3&q=80&w=1080",
          title: "a group of colorful butterflies",
        },
        {
          id: 4,
          img: "https://images.unsplash.com/photo-1670100053465-aacb32bf96ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNzU4Nzl8MHwxfGFsbHwzfHx8fHx8Mnx8MTY3MDEzNzIzNg&ixlib=rb-4.0.3&q=80&w=1080",
          title: "a lion with a black background",
        },
        {
          id: 5,
          img: "https://images.unsplash.com/photo-1670096367322-1eb58c544913?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNzU4Nzl8MHwxfGFsbHw0fHx8fHx8Mnx8MTY3MDEzNzIzNg&ixlib=rb-4.0.3&q=80&w=1080",
          title: "a close-up of a logo",
        },
        {
          id: 6,
          img: "https://images.unsplash.com/photo-1669995128301-eb4422cc1672?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNzU4Nzl8MHwxfGFsbHw1fHx8fHx8Mnx8MTY3MDEzNzIzNg&ixlib=rb-4.0.3&q=80&w=1080",
          title: "a city skyline across the water",
        },
        {
          id: 7,
          img: "https://images.unsplash.com/photo-1657299156000-2cccaea36b2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNzU4Nzl8MXwxfGFsbHw2fHx8fHx8Mnx8MTY3MDEzNzIzNg&ixlib=rb-4.0.3&q=80&w=1080",
          title: "Wholesome crispbread ",
        },
        {
          id: 8,
          img: "https://images.unsplash.com/photo-1669917408072-a02f3f2fed0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNzU4Nzl8MHwxfGFsbHw3fHx8fHx8Mnx8MTY3MDEzNzIzNg&ixlib=rb-4.0.3&q=80&w=1080",
          title: "a man sitting on a fence",
        },
        {
          id: 9,
          img: "https://images.unsplash.com/photo-1670105790509-9461e1e711bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNzU4Nzl8MHwxfGFsbHw4fHx8fHx8Mnx8MTY3MDEzNzIzNg&ixlib=rb-4.0.3&q=80&w=1080",
          title: "a man and woman walking ",
        },
        {
          id: 10,
          img: "https://images.unsplash.com/photo-1669950200209-69d8292c032f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNzU4Nzl8MHwxfGFsbHw5fHx8fHx8Mnx8MTY3MDEzNzIzNg&ixlib=rb-4.0.3&q=80&w=1080",
          title: "diagram, venn diagram",
        },
        {
            id: 3,
            img: "https://images.unsplash.com/photo-1669919174638-51069d852a40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNzU4Nzl8MHwxfGFsbHwyfHx8fHx8Mnx8MTY3MDEzNzIzNg&ixlib=rb-4.0.3&q=80&w=1080",
            title: "a group of colorful butterflies",
          },
          {
            id: 3,
            img: "https://images.unsplash.com/photo-1669919174638-51069d852a40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNzU4Nzl8MHwxfGFsbHwyfHx8fHx8Mnx8MTY3MDEzNzIzNg&ixlib=rb-4.0.3&q=80&w=1080",
            title: "a group of colorful butterflies",
          },
      ];

    return (
        <>
        <div className='bigcard'>
            {
                cardData.map((items)=>{
                    return (
                        <div className='binner'>
                            <div className='images'>
                                <img src={items.img} alt=''/>
                            </div>
                            <div className='titles'>
                                <h4>{items.title}</h4>
                            </div>
                            <div>
                                <Counter/>
                            </div>
                            
                        </div>
                    )
                })
            }
            </div>
        </>
    );
}

export default BigCard;
