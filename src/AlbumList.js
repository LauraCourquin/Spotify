import React from "react";
import ReactPaginate from 'react-paginate';
import './artist-list.css'
import { Link } from "react-router-dom";
export default class AlbumList extends React.Component{


    state={
        albums:[

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
                    this.setState({albums: result.albums})
                }
            )
    }

    handleClick=()=>{


    }
    render() {
        const title="Listes Albums"
        return (
            <div>

                <h1 onClick={this.handleClick}><i className="fas fa-compact-disc"></i>{title}</h1>
                <ul>
                    <div className={"block"}>
                    {this.state.albums.map((albums)=>(

                        <li>
                            <img className={"round"} src={albums.photo} alt={albums.photo}/>
                            <Link to={{pathname:"/album-detail",state:{id:albums.id}}}>{albums.name}</Link>

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