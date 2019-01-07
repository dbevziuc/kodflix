import React, { Component } from 'react';
import bandOfBrothers from './img/tvShows/band-of-brothers.jpg';
import blackMirror from './img/tvShows/black-mirror.jpg';
import cosmos from './img/tvShows/cosmos.jpg';
import gameOfThrones from './img/tvShows/game-of-thrones.jpg';
import life from './img/tvShows/life.jpg';
import sopranos from './img/tvShows/the-sopranos.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="Header">
        <div className="TvShows">
          <div className='TvShows__img'>
            <img src={bandOfBrothers} alt='Tv Shows Logo'/>
          </div>
          <div className='TvShows__img'>
            <img src={blackMirror} alt='Tv Shows Logo'/>
          </div>
          <div className='TvShows__img'>
            <img src={cosmos} alt='Tv Shows Logo'/>
          </div>
          <div className='TvShows__img'>
            <img src={gameOfThrones} alt='Tv Shows Logo'/>
          </div>
          <div className='TvShows__img'>
            <img src={life} alt='Tv Shows Logo'/>
          </div>
          <div className='TvShows__img'>
            <img src={sopranos} alt='Tv Shows Logo'/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
