import React, { Component } from 'react';

class ToyForm extends Component {

    state = {
        name: "",
        image: ""
    }

    handleFormInputChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        console.log(e.target.value)

        this.setState({
            [name]: value
        }, () => console.log(this.state))

    }

    handleSubmit = (e) =>{
        e.preventDefault()

        const toy= {...this.state, likes: 0}
        console.log(toy)

        const url ="http://localhost:3000/toys"
        const configObj = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"
            },
            body: JSON.stringify(toy)
        }

        fetch(url, configObj)
        .then(res => res.json())
        .then(json => {
            this.props.addToy(json)
        })

    }

    render() {
        return (
            <div>
                <form onSubmit ={this.handleSubmit}>
                    <label>Name:</label>
                    <input type ="text" name = "name" placeholder="Name" onChange= {this.handleFormInputChange} value={this.state.name}/>
                    <br></br>
                    <br></br>
                    <label> Image:</label>
                    <input type="text" name= "image" placeholder= "Image" onChange = {this.handleFormInputChange} value={this.state.value}/>
                    <br></br>
                    <br></br>
                    <input type= "submit" value="Add Toys" ></input>
                    <br></br>
                </form>
            </div>
        );
    }
}

export default ToyForm;
