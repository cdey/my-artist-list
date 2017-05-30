# my-artist-list

## Heroku Link
myartistlist.herokuapp.com

## Install Dependencies
npm install

## Setup
  - See example.env as template for .env file
  - Get Spotify OAuth Token required for search URI
    - https://developer.spotify.com/web-api/console/get-search-item/

## Project Layout

* HomePage
  - Search for an artist

* ArtistPage
  - See top tracks/upcoming concerts and add artist to favorites list

* FavoritesPage
  - See list of favorite artists with links to artist pages

## Algorithms / Techniques
  - Used a variable to store most recently searched artist
    - This would ideally be done using a cache

