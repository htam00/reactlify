import React from 'react';
import axios from 'axios';
import './App.css';

const url = "https://thawing-ocean-58985.herokuapp.com/";

class Repos extends React.Component {
  state = {
    users: []
  }

  componentDidMount() {
    axios.get(url)
      .then(res => {
        const users = res.data;
        this.setState({ users });
      })
  }

  render() {
    return (
      <ul>
        { this.state.users.map(user => 
		<li>{user.name}</li>
	)}
      </ul>
    )
  }
}

function App() {
  return (
    <div className="App">
      	<h1>Users Github</h1>
	<div>
	  <Repos />
	</div>
    </div>
  );
}

export default App;
