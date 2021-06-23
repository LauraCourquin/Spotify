import React from "react";
import ReactPaginate from 'react-paginate';
import './search.css'
import {Link, Route} from "react-router-dom";
    export default class Search extends React.Component{


    state={
        result:[

        ],
        radio:'Artistes',
        path:''
    }


    constructor( context) {
        super(context);
    }

    load=()=>{
        /*TODO CHANGER PAR VOTRE VIRTUALHOST*/

    }

    handleRadio=(e)=>{
        console.log(e.target.value)
        this.setState({radio:e.target.value})
        Array.from(document.querySelectorAll("input")).forEach(
            input => (input.value = "")
        );
        this.setState({
            itemvalues: [{}]
        });
        this.setState({result:[]})
    }

        handleSearch=(e)=>{
            if(e.target.value.length!==0){
            if(this.state.radio==='Artistes'){
                this.setState({path: "/artist-detail" })
                console.log(e.target.value);
                fetch("http://localhost:8888/Spotify-Api-Rest/artist/artist_search.php?p=" + e.target.value, {method: 'GET'})
                    .then(response => response.json())
                    .then((result) => {
                        console.log(result)
                        this.setState({result:result.search})
                    })
                    .catch(error => console.log('error', error));

            }
            if(this.state.radio==='Albums'){
                this.setState({path: "/album-detail" })
                console.log(e.target.value)
                    fetch("http://localhost:8888/Spotify-Api-Rest/album/album_search.php?p=" + e.target.value, {method: 'GET'})
                        .then(response => response.json())
                        .then((result) => {
                            /*console.log(result)*/
                            this.setState({result:result.search})
                        })
                        .catch(error => console.log('error', error));


            }
            if(this.state.radio==='Genres'){
                this.setState({path: "/genre-detail" })
                    fetch("http://localhost:8888/Spotify-Api-Rest/genre/genre_search.php?p=" + e.target.value, {method: 'GET'})
                        .then(response => response.json())
                        .then((result) => {
                            console.log(result)
                            this.setState({result:result.search})
                        })
                        .catch(error => console.log('error', error));


            }


        }
        }
        render() {
            const title="Recherche"
            return (
                <div>
                    <h1 onClick={this.handleClick}><i className="fas fa-search"></i>{title}</h1>
                    <div className={"all-radio"}>
                        <div className={"radio1"}>
                            <label htmlFor={"artistes"}>Artistes</label>
                            <input checked={this.state.radio==="Artistes"} onChange={this.handleRadio} type={"radio"}   id={"artistes"} name={"search"} value={'Artistes'}/>
                        </div>
                        <div className={"radio2"}>
                            <label htmlFor={"albums"}>Albums</label>
                            <input checked={this.state.radio==="Albums"} onChange={this.handleRadio} type={"radio"}  id={"albums"} name={"search"} value={'Albums'}/>
                        </div>
                        <div className={"radio3"}>
                            <label htmlFor={"genres"}>Genres</label>
                            <input checked={this.state.radio==="Genres"} onChange={this.handleRadio} type={"radio"} id={"genres"} name={"search"} value={'Genres'}/>
                        </div>
                        <input onChange={this.handleSearch} type={"search"}/>
                    </div>

                    <div>
                        {<ul>
                            <div className={"block2"}>
                                {this.state.result.map((search)=>(
                                    <li>   { typeof search.photo !== 'undefined' ? (
                                        <img className={"round"} src={search.photo} alt={search.id}/>

                                    ) : (
                                        <img className={"d-none"} src={search.photo} alt={search.id}/>
                                    )}

                                        <Link to={{pathname:this.state.path,state:{id:search.id}}}>{search.name}</Link>

                                    </li>))}
                            </div>
                        </ul>}
                    </div>

                </div>



            );
        }



}