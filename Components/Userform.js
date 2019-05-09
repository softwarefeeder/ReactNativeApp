import React from 'react';

export class Userform extends React.Component {
    constructor() {
        super();
        this.state = { name: 'ram' };
    }
    update(event) {
        this.setState({
            name: event.target.value
        });
        console.log('clicked');
    }
    search() {
       fetch("http://localhost:4001/users", {
           method:'POST',
           body:JSON.stringify(this.state),
           headers:{
               'content-type':'application/json'
           }
       })
    }
    render() {
        //logic
        return (
            <div>
                <input value={this.state.name} onChange={this.update = this.update.bind(this)} />
                <input value={this.state.name} onChange={this.update = this.update.bind(this)} />
                <button onClick={this.search = this.search.bind(this)}>search</button>
            </div>
        )
    }
}