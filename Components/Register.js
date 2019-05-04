import React from 'react';


 export default class Register extends React.Component
{


  constructor(props) {
    super(props)
    this.state = { hintText: '', value: props.value }
  }


  onChange(event) {
    if (event.target.value) {
      this.setState({ errorText: '' })
    } else {
      this.setState({ errorText: 'Invalid format: ###-###-####' })
    }
  }

  changeText(event){
    this.setState(
        {}
    );
}



  render() {
    return (
    <form className="App">
        <input
        />
        <input type="text" value={this.state.textValue} onChange = {this.changeText}></input>

        <button onChange={this.onChange.bind(this) 
        }>Register</button>
        </form>
    
    )
  }



}