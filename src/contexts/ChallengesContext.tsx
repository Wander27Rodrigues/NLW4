import { 
    createContext, 
    useState, 
    ReactNode, 
    useEffect 
} from 'react';
import Cookies from 'js-cookie';
import challenges from '../../challenges.json';
import { LevelUpModal } from '../components/LevelUpModal';



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
    closeLevelUpModal: () => void;
} 

interface ChallengesProviderProps {
    children: ReactNode;
    level: number;
    currenteExperience: number;
    challengesCompleted: number;
}


// varaiavel CONST
export const challengesContext = createContext({} as ChallengesContextDate);


export function ChallengesProvider({ 
    children, 
    ...rest
    }: ChallengesProviderProps) {
    
    const [level, setLevel] = useState(rest.level ?? 1);
    const [currenteExperience, setCurrenteExperience] = useState(rest.currenteExperience ?? 0);
    const [challengesCompleted, setChallengesCompleted] = useState(rest.challengesCompleted ?? 0);
    
    const [activeChallenge, setActiveChallenge] = useState(null)

    const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false)

    const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

    // Solicitando permissão para user receber notification
    useEffect(() => {
        Notification.requestPermission();
    }, [])

    useEffect(() => {
        Cookies.set('level', String(level));
        Cookies.set('currenteExperience', String(currenteExperience));
        Cookies.set('challengesCompleted', String(challengesCompleted));
    }, [level, currenteExperience, challengesCompleted]);

    // funções
    function levelUP() {
      setLevel(level+1);
      setIsLevelUpModalOpen(true)
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

    function closeLevelUpModal() {
        setIsLevelUpModalOpen(false);
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
        closeLevelUpModal,
        }}
    >
        {children}

        { isLevelUpModalOpen && <LevelUpModal/>}    
    </challengesContext.Provider>
    );
}