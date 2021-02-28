import { useContext } from 'react';
import { challengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/CompletedChallenges.module.css';

export function CompletedChallenges() {

    const {challengesCompleted} = useContext(challengesContext);

    return(
       <div className={styles.completedChallengesContainer}>
           <span>Desafios Complestos</span>
           
           <span>{challengesCompleted}</span>
       </div> 
    );
}