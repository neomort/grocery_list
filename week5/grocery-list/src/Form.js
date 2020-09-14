import React from 'react';

class Form extends React.Component{
  state = {name: ""};

  handleSubmit =(e) => {
      e.preventDefault();
      this.props.add(this.state.name);
      this.setState({
        name: "",
      });
  }

  handleChange = (e) => {
    this.setState({
      name:e.target.value,
    });
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input
        required
        placeholder="what else u getting"
        value={this.state.name}
        onChange={this.handleChange}
        />
      </form>
    )
  }
  
  }
  
  export default Form;