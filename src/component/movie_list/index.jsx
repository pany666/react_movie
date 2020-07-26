import React, { PureComponent } from 'react';
import MovieItem from './listitem';
import './index.css';
import axios from 'axios';
// 请求接口http://www.omdbapi.com/?s=keyword&apikey=4a3b711b
// 默认keyword是man
export default class MovieList extends PureComponent{
    state = {
        movies: [],
        keyword: '',
        loading: true
    }
    componentDidMount(){
        this.getMovieList(this.props.keyword)
    }
    UNSAFE_componentWillReceiveProps(nextProps){//nextProps为下次要更新的数据
        if(nextProps.keyword!==this.props.keyword){
            this.getMovieList(nextProps.keyword)
        }
    }
    getMovieList = async (keyword) => {
        this.setState( { 
            movies:[],
            loading: true
        } )
        const res = await axios.get(`http://www.omdbapi.com/?s=${keyword}&apikey=4a3b711b`);
        const movies = res.data.Search;
        this.setState( { 
            movies,
            loading: false
        } )
    }
    render(){
        const { movies, loading } = this.state; 
        let content;
        if(movies&&movies.length){
            content= (
                <ul>
                    { 
                    movies.map((movie,index) => <MovieItem key={ index } movieItem={ movie } />)}
                </ul>
            )
        }else{
        content = <h3>{loading?"正在加载...":"没有找到该电影..."}</h3>
        }
        return content;
    }
}