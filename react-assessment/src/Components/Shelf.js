import React, {Component} from 'react';

function Shelf(){
    return(
    <div>
        <h3>shelf</h3>
        {this.props.shelf}
        <button>clear shelf</button>
        </div>
    )
}
export default Shelf;