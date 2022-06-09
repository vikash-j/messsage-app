import React from "react";

class AddMessage extends React.Component {
    render() {
        return(
            <div className="ui main">
                <h2>Add Message</h2>
                <form className="ui form">
                    <div className="feild">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Name"/>
                    </div>
                    <div className="feild">
                        <label>Messages</label>
                        <textarea  name="message" placeholder="Message"/>
                    </div>
                    <button className="ui button blue">Add</button>
                </form>
            </div>
        );
    }
}

export default AddMessage;