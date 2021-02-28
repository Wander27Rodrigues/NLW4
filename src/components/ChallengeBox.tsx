import { useContext } from 'react';
import { challengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
    
    const contextData = useContext(challengesContext);

    console.log(contextData)

    const hasActiveChallenge = true; 

    return (
        <div className={styles.challengeBoxContainer}>         
        { hasActiveChallenge ? (
            <div className={styles.challengeActive}>
                <header>Ganhe 400xp</header>

                <main>
                <img src="icons/body.svg"/>
                    <strong>Novo desafio</strong>
                    <p>Levante e caminhe por 3 minutos e pule por 2 minutos</p>
                </main>

                <footer>
                    <button
                    type="button"
                    className={styles.challengeFailedButton}
                    >
                        Falhei
                    </button>
                    <button 
                    type="button"
                    className={styles.challengeSucceededButton} 
                    >
                        completei
                    </button>
                </footer>
            </div>
        ) : (
            <div className={styles.challengeBoxNotActive}>
            <strong>Finalize um ciclo para receber um desafio</strong>
            <p>
                <img src="icons/level-up.svg" alt="Level Up" />
                Avance de level completando desafios.
            </p>
            </div>
        ) }        
            </div>
    )
}
