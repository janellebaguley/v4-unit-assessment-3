import React, {Component} from 'react';
import './Components/BookList';
import Shelf from './Components/Shelf';
import Header from './Components/Header';
import "./App.css";
import SearchBar from './SearchBar';
import data from './data';

class App extends Component{ 
  constructor(props) {
    super(props);

    this.state = {
      books: [],
      shelf: []
    }
    this.addToShelf =this.addToShelf.bind(this);
  }
  addToShelf(){
    this.setState({
      shelf: {...this.state.shelf}
    })
  }
  clearShelf(value){
    this.shelf= ['']
  }
  filterBooks(prop){
    let books = this.state.books;
    let filterBooks = [];
    for(let i = 0; i < books.length; i++){
        if(books[i].hasOwnProperty(prop)){
            filterBooks.push(books[i]);
        }
    }
    this.setState({filterBooks: filterBooks});

  }

  render() {
    let shelf = this.state.shelf.map((element, index) => {
      return <Shelf key={index} shelf={element} />;
    });
    return (
      <div className="App">
        <Header/>
        <SearchBar books={this.filterBooks}/>
        {/* <BookList /> */}
        {/* <Shelf shelf={this.addToShelf}/> */}
      </div>
    )
  }
}
export default App;