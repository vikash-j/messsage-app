import React from "react";

class AddMessage extends React.Component {
    state = {
        name: "",
        message: "",
    };
    add = (e) => {
        e.preventDefault();
        if(this.state.name === "" || this.state.message === ""){
            alert("All Feild Are Mandatory!");
            return;
        }
        this.props.addMessageHandler(this.state);
        this.setState({name: "" , message: ""});
        console.log(this.state);
    }

    render() {
        return(
            <div className="ui main">
                <h2>Add Message</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="feild">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Name" 
                        value={this.state.name} 
                        onChange={(e) =>this.setState({name: e.target.value})}/>
                    </div>
                    <div className="feild">
                        <label>Messages</label>
                        <textarea  name="message" placeholder="Message" 
                        value={this.state.message} 
                        onChange={(e) =>this.setState({message: e.target.value})}/>
                    </div>
                    <button className="ui button blue">Add</button>
                </form>
            </div>
        );
    }
}

export default AddMessage;