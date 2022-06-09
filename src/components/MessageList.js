import React from "react";
import MessageCard from "./MessageCard";

const MessageList = (props) => {

    const deleteMessageHandler = (id) => {
        props.getMessageId(id);
    };
    const renderMessageList = props.messages.map((message)=>{
        return (
            <MessageCard message={message} clickHandler={deleteMessageHandler} key={ message.id }></MessageCard>
        )
    })
    return (
        <div className="ui celled list">
            Message List{renderMessageList}
        </div>
    );
}

export default MessageList;