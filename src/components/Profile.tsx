import { useContext, useState } from 'react';
import { challengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const { level } = useContext(challengesContext);

    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/wander27rodrigues.png" alt="Wander Souza"/>
        <div>
            <strong>Wander Souza</strong>
            <p>
                <img src="../icons/level.svg" alt="level" />
                {level}
            </p>
        </div>
        </div>
    );
}