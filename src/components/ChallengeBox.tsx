import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
    
    const hasActiveChallenge = true;

    return (
        <div className={styles.challengeBoxContainer}>         
        { hasActiveChallenge ? (
            <div className={styles.challengeActive}>
                <header>Ganhe 400xp</header>

                <main>
                    <img src="icons/bodt.svg"/>
                    <strong>Novo desafio</strong>
                    <p>Levante e caminhe</p>
                </main>

                <footer>
                    <button
                    type="button"
                    className={styles.challengeFaliedButton}
                    >
                        Falhei
                    </button>
                    <button 
                    type="button"
                    className={styles.challengeSucceedeButton}
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
        )}        
            </div>
    )
}
