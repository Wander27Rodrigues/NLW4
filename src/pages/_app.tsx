import '../styles/global.css';

import { ChallengesProvider } from '../contexts/ChallengesContext';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


function MyApp({ Component, pageProps }) {

// se um contexto depender do outro ele fica dentro do pai
  return(
        <Component {...pageProps} />      
  ) 
}

export default MyApp
