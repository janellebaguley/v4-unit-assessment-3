
import React, {Component} from 'react';
// import data from '../data';
// import shelf from './shelf';


const BookList =(props) =>{
    const{id, img, title, author} = props.books
    const{data, i}= props
  
    
let mappedBooks = props.books.map((el, i) => { return <BookList key = {i} books= {el}/>})
            return(
                <section>
                   <img src ={props.img}/>
                   <title src= {props.title}/>
                    <author src ={props.author}/>
                </section>
            )}

    // return(
    //     <section>
    //     {this.props.shelf}
    //             <img src={this.props.img}/>
    //             <title src={this.props.title}/>
    //             <author src={this.props.author}/> 
    //     </section>    
    //     )

export default BookList;