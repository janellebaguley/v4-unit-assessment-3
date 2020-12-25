
import React, {Component} from 'react';
import data from '../data';

const BookList =(props) =>{
    const{id, img, title, author} = props.mappedBooks
    const{data, i}= props
    // let mappedBooks = {this.props.books}

// }
    
    return(
        <section>
        {this.props.shelf}
        {this.props.mappedBooks.map((el, i) => (
                    <data key={i} item={el} />
                ))}
                <img src={this.props.img}/>
                <title src={this.props.title}/>
                <author src={this.props.author}/>
        </section>    
        )
    }

export default BookList;