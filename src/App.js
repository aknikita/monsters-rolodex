import React, { Component } from 'react';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';
import './App.css';

class App extends Component{
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
      
    }
    //this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json() )
    .then(users => this.setState(
        {
        monsters: users
        }
        ))
      //.then(users => console.log(users))
  }
/*
  handleChange(e) {
    //handlechange-> my own method, "this" will not work in that case bind! 
    //this.setState({searchField:e.target.value});
  }
  */
  handleChange = (e) => {
    //arrow declaration allows js to set context automatically after class obj was instanciated
    this.setState({searchField:e.target.value});
  } 

  render() {
    //destructor object
    const { monsters, searchField} = this.state; //equals to const monsters =this.state.monsters
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox 
      placeholder="search monster" 
      handleChange = {this.handleChange}
      />
      <CardList monsters = {
        filteredMonsters
        //this.state.monsters
      }></CardList>
      </div>
      );
    }
  }

export default App;
