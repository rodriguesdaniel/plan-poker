import React, { Component } from 'react';
import '../App.css';

export class Form extends Component {
  constructor(props) {
    super();
    this.state = {
      userName: '',
      profile: true,
    };
  }

  handleUsername = (event) => {
    this.setState({
      userName: event.target.value,
    });
  };

  handleProfile = (event) => {
    this.setState({
      profile: false,
    });
  };

  submited = (event) => {
    //alert(`Username: ${this.state.username},`);
    event.preventDefault();
  };
  render() {
    const {data} = this.state;
    return (
      <div className={`profile-wrapper ${this.state.profile ? "show" : "hide"}`}>
        <form onSubmit={this.submited}>
          <label>Username:</label>
          <input
            type="text"
            value={this.state.userName}
            onChange={this.handleUsername}
          />
          <button onClick={this.handleProfile}>Submit</button>
        </form>
        {/*<User name={this.handleUsername}/>*/}
        {data}
      </div>
    );
  }
}

export default Form;