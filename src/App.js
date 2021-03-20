import logo from './logo.svg';
import './App.css';
import React from 'react'
import { CardList } from './components/card-list/card-list.component.jsx'
import { Card } from "./components/card/card.component.jsx";
import { SearchBox } from "./components/search-box/search-box.component" ;
                      

class App extends React.Component  {

  constructor() {
    super();

    this.state = {
      monsters : [],
      searchField : ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(Response => Response.json())
    .then(users => this.setState({monsters : users}))
  }
  
  handleChange = (e) => {
    this.setState({ searchField : e.target.value}, () => console.log(this.state))  
  } 

  render() {

    const { monsters, searchField } = this.state
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    ) 

    return ( 
      <div className="App">
          
        <SearchBox 
          placeholder = ' search monsters'
          handleChange = { this.handleChange}
        />
        <h1 className = "headline">
            Monsters Rolodex
        </h1>
        <CardList monsters = {filteredMonsters} > 
              
        </CardList>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {
              this.state.monsters.map(monsters => ( 
             <p> <i> {monsters.name} </i> </p>))
            }
          </p>
       </header>
          
        </div>
     )


  }
}

export default App;
