import React, { Component } from 'react';

class Jokes extends Component {
    constructor(props){
        super(props);
        this.getJoke = this.getJoke.bind(this);
    }
    state = { 
        jokesList: ["as","fh"]
     }
    render() { 
        return (
            <div>
                <button onClick={this.getJoke}>Add</button>
            </div>
        );
    }

    getJoke(){
        console.log("list", this.state.jokesList);
        const tem = [...this.state.jokesList];
        const url = "https://api.chucknorris.io/jokes/random";
        fetch(url)
        .then(response =>response.json())
        .then(function(data){
            const newJoke = data.value;
            console.log("newJoke", newJoke);
            this.setState({newJoke});
            console.log("list after<", this.tem);
        })
        .catch(error => console.log("error in fetching joke"));
    }

}
 
export default Jokes;