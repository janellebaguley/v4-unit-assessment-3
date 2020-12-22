import {Component} from 'react';
import Shelf from './Components/Shelf';
import BookList from './Components/BookList';
import data from './data';
import './App.css';
import Header from './Components/Header';

class App extends Component{
  constructor(){
    super()
    this.state ={
    books: [],
    shelf: [],
    i: 0}
   }
  }
  addToShelf(){
    const Shelf = [Shelf, ...this.state.books]
    this.setState({shelf: Shelf})
  }
  handleChange(e){
    this.setState({shelf: e.target.value})
  }
  handleSubmit(){
    const {books, shelf} = this.state
    this.setState({
      books: [...books, shelf],
      shelf: ''
    })
  }

  render(){
  return (
    <div className="App">
      <h1 className = 'Header'>bookist</h1>
      <section className= 'container'>
      <BookList books = {data}/>
      </section>
      <input value={this.state.books} onchange={(e) => this.handleChange(e)}/>
      <button onClick={this.handleSubmit}>search</button>
    </div>
  );
  }
}

export default App;
