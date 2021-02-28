import { createContext, useState, ReactNode } from 'react';
import challenges from '../../challenges.json';


// usando typeScript
interface Challenge {
    type: 'body' | 'eye';
    description: string;
    amount: number;
}


interface ChallengesContextDate {
    level: number;
    currenteExperience: number;
    experienceToNextLevel: number;
    challengesCompleted: number; 
    activeChallenge: Challenge;
    levelUP: () => void;
    startNewChallenge: () => void;
    resetChallenge: () => void;
} 

interface ChallengesProviderProps {
    children: ReactNode;
}


// varaiavel CONST
export const challengesContext = createContext({} as ChallengesContextDate);


export function ChallengesProvider({ children }: ChallengesProviderProps) {
    
    const [level, setLevel] = useState(1);
    const [currenteExperience, setCurrenteExperience] = useState(0);
    const [challengesCompleted, setChallengesCompleted] = useState(0);

    const [activeChallenge, setActiveChallenge] = useState(null)

    const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

    function levelUP() {
      setLevel(level+1);
    }
    
    function startNewChallenge() {
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
        const challenge = challenges[randomChallengeIndex];        

        setActiveChallenge(challenge)
    }
    
    function resetChallenge() {
        setActiveChallenge(null);
    }

    return (
    <challengesContext.Provider value={{
        level,
        challengesCompleted, 
        currenteExperience, 
        levelUP,
        startNewChallenge,
        activeChallenge,
        resetChallenge,
        experienceToNextLevel,
        }}
    >
        {children}
    </challengesContext.Provider>
    );
}