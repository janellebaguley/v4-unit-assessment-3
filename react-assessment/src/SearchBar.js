import React, {Component} from 'react';
import data from './data';


class SearchBar extends Component{
    constructor(){
        super()
        this.state ={
            userInput: ''

        }
    }
    handleChange(val){
        this.setState({userInput: val});
    }
    handleClick(){
    
    }
    handleClear =() => {
        this.setState({userInput: ''})
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
     
    rendor(){    
    return(
            <section>
                <input onChange={ (e)=> this.handleChange(e.target.value)}/>
                <button onClick={() =>this.filterBooks(this.state.userInput)}></button>
            </section>)
    }
}
export default SearchBar;