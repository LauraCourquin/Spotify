import React from "react";
import ReactPaginate from 'react-paginate';
import './artist-list.css'
import { Link } from "react-router-dom";
export default class ArtistList extends React.Component{


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
        fetch("http://localhost:8888/Spotify-Api-Rest/album/album_list.php",{method:"GET"})
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
        const title="Listes Artistes"
        return (
            <div>

                <h1 onClick={this.handleClick}><i className="fas fa-microphone"></i>{title}</h1>
                <ul>
                    <div className={"block"}>
                    {this.state.artists.map((artists)=>(

                        <li>
                            <img className={"round"} src={artists.photo} alt={artists.photo}/>
                            <Link to={{pathname:"/artist-detail",state:{id:artists.id}}}>{artists.name}</Link>

                        </li>))}
                    </div>
                    </ul>
                <ReactPaginate
                    previousLabel={'previous'}
                    nextLabel={'next'}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={'pagination'}
                    subContainerClassName={'pages pagination'}
                    activeClassName={'active'}
                />
            </div>
        );
    }

}