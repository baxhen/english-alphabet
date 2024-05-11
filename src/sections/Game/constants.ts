export const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

export const ALPHABET_LETTER_AUDIO_NAME = (letter: string) =>
  `./audios/${letter}.mp3`;

// get a random letter from the alphabet
export const getRandomLetter = () => {
  return ALPHABET[Math.floor(Math.random() * ALPHABET.length)];
};

// get 10 random letters from the alphabet
export const getRandomLetters = (length = 16) => {
  return Array.from({ length }, () => getRandomLetter());
};

export type TGameLevel = keyof typeof SPEED_MAP;

// map the speed difficulty to the speed in milliseconds with 5 game levels
export const SPEED_MAP = {
  beginner: 2000,
  intermediate: 1000,
  proficient: 800,
  advanced: 700,
  fluent: 600,
};

// map the word count difficulty to the number of letters to spell with 5 game levels
export const WORD_COUNT_MAP = {
  beginner: 4,
  intermediate: 16,
  proficient: 26,
  advanced: 26,
  fluent: 26,
};

// options of the game difficulty levels with value and label from the SPEED_MAP

export const gameLevels = Object.keys(SPEED_MAP).map((level) => ({
  value: level,
  label: level,
}));
