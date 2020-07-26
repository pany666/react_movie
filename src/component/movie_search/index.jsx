import React, { Component } from 'react';
import './index.css'
export default class Search extends Component{
    constructor(props){
        super(props);
        this.input = React.createRef();
    }
    // state = {
    //     keyword: ''
    // }
    handleSubmit = () => {
        
        // console.log(this.input.current.value)
        // this.setState({
        //     keyword: this.input.current.value
        // })
        this.props.handleSearch(this.input.current.value);

        this.input.current.value='';

    }
    render(){
        return (
            <div className="search">
               <input type="text"  className="search_input" autoComplete="off"  ref={this.input} />
               <input type="button" className="search_submit" value="搜索" onClick={this.handleSubmit} />
            </div>
        )
    }
}