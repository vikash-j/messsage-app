import React from "react";

const TextList = (props) => {
    //create array of item components
    const items = props.gif.map((itemData) => {
        return <Item url={itemData.url}  />
    })
    return(
        <div className='text-container'>
            {items}
        </div>
    )
    
}
const Item = (props) => {
    return(
        <div className='gif-item'>
            <img src={props.url} alt="i"/>
        </div>
    )
}
export default TextList;