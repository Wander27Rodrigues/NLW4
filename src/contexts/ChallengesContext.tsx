import { createContext, useState, ReactNode } from 'react';

// usando typeScript
interface ChallengesContextDate {
    level: number
    challengesCompleted: number; 
    currenteExperience: number;
    levelUP: () => void;
    startNewChallenge: () => void;
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

    function levelUP() {
      setLevel(level+1);
    }
    
    function startNewChallenge() {
        console.log('New challenge');
    }

    return (
    <challengesContext.Provider value={{
        level,
        challengesCompleted, 
        currenteExperience, 
        levelUP,
        startNewChallenge,
        }}
    >
        {children}
    </challengesContext.Provider>
    );
}