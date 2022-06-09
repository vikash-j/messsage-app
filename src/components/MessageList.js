import React from "react";
import MessageCard from "./MessageCard";

const MessageList = (props) => {
    const renderMessageList = props.messages.map((message)=>{
        return (
            <MessageCard message={message}></MessageCard>
        )
    })
    return (
        <div className="ui celled list">
            Message List{renderMessageList}
        </div>
    );
}

export default MessageList;