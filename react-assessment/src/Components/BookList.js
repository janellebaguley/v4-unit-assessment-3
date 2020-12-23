

const BookList = (props) => {
    const {id, img, title, author} = props.books
    const {data, i} = props
    const lastI = data.length -1

addToShelf() =>{
        this.props.addShelf(this.state.shelf)
        this.setState({shelf: []})
}

    return(
        <section>   
            <div> {img} </div>
            <ul> {title} </ul>
            <ul> {author} </ul>
        </section>
    )
 }

export default BookList;    