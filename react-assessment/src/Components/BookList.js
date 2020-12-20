import React, {Component} from 'react';

const BookList = (props) => {
    const{id, title, author, img} = props.books
    const {data, i} = props
    const lastIndex= data.length -1;
    return(
        <div>
            <section>
                {title} {author}
            </section>
        </div>
    )
}
export default BookList;