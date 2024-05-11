'use client';

import {
  Button,
  Input,
  Select,
  SelectTrigger,
  SelectItem,
  SelectValue,
  SelectContent,
} from '@relume_io/relume-ui';
import type { ImageProps, ButtonProps } from '@relume_io/relume-ui';
import { useAlphabetGame } from './useAlphabetGame';
import { gameLevels } from './constants';

type Props = {
  heading: string;
  description: string;
  buttons: ButtonProps[];
  image: ImageProps;
};

export type GameProps = React.ComponentPropsWithoutRef<'section'> & Props;

export const Game = (props: Partial<GameProps>) => {
  const { heading, description, buttons, image } = {
    ...GameDefaults,
    ...props,
  } as Props;

  const {
    startGame,
    repeatSpelling,
    userInput,
    onUserInputChange,
    gameInProgress,
    checkUserScore,
    gameLevel,
    changeGameLevel,
  } = useAlphabetGame();

  return (
    <div className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div
          id="game"
          className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center"
        >
          <div>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              {heading}
            </h2>
            <p className="md:text-md">{description}</p>
            <div className="mt-6 flex gap-x-4 md:mt-8 flex-wrap">
              <Button onClick={startGame}>
                {gameInProgress ? 'Restart' : 'Start'}
              </Button>
              <Button onClick={repeatSpelling}>Repeat</Button>
              <Input
                type="text"
                id="name"
                value={userInput}
                onChange={onUserInputChange}
              />
              <Button onClick={checkUserScore}>Check</Button>
              <Select onValueChange={changeGameLevel}>
                <SelectTrigger>
                  <SelectValue
                    placeholder="Select one..."
                    className="capitalize"
                  />
                </SelectTrigger>
                <SelectContent>
                  {gameLevels.map((item) => (
                    <SelectItem
                      value={item.value}
                      key={item.value}
                      className="capitalize"
                    >
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const GameDefaults: GameProps = {
  heading: 'Test your listening skills with the Alphabet Game',
  description:
    'Click the Start button to begin the game. Listen to the audio and type the word you hear. The game will get harder as you progress. Good luck!',
  buttons: [
    {
      title: 'Buy',
      onClick: () => {
        window.open('https://amzn.to/4dLy0KK', '_blank');
      },
    },
    {
      title: 'Learn More',
      variant: 'secondary',
      onClick: () => {
        window.open('https://amzn.to/4dLy0KK', '_blank');
      },
    },
  ],
  image: {
    src: './short_stories_for_begginers_language_guru.jpg',
    alt: 'Placeholder image',
  },
};
