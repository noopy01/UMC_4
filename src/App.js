import { BrowserRouter, Route,Routes } from 'react-router-dom';

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Popular from './pages/Popular';
import NowPlaying from './pages/NowPlaying';
import TopRated from './pages/TopRated';
import Login from './pages/Login';
import Upcoming from './pages/Upcoming';
import MovieDetail from './components/MovieDetail';

import Header from './components/Header';
// import Movie from './components/Movie';

//import styled from 'styled-components';


function App() {

  return (
  <div className="root-wrap">

  <BrowserRouter>
  <Header/>
  <Routes>
    <Route path="/" element={<Home />} /> 
    <Route path="/login" element={<Login />} /> 
    <Route path="/movie/:title" element={<MovieDetail />} /> 
    <Route path="/popular" element={<Popular />} /> 
    <Route path="/now playing" element={<NowPlaying />} /> 
    <Route path="/top rated" element={<TopRated />} /> 
    <Route path="/upcoming" element={<Upcoming />} />
    <Route path="/*" element={<NotFound />} /> 
    </Routes>
    </BrowserRouter>
    </div>
  
  );


}



export default App;
