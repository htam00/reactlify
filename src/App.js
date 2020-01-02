import React from 'react';
import axios from 'axios';
import './App.css';

const url = "https://api.github.com/users";

class Repos extends React.Component {
  state = {
    repos: []
  }

  componentDidMount() {
    axios.get(url)
      .then(res => {
        const repos = res.data;
        this.setState({ repos });
      })
  }

  render() {
    return (
      <ul>
        { this.state.repos.map(repo => 
		<li>{repo.login}</li>
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
