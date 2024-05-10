export const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

export const ALPHABET_LETTER_AUDIO_NAME = (letter: string) => `${letter}.mp3`;

// get a random letter from the alphabet
export const getRandomLetter = () => {
  return ALPHABET[Math.floor(Math.random() * ALPHABET.length)];
};

// get 10 random letters from the alphabet
export const getRandomLetters = (length = 16) => {
  return Array.from({ length }, () => getRandomLetter());
};
