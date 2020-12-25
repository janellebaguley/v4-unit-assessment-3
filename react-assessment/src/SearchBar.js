import React, {Component} from 'react';

class SearchBar extends Component {
    constructor(){
        super();
        this.state = {
            userInput: ''
        }
    }
handleChange(value) {
    this.setState({userInput: value});
}
handleClick(filter){
    this.setState({filterBooks: this.props.filterBooks, filter})
}
 handleClear(value){
    this.userInput = ''
 }
    render() {
        return (
            <section>
            <button className="confirmationButton" onClick={ () => this.filterBooks(this.state.userInput) }> search </button>
            <span>  { JSON.stringify(this.state.filterBooks) } </span> 
            <input onChange ={e => this.handleChange(e.target.value)} type="text" />
            <p>{this.state.userInput}</p>
            <button className ='confirmationButton' onClick={() => this.handleClear}>clear search</button>
            </section>
            ) 
    }
}
export default SearchBar;