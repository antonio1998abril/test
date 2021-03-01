import React from 'react'

import LazyLoad from 'react-lazyload';

function ListItem({itemToRender}) {
    return (
        <>
{
    itemToRender.map((item,index)=>(
       <div className="item_card" key={index}>
         
           <LazyLoad width={232} height={300}>
           <img alt="food" src={item.url}></img>
      </LazyLoad>
           <div className="itemBox">
               <h2>{item.Brand}</h2>
               <span>{item.Price}</span>
                <p>{item.Content}</p>
           </div>
        </div>
    ))
}

        </>
    )
}
export default ListItem
