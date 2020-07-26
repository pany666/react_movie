import React, { Component } from 'react';
const listyle = {
        display: 'inline-block',
        width: '18%',
        margin: '20px 0 20px 20px'
    }
export default class MovieItem extends Component{
    render(){
       
        const { Title, Poster, Year, Type } = this.props.movieItem;
        return (
            <li style={ listyle }>
                <h4>{ Title }</h4>
                <img src= { Poster } alt={ Title } title={ Title } width='200' height='300' />
                <p>{ Year } -- { Type }</p>
            </li>
        )
    }
}