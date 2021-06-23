import React from "react";
/*import './genre_details.css';*/
import axios from 'axios';
import { Link } from "react-router-dom";

export default class GenreDetails extends React.Component{

    constructor(props, context, load) {
        super(props, context);
        this.load();
    }

    state={
        artists:[

        ],
        album:[

        ]
    }
    /*TODO CHANGER PAR VOTRE VIRTUALHOST*/
    load=()=>{
        fetch("http://localhost:8888/Spotify-Api-Rest/genre/genre_details.php?p="+this.props.location.state.id,{method:'GET'})
            .then(response => response.json())
            .then((result)=>{
                this.setState({album: result.albums})
            })
            .catch(error => console.log('error', error));

    }

    handleClick=(e)=>{


    }
    handleChange=(e)=>{
        console.log(e.target.value)
    }
    render() {

        const title="Details des genres";

        return (

            <div>
                <div className={"all"}>

                    <h2><i className="fas fa-info-circle"></i><i className={"fas fa-user"}></i>{title}</h2>

                    <ul>
                        {<div className={"block"}>
                            {this.state.album.map((albums)=>(

                                <li>
                                    <p>{albums.id}</p>
                                    <img className={"round"} src={albums.cover} alt={albums.album_name}/>
                                    <Link to={{pathname:"/album-detail",state:{id:albums.album_id}}}>{albums.album_name}</Link>

                                </li>))}
                        </div>}
                    </ul>
                </div>
            </div>
        )

    }

}