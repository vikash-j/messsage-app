import React from "react";

const MessageCard = (props) => {
    const {id, name, messagess } = props.message
    return (
        <div className="item">
        <div className="content">
            <div className="heder">{name}</div>
            <div>{messagess}</div>
        </div>
        <i className="trash alternate outline icon" style={{color: "red", marginTop: "7px"}}></i>
    </div>
 );    
}

export default MessageCard;