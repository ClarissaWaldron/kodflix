import chilling from './Images/chilling.png';
import saul from './Images/saul.jpg';
import bojack from './Images/bojack.jpg';
import bad from './Images/bad.jpg';
import st from './Images/st.jpg';
import robot from './Images/robot.jpg';

export default function getImproveTvShowInfo() {
      return [
              {id: 'breakingbad', name: "Breaking Bad", image: bad, details: 'Set in Albuquerque, New Mexico between 2008 and 2010, Breaking Bad follows Walter White, a meek high school science teacher who transforms into a ruthless player in the local methamphetamine drug trade, driven by a desire to provide for his family after being diagnosed with terminal lung cancer.'},
              {id: 'chillingadventuresofsabrina', name: "Chilling Adventures of Sabrina", image: chilling, details: 'As her 16th birthday nears, Sabrina must choose between the witch world of her family and the human world of her friends. The series focuses on Sabrina Spellman during her teenage years in the 1960s, with flashbacks to the 1950s.'},
              {id: 'bojackhorseman', name: "Bojack Horseman", image: bojack, details: 'BoJack Horseman was the star of the hit television show Horsin Around in the 80s and 90s, now he is washed up, living in Hollywood, complaining about everything, and wearing colorful sweaters.'},
              {id: 'bettercallsaul', name: "Better Call Saul", image: saul, details: 'Ex-con artist Jimmy McGill turns into a small-time attorney and goes through a series of trials and tragedies, as he transforms into his alter ego Saul Goodman, a morally challenged criminal lawyer.' },
              {id: 'strangerthings', name: "Stranger Things", image: st, details: 'In a small Indiana town in the early 1980s, a boy goes missing after finding something sinister lurking in the woods. Nearby, a girl with extraordinary powers escapes from a sinister government facility and joins together with the boy\'s friends to get him back.' },
              {id: 'mrrobot', name: "Mr Robot", image: robot, details: 'Elliot, a brilliant but highly unstable young cyber-security engineer and vigilante hacker, becomes a key figure in a complex game of global dominance when he and his shadowy allies try to take down the corrupt corporation he works for.'},
      ];
}