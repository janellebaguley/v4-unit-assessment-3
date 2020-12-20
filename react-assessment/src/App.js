import {Component} from 'react';
import Shelf from './Components/Shelf';
import BookList from './Components/BookList';
import data from './data';
import './App.css';

class App extends Component{
  constructor(){
    super()
    this.state ={
    books: [],
    shelf: [],
    i: [0]}
  }
  render(){
  return (
    <div className="App">
      <section className= 'container'>
      <BookList books={data[i]} i={i} books = {data}/>
      </section>
    </div>
  );
  }
}

export default App;
