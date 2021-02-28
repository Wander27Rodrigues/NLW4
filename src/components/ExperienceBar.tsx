import { useContext } from 'react';
import { challengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar (){
    const { currenteExperience, experienceToNextLevel } = useContext(challengesContext);
    
    const percentToNextLevel = Math.round(currenteExperience * 100) / experienceToNextLevel;


    return(
        // usar o className porque o classe se usa no JS
        <header className={styles.experienceBar}>
            <span>0 xp</span>
            <div>
                <div style={{ width: `${percentToNextLevel}%`}} />
                
                <span className={styles.currentExperience} style={{ left: `${percentToNextLevel}%`}}>
                    {currenteExperience}xp
                </span>
            </div>
            <span>{experienceToNextLevel} xp</span>
        </header>
    );
}