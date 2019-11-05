import React from 'react';
import './App.css';
import chilling from './Images/chilling.png';
import saul from './Images/saul.jpg';
import bojack from './Images/bojack.jpg';
import bad from './Images/bad.jpg';
import st from './Images/st.jpg';
import robot from './Images/robot.jpg';
import Tvshow from './Tvshow';


function App() {
  return (
    <div className="App">
      <br />
      <section className="row">
      <Tvshow name = "Breaking Bad" image = {bad}/>
      <Tvshow name = "Chilling Adventures of Sabrina" image = {chilling}/>
      <Tvshow name = "Bojack Horseman" image = {bojack}/>
    </section>
    <section className="row">
      <Tvshow name = "Better Call Saul" image = {saul}/>
      <Tvshow name = "Stranger Things" image = {st}/>
      <Tvshow name = "Mr Robot" image = {robot}/>
    </section>
    </div>
  );

}

export default App;

