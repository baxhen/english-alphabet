// custom hook to manage the alphabet game logic
//
import { useCallback, useEffect, useState } from 'react';
import {
  ALPHABET,
  ALPHABET_LETTER_AUDIO_NAME,
  SPEED_MAP,
  TGameLevel,
  WORD_COUNT_MAP,
  getRandomLetters,
} from '@/sections/Game/constants';

export const useAlphabetGame = () => {
  const [gameLevel, setGameLevel] = useState<TGameLevel>('easy'); // game difficulty level [default: easy
  const [letterCount, setLetterCount] = useState(WORD_COUNT_MAP[gameLevel]); // number of letters to spell [default: 16
  const [letters, setLetters] = useState<string[]>([]);
  const [lettersSpelling, setLettersSpelling] = useState(letters);
  const [speed, setSpeed] = useState(SPEED_MAP[gameLevel]); // speed of spelling letters [ms]
  const [userInput, setUserInput] = useState(''); // user input to spell the letters
  const [gameInProgress, setGameInProgress] = useState(false); // flag to indicate if the game is in progress

  // Start the game by setting the initial state and start listening to user key presses
  const startGame = () => {
    console.log('start');
    setUserInput('');
    setGameInProgress(true);
    const newLetters = getRandomLetters(letterCount);
    setLetters(newLetters);
    setLettersSpelling(newLetters);
  };

  const spellLetters = useCallback(() => {
    const interval = setInterval(() => {
      setLettersSpelling((oldLetters) => {
        const [letter, ...rest] = oldLetters;

        if (!letter) return [];

        const audio = new Audio(ALPHABET_LETTER_AUDIO_NAME(letter));
        audio.play();
        return rest;
      });
    }, speed);
    setTimeout(() => {
      clearInterval(interval);
    }, speed * letters.length);
  }, [letters, speed]);

  const repeatSpelling = () => {
    setLettersSpelling(letters);
    spellLetters();
  };

  const changeGameLevel = (level: TGameLevel) => {
    setGameLevel(level);
    setLetterCount(WORD_COUNT_MAP[level]);
    setSpeed(SPEED_MAP[level]);
  };

  const onUserInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const checkUserScore = () => {
    if (userInput.toLowerCase() === letters.join('')) {
      alert('Correct!');
    } else {
      alert(`Incorrect! The correct answer is ${letters.join('')}`);
    }
  };

  useEffect(() => {
    if (letters.length) spellLetters();
  }, [letters, spellLetters]);

  return {
    startGame,
    repeatSpelling,
    userInput,
    onUserInputChange,
    gameInProgress,
    checkUserScore,
    letters,
    changeGameLevel,
    gameLevel,
  };
};
