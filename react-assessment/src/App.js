import React, {Component} from 'react';
import Booklist from './Components/BookList';
import Shelf from './Components/Shelf';
import data from './data';

class App extends Component{
  constructor(){
    super()
    this.state ={
      books: [],
      shelf: []
    }
  }
  addToShelf() =>{
    this.props.addShelf(this.state.shelf)
    this.setState({shelf: []})
  }
  clearShelf(){

  }
  filterBooks(prop){
    let books = this.state.books;
    let filterBooks = [];
    for(let i=0; i <books.length; i++){
    if(books[i].hasOwnProperty(prop)){
        filterBooks.push(books[i]);
    }
}
this.setState({filterBooks: ''}); 
}
    render() {
      
      return(
        <section>
          <Boo kList books={this.state.books}/>
        </section>
      )
 }
}
export default App;