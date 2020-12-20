import React, {Component} from 'react';
import data from './data';
import Header from './Components/Header';

class SearchBar extends Component{
    constructor(){
        super()
        this.state = {
        books: [],
        userInput: '',
        filterBooks: []
    }
}
handleChange(val){
    this.setState({userInput: val});
}
handleClick(){

}
handleClear(){

}
filterBooks(prop){
    let books = this.state.books;
    let filterBooks = [];
    for(let i=0; i <books.length; i++){
    if(books[i].hasOwnProperty(prop)){
        filterBooks.push(books[i]);
    }
}
this.setState({filterBooks: filterBooks});
}

    render(){
        <Header />
        return(
            <section>
                <input onChange={ (e)=> this.handleChange(e.target.value)}/>
                <button onClick={() =>this.filterBooks(this.state.userInput)}></button>
            </section>
        )      
    }
}
export default SearchBar;