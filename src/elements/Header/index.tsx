'use client';

import { Button } from '@relume_io/relume-ui';
import type { ImageProps, ButtonProps } from '@relume_io/relume-ui';
import './style.css';

type Props = {
  heading: string;
  description: string;
  buttons: ButtonProps[];
  image: ImageProps;
};

export type HeaderProps = React.ComponentPropsWithoutRef<'section'> & Props;

export const Header = (props: Partial<HeaderProps>) => {
  const { heading, description, buttons, image } = {
    ...HeaderDefaults,
    ...props,
  } as Props;
  return (
    <header className="relative px-[5%] ">
      <div className="container">
        <div className="flex max-h-[60rem] min-h-svh items-center py-16 md:py-24 lg:py-28">
          <div className="max-w-md">
            <h1 className="mb-5 text-6xl font-bold text-text-alternative md:mb-6 md:text-9xl lg:text-10xl">
              {heading}
            </h1>
            <p className="text-base text-text-alternative md:text-md">
              {description}
            </p>
            <div className="mt-6 flex gap-x-4 md:mt-8">
              {buttons.map((button, index) => (
                <Button
                  key={`${button.title}-${index}`}
                  variant={button.variant}
                  size={button.size}
                  iconRight={button.iconRight}
                  iconLeft={button.iconLeft}
                  onClick={button.onClick}
                >
                  {button.title}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10">
        <img
          src={image.src}
          className="size-full object-contain img"
          alt={image.alt}
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </header>
  );
};

const HeaderDefaults: HeaderProps = {
  heading: 'Improve Your Listening Skills',
  description: 'Enhance your language skills with our interactive game.',
  buttons: [
    {
      title: 'Play',
      onClick: () => {
        document.getElementById('game')?.scrollIntoView({ behavior: 'smooth' });
      },
    },
    { title: 'Learn More', variant: 'secondary-alt' },
  ],
  image: {
    src: './header.png',
    alt: 'English Alphabet',
  },
};
