import React, {Component} from 'react';
import Booklist from './Booklist';

const Shelf= (props) => {
    const {id, img, title, author} = props.shelf
const {data, i} = props
addToShelf() =>{
    this.props.addShelf(this.state.shelf)
    this.setState({shelf: []})
  }

handleClear =() => {
    this.setState({shelf: []})
}
    return(
        <section>
        <h3>My Shelf</h3>
        {/* <iput value={this.state.shelf} placeholder = 'shelf' } */}
        <button onClick={this.handleClear}>clear shelf</button>
    </section>

    )
  }
export default Shelf;