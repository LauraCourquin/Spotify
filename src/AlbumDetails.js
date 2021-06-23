import React from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import "./album_details.css";

export default class AlbumDetails extends React.Component {

    constructor(props, context, load) {
        super(props, context);
        this.load();
    }

    state = {
        artist: [],
        album: [],
        current:'',
        tracks:[],
        play:'no'
    }
    /*TODO CHANGER PAR VOTRE VIRTUALHOST*/
    load = () => {

        fetch("http://localhost:8888/Spotify-Api-Rest/album/album_details.php?p=" + this.props.location.state.id, {method: 'GET'})
            .then(response => response.json())
            .then((result) => {

                this.setState({album: result})
                this.setState({tracks: result.trackList.tracks})


                fetch("http://localhost:8888/Spotify-Api-Rest/artist/artist_details.php?p=" + result.artist_id, {method: 'GET'})
                    .then(response => response.json())
                    .then((result) => {

                        this.setState({artist:result})
                    })
                    .catch(error => console.log('error', error));
            })
            .catch(error => console.log('error', error));




    }

    handleClick = (e) => {
        if (this.state.play=='no'){
            this.setState({play:'yes'})
        }else {
            document.querySelectorAll('audio').forEach((item) => {
                item.pause();
                e.target.play();
                this.setState({play:'no'})
            })
        }
    }
    handleChange = (e) => {
        console.log(e.target.value)
    }

    render() {
        const title = "Détails des albums";

        var date = new Date(this.state.album.release_date * 1000);
        console.log(this.state.tracks.tracks);
        return (

            <div>
                <h1><i className="fas fa-info-circle"></i><i className="fas fa-compact-disc"></i>{title}</h1>
                <div className={"container-album"}>
                    <div className={"flex"}>
                        <h2 style={{color: 'white'}}>{this.state.album.name}</h2>
                        <img src={this.state.album.cover}/>
                    </div>

                    <p style={{color: 'white'}}>{this.state.album.description}</p>

                    <div className={"flex"}>
                        <div className={"center"}>
                            <h5>Date de sortie de l'album</h5>
                            <p style={{color: 'white'}}>{date.toUTCString()}</p>
                        </div>
                        <div className={"center1"}>
                            <h5>Popularité</h5>
                            <p style={{color: 'white'}}>{this.state.album.popularity}</p>
                        </div>
                    </div>

                </div>
                <div className={"flex"} style={{backgroundColor: 'black'}}>
                    <h2 style={{color: 'white'}}>{this.state.artist.name}</h2>
                    <img className={"round"} src={this.state.artist.photo} alt={this.state.artist.photo}/>
                </div>
               { <div>
                   {<div  className={"container"}>
                       {this.state.tracks.map((tr)=>(

                               <figure>
                                   <figcaption>{tr.name}</figcaption>
                                   <audio onPlay={this.handleClick} controls={'true'} src={tr.mp3}>

                                       <code>audio</code> element.
                                   </audio>
                               </figure>

                           ))}

                   </div>}
                </div>
}

            </div>
        )
    }


}