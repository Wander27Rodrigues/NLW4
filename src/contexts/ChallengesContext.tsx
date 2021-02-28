import { createContext, useState, ReactNode, useEffect } from 'react';
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
    completeChallenge: () => void;
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

    // Solicitando permissão para user receber notification
    useEffect(() => {
        Notification.requestPermission();
    }, [])

    function levelUP() {
      setLevel(level+1);
    }
    
    function startNewChallenge() {
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
        const challenge = challenges[randomChallengeIndex];        

        setActiveChallenge(challenge)

        // usando mp3 notification
        new Audio('/notification.mp3').play();

        if (Notification.permission === 'granted') {
            new Notification('Novo desafio ☺', {
                body: `Valendo ${challenge.amount}xp!`
            })
        }
    }
    
    function resetChallenge() {
        setActiveChallenge(null);
    }

    function completeChallenge() {
        if (!activeChallenge) {
            return;
        }

        const { amount } = activeChallenge;

        // let is changes
        let finalExperience = currenteExperience + amount;

        if (finalExperience >= experienceToNextLevel) {
            finalExperience = finalExperience - experienceToNextLevel;
            levelUP();
        }

        setCurrenteExperience(finalExperience);
        setActiveChallenge(null);
        setChallengesCompleted(challengesCompleted + 1);


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
        completeChallenge,
        }}
    >
        {children}
    </challengesContext.Provider>
    );
}