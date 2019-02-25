import React, { Component } from 'react';
import Joke from './joke';

class JokesContainer extends Component {
    state = {
        jokes: [],
        newJoke: null
    }

    render() { 
        return (
            <div>
                {this.getJokesList()}
                <button onClick={this.callApi.bind(this)}>Add</button>
            </div>
        );
    }
    
    getJokesList(){
        if(this.state.jokes.length>0){
           return <React-Fragment><Joke/></React-Fragment>
        }else {
            return <h4>No jokes avalible clike on add button to add new a joke</h4>
        }
    }

    fetchJoke(){
        //console.log("test",this.state.jokes);
        const newJoke = this.callApi();
        const jokes = [...this.state.jokes];
        //jokes.push(newJoke);
        //this.setState({jokes});
        console.log("test",this.state.newJoke);
        
    }

    callApi() {
        console.log("api called");
        const url = "https://api.chucknorris.io/jokes/random";
        fetch(url)
        .then(response =>response.json())
        .then(function(data){
            const newJoke = data.value;
            console.log("date", newJoke);
            this.setState({newJoke});
        })
        .catch(error => console.log("error in fetach"));
    }
}
 
export default JokesContainer;