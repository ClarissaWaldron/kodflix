import chilling from './Images/chilling.png';
import saul from './Images/saul.jpg';
import bojack from './Images/bojack.jpg';
import bad from './Images/bad.jpg';
import st from './Images/st.jpg';
import robot from './Images/robot.jpg';


export default function getImproveTvShowInfo () {
      return ([
              {id: 'breakingbad', name: "Breaking Bad", image: bad},
              {id: 'chillingadventuresofsabrina', name: "Chilling Adventures of Sabrina", image: chilling},
              {id: 'bojackhorseman', name: "Bojack Horseman", image: bojack},
              {id: 'bettercallsaul', name: "Better Call Saul", image: saul},
              {id: 'strangerthings', name: "Stranger Things", image: st},
              {id: 'mrrobot', name: "Mr Robot", image: robot},
      ])

      


}