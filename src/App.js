
import './App.css';
import Row from './Row.js'
import Banner from './Banner.js'
import Nav from './Nav'
import requests from './requests'


function App() {

  return (
    <div className="app">
      <Nav/>
     <Banner/>
    <Row title="Netflix Originals"  fetchUrl={requests.fetchNetflixOriginals} isLargeRow />

    <Row title="Trending Now"  fetchUrl={requests.fetchTrending}/>
    <Row title="Top Rated"  fetchUrl={requests.fetchTopRated}/>

    <Row title="Action Movies"  fetchUrl={requests.fetchActionMovies}/>

    <Row title="Comedy Movies"  fetchUrl={requests.fetchComedyMovies}/>
    <Row title="Horror Movies"  fetchUrl={requests.fetchHorrorMovies}/>
    <Row title="Romance Movies"  fetchUrl={requests.fetchRomanceMovies}/>
    <Row title="Documentaries"  fetchUrl={requests.fetchDocumentaries}/>
    
    </div>
  );
}

export default App;
