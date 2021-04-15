import React from 'react'
import Row from './Row'
import requests from  '../requests';
import Banner from './Banner';
import Nav from './Nav';

function Home() {
    return (
        <div>
            <Nav />
            <Banner />
            <Row isLargeRow={true} title="TRENDING NOW" fetchUrl={requests.fetchTrending} />
            <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} />
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
            <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        </div>
    )
}

export default Home
