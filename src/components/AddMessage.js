import React from "react";
import TextList from "./TextList";

  
class AddMessage extends React.Component {
    AddMessage (props){
        this.result = this.results(this);
    }
    state = {
        name: "",
        message: "",
        gif: "",
    };
    add = (e) => {
        e.preventDefault();
        if (this.state.name === "" || this.state.message === "" || this.state.gif === "") {
            alert("All Feild Are Mandatory!");
            return;
        }
        this.props.addMessageHandler(this.state);
        this.setState({ name: " ", message: " ", gif:" " });
    }

    render() {
        return (
            <div className="ui main">
                <h2>Add Message</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="feild">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Name"
                            value={this.state.name}
                            onChange={(e) => this.setState({ name: e.target.value })} />
                    </div>
                    <div className="feild">
                        <label>Messages</label>
                        <textarea name="message" placeholder="Message"
                            value={this.state.message}
                            onChange={(e) => this.setState({ message: e.target.value })} />
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="feild col-lg-6">
                                <label>Gif</label>
                                <input className='input-field' name="gif" placeholder="gif" value={this.state.gif}
                                onChange={(e) => this.setState({ gif: e.target.value })} 
                                 />
                            </div>
                            <div className="feild col-lg-6">
                                <label></label>
                                {this.result && <TextList gifs={this.result}/>}
                                <button className="submit-btn">Submit</button>
                            </div>
                        </div>
                    </div>
                    <button className="btn-primary-add">Add</button>
                </form>
            </div>
        );
    }
}


export default AddMessage;