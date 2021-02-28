import '../styles/global.css';

import { ChallengesProvider } from '../contexts/ChallengesContext'


function MyApp({ Component, pageProps }) {

// se um contexto depender do outro ele fica dentro do pai
  return(
    <ChallengesProvider>
        <Component {...pageProps} />      
    </ChallengesProvider>
  ) 
}

export default MyApp
