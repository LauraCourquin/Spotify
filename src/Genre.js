import React from "react";
import ReactPaginate from 'react-paginate';
/*import './artist-list.css'*/
import { Link } from "react-router-dom";
export default class Genre extends React.Component{


    state={
        genre:[

        ]
    }


    constructor( context) {
        super(context);
        this.load();
    }

    load=()=>{
        /*TODO CHANGER PAR VOTRE VIRTUALHOST*/
        fetch("http://localhost:8888/Spotify-Api-Rest/genre/genre_list.php",{method:"GET"})
            .then(res=>res.json())
            .then(
                (result)=>{
                    this.setState({genre: result.genres})
                }
            )
    }

    handleClick=()=>{


    }
    render() {
        const title="Listes Genres"
        return (
            <div>

                <h1 onClick={this.handleClick}><i className="fa fa-music" aria-hidden="true"></i>
                    {title}</h1>
                <ul>
                    <div id={"genre"}>
                        {this.state.genre.map((genres)=>(

                            <li>

                                <Link   to={{pathname:"/genre-detail",state:{id:genres.id}}}>{genres.name}</Link>

                            </li>))}
                    </div>
                </ul>
            </div>
        );
    }

}