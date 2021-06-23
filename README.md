

<!-- PROJECT Spotify -->
<br />
<p align="center">
  <a href="https://github.com/EpitechIT2020/W-WEB-090-LIL-1-1-spotify-heifara.buval">
 Github
  </a>
 
  <h3 align="center">React Spotify</h3>

  <p align="center">
    Used APIs and React to streamline the user experience !
    <br />
    <br />
  </p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project



To start, you have to create an API in order to be able to create a responsive site with the React language.
Then thanks to the API we will have to list the artists, the musics, their albums as well as their genres.

Restrictions:
* Create a API
* Use React


<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

What you need to use the software and how to install it:
* First you need at least PHP 5.6 so check your version with:
  ```sh
  php -v
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/EpitechIT2020/W-WEB-090-LIL-1-1-spotify-heifara.buval
   ```
   
2. Make sure gd library is enabled.



<!-- USAGE EXAMPLES -->
## Usage
**Utilisation of API's and retrieves informations** <br><br>
album_details.php we retrieve the following data found in the albums and songs tables: id, album_id, name, track_no, duration, mp3.
```php
                        $tra=[
                            "id"=>$id,
                            "album_id"=>$album_id,
                            "name"=>$name,
                            "track_no"=>$track_no,
                            "duration"=>$duration,
                            "mp3"=>$mp3
                        ];
```

album_list.php we retrieve the following data found in the albums and artists tables: id, artist_id, name, photo.
```php
                       $alb=[
                            "id"=>$id,
                            "artist_id"=>$artist_id,
                            "name"=>$name,
                            "photo"=>$cover_small
                        ];
```
album_list_artist.php we retrieve the following data found in the albums and artists tables: id, artist_id, name photo.
```php
                        $alb=[
                            "id"=>$id,
                            "artist_id"=>$artist_id,
                            "name"=>$name,
                            "photo"=>$cover_small
                        ];
```
album_search.php we retrieve the following data found in the albums and artists tables: id, artist, name, photo.
```php

                        $alb=[
                            "id"=>$id,
                            "artist_id"=>$artist_id,
                            "name"=>$name,
                            "photo"=>$cover_small
                        ];
```
artist_details.php we retrieve the following data from the artists table: id, name, description, bio, photo.
```php
                        $art=[
                            "id"=>$artist->id,
                            "name"=>$artist->name,
                            "description"=>$artist->description,
                            "bio"=>$artist->bio,
                            "photo"=>$artist->photo,
        
                        ];
```


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, be inspired, and create. Any contributions are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


<!-- LICENSE -->
## License

Free license

<!-- CONTACT -->
## Contact

Heifara BUVAL - heifara.buval@epitech.eu
COURQUIN LAURA - laura.courquin@epitech.eu
TILQUIN MORGAN - morgan.tilquin@epitech.eu
BERCKER THEO - theo.bercker@epitech.eu

