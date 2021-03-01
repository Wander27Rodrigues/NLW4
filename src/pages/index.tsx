import Head from 'next/head'
import { GetServerSideProps } from 'next';
import { Profile } from "../components/Profile";
import { ExperienceBar } from "../components/ExperienceBar";
import styles from '../styles/pages/Home.module.css';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { ChallengeBox } from "../components/ChallengeBox";
import { CountdownProvider } from '../contexts/CountdownContext';
import { ChallengesProvider } from '../contexts/ChallengesContext';



interface HomeProps{
  level: number;
  currenteExperience: number;
  challengesCompleted: number;
}

export default function Home(props) {


  return (
  <ChallengesProvider 
    level={props.level} 
    currenteExperience={props.currenteExperience}
    challengesCompleted={props.challengesCompleted}
  >
    <div className={styles.conteiner}>
      <Head>
        <title>Inicio Move.it</title>
      </Head>

      <ExperienceBar/>

      
      <section>
        <CountdownProvider>
        <div >
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
        
        <div>
          <ChallengeBox />
        </div>                
        </CountdownProvider>
      </section>      
    </div>
  </ChallengesProvider>
  )
}


export const getServerSideProps: GetServerSideProps = async (ctx) => {
  
  const { level, currenteExperience, challengesCompleted } = ctx.req.cookies;

  return{
    props: {
      level: Number(level),
      currenteExperience:Number(currenteExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}