import React, {Component} from 'react';

const BookList = (props) => {
    const{id, title, author, img} = props.books
    const {books, i, url} = props
    const lastIndex= books.length -1;
    return(
        <div>
            <section>
                <img src={img}/>
            <ul>{title} </ul>
            <ul>{author}</ul>
            </section>
        </div>
    )
  }

export default BookList;