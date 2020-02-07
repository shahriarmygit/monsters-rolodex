import React from 'react';
import { CardList } from './Component/Card-list/card-list.component';
import { SearchBox } from './Component/Search-Box/search-box.component';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters : users }))
  }

  handlechange = e => {
    this.setState({searchField: e.target.value})
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter( monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox 
          placeholder='Search Monsters'  
          handlechange={this.handlechange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
