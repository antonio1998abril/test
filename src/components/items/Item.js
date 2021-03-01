import React, { useEffect, useState } from 'react'
import {stockData} from "../../api/data"
import ListItem from "../items/ListItem"


const itemRangePage=3;
let arrayForItem=[];

function Item() {
    const [ItemShow,setItemShow]=useState([]);
    const [next,SetNext]= useState(3)

    const loopSlice=(start,end)=>{
        const sliceItem=stockData.slice(start,end);
        arrayForItem=[...arrayForItem,...sliceItem];
        setItemShow(arrayForItem)
    }
    useEffect(()=>{
        loopSlice(0,itemRangePage);
    },[])

    const handleShowMoreItems=()=>{
        loopSlice(next,next+itemRangePage);
        SetNext(next + itemRangePage)
    }

    

    return (
       
        <main className="content">
        <h1>Items</h1>
        <div className="items">
         <ListItem itemToRender={ItemShow} />
        </div>
        <button className="button-style" onClick={handleShowMoreItems}>Load More </button>
        </main>
     
     
    )
}

export default Item
