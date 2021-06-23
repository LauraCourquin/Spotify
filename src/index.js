import React from 'react';
import './Home.css';
import ReactDOM from 'react-dom';
import ArtistList from "./ArtistList";
import ArtistDetails from "./ArtistDetails";
import AlbumDetails from "./AlbumDetails";
import Search from "./Search";
import Genre from "./Genre";
import Home from "./Home";
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Link, Route} from "react-router-dom";
import AlbumList from "./AlbumList";
import GenreDetails from "./GenreDetails";

export default class App extends React.Component{
    render() {
        return(
            <BrowserRouter>
                <div className="App">
                    <nav>
                        <ul className={"navbar"}>
                            <li className={"items"}><Link to={{pathname:"/"}}>Accueil</Link></li>
                            <li className={"items"}><Link to={{pathname:"/search"}}>Recherche</Link></li>
                            <li className={"items"}><Link to={{pathname:"/artist-list"}}>Artistes</Link></li>
                            <li className={"items"}><Link to={{pathname:"/album-list"}}>Albums</Link></li>
                            <li className={"items"}><Link to={{pathname:"/genre-list"}}>Genres</Link></li>
                        </ul>
                    </nav>
                    <Route path="/artist-list" exact component={ArtistList}/>
                    <Route path="/artist-detail" exact component={ArtistDetails}/>
                    <Route path="/album-detail" exact component={AlbumDetails}/>
                    <Route path="/genre-detail" exact component={GenreDetails}/>
                    <Route path="/album-list" exact component={AlbumList}/>
                    <Route path="/genre-list" exact component={Genre}/>
                    <Route path="/search" exact component={Search}/>
                    <Route path="/" exact component={Home}/>
                   {/* <Route path="/" exact component={Home}/>*/}

                </div>
            </BrowserRouter>
        );
    }
}



const rootElement= document.getElementById("root");
ReactDOM.render(<App />,rootElement);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
