import React from 'react';
import './App.css';
import chilling from './Images/chilling.png'
import saul from './Images/saul.jpg'
import bojack from './Images/bojack.jpg'
import bad from './Images/bad.jpg'
import st from './Images/st.jpg'
import robot from './Images/robot.jpg'


function App() {
  return (
    <div className="App">
      <br />
      <div className="container">
        <div className='item'>
          <img src={bad} alt='Breaking Bad' />
          <div className="overlay">Breaking Bad</div>
        </div>
        <div className='item'>
          <img src={chilling} alt="Chilling adventures of sabrina" />
          <div className="box2">Chilling Adventures of Sabrina</div>
        </div>
        <div className='item'>
          <img src={bojack} alt="bojack" />
          <div className="box3">Bojack Horseman</div>
        </div>
      </div>
      <div className="container">
        <div className='item'>
          <img src={saul} alt="Better call saul" />
          <div className="box4">Better Call Saul</div>
        </div>
        <div className='item'>
          <img src={st} alt="stranger things" />
          <div className="box5">Stranger Things</div>
        </div>
        <div className='item'>
          <img src={robot} alt='mr.robot' />
          <div className="box6">Mr. Robot</div>
        </div>
      </div>
    </div>
  );

}

export default App;

