import React from 'react';
import { METHODS } from 'http';


export class UserLoginForm  extends React.Component
{

    constructor ()
    {
        super()
       // this.state.name=""
       // this.state.age=""
    }

    render()
    {
        return (
            <form className="container" onSubmit={this.handleFormSubmit}>
            <input value="Geetha" />
            <input value="20" />
        <button
          title="Submit"
          color="#841584"
         onClick={() => 
            fetch("http://localhost:3000/db.json",{
                 METHODS :'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-type':'application/json'
                },
                body:JSON.stringify(
                    {
                        'name':"",
                        'age':""
                    }
                )
                }).
                 then (function(response)
         {
         return response.json();
         }).then
        (function(myJson)
        {
           // Console.log(JSON.stringify(myJson))
        })
         }>Submit</button>
            </form>
       );
     
    }
}