import React from "react";
import './artist_details.css';
import axios from 'axios';
import { Link } from "react-router-dom";

export default class ArtistDetails extends React.Component{

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
        fetch("http://localhost:8888/Spotify-Api-Rest/artist/artist_details.php?p="+this.props.location.state.id,{method:'GET'})
            .then(response => response.json())
            .then((result)=>{
                this.setState({artists: result})
            })
            .catch(error => console.log('error', error));

        fetch("http://localhost:8888/Spotify-Api-Rest/album/album_list_artist.php?p=" + this.props.location.state.id, {method: 'GET'})
            .then(res => res.json())
            .then((result) => {

                this.setState({album: result.artist})
            })
            .catch(error => console.log('error', error));
    }

    handleClick=(e)=>{


    }
    handleChange=(e)=>{
        console.log(e.target.value)
    }
    render() {

        const title="Details des artistes";

        return (

            <div>
                <div className={"all"}>

                    <h2><i className="fas fa-info-circle"></i><i className={"fas fa-user"}></i>{title}</h2>

                    <div className={"full-contain"}>
                        <div className={"container1"}>
                            <img src={this.state.artists.photo}/>
                            <h2 className={"name-artist"}>{this.state.artists.name}</h2>
                        </div>
                        <div className={"container2"}>
                            <p className={"bio"}>{this.state.artists.bio}</p>
                            <p className={"description"}>{this.state.artists.description}</p>
                        </div>
                    </div>

                    {<div className={"container-img"}>

                        {this.state.album.map((albums)=>(
                            <li>
                                <div className={"name-album"}>
                                    <img className={"round"} src={albums.photo} alt={albums.photo}/>
                                    <Link to={{pathname:"/album-detail",state:{id:albums.id}}}>{albums.name}</Link>
                                </div>
                            </li>))}
                    </div>}
                </div>
            </div>
        )

    }

}