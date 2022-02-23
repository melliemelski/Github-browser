import React from 'react';
import './App.css';
import search from './search'

function App() {

const response = await fetch("https://api.github.com/orgs/{ORG_NAME}/repos")
const json = await response.json()

this.setState({
  list: json
})
.catch((error) => console.log(error));

handleChange = (event) => this.setState((searchTerm: event.target.value})

  return (
    <div className="App">
      <header className="Container">
        <Table />
        <search handleChange = this.handleChange></search>
        <p>this.state.list.map()</p>
      </header>
    </div>
  );
}

export default App;
