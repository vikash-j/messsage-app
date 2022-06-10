import React from "react";

const MessageCard = (props) => {
    const { id, name, message } = props.message
    return (
        <div className="item">
        <div className="col-6">
        <div className="content">
            <div className="header">{name}</div>
            <div className="content-msg">{message}</div>
        </div>
        
       <i className="trash alternate outline icon" 
       style={{color: "red", marginTop: "7px"}}
       onClick={() => props.clickHandler(id)}></i>
    </div>
    </div>
 );    
}

export default MessageCard;