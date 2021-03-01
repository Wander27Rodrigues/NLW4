import '../styles/global.css';

import { ChallengesProvider } from '../contexts/ChallengesContext'


function MyApp({ Component, pageProps }) {

// se um contexto depender do outro ele fica dentro do pai
  return(
        <Component {...pageProps} />      
  ) 
}

export default MyApp
