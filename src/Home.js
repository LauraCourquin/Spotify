import React from "react";
import ReactPaginate from 'react-paginate';
import './artist-list.css'
import { Link } from "react-router-dom";
export default class Home extends React.Component{


    state={
        artists:[

        ]
    }


    constructor( context) {
        super(context);
        this.load();
    }

    load=()=>{
        /*TODO CHANGER PAR VOTRE VIRTUALHOST*/
        fetch("http://localhost:8888/Spotify-Api-Rest/artist/artist_list_rand.php",{method:"GET"})
            .then(res=>res.json())
            .then(
                (result)=>{
                    this.setState({artists: result.artists})
                }
            )
    }

    handleClick=()=>{


    }
    render() {
        const title="Accueil"
        return (
            <div>

                <h1 onClick={this.handleClick}><i className="fas fa-home"></i>{title}</h1>
                <ul>
                    <div className={"block"}>
                        {this.state.artists.map((artists)=>(

                            <li>
                                <img className={"round"} src={artists.photo} alt={artists.photo}/>
                                <Link to={{pathname:"/artist-detail",state:{id:artists.id}}}>{artists.name}</Link>

                            </li>))}
                    </div>
                </ul>

            </div>
        );
    }

}