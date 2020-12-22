import React, {Component} from 'react';
import data from '../data'

class Shelf extends Component{
    constructor(){
        super()
        this.state = {
            shelf: []
        }
    }
    handleChange(e){
        this.setState({
            shelf: e.target.value
        })
    }
    handleClear =() => {
        this.setState({shelf: ''})
    }
    rendor(){
    return(
    <section>
        <h3>My Shelf</h3>
        <iput value={this.state.shelf} placeholder = 'shelf'/>
        <button onClick={this.handleClear}>clear shelf</button>
    </section>

    )}
  }

export default Shelf;