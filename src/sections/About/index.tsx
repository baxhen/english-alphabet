'use client';

import { Button } from '@relume_io/relume-ui';
import type { ButtonProps, ImageProps } from '@relume_io/relume-ui';
import { RxChevronRight } from 'react-icons/rx';

type Props = {
  tagline: string;
  heading: string;
  description: string;
  buttons: ButtonProps[];
  image: ImageProps;
};

export type AboutProps = React.ComponentPropsWithoutRef<'section'> & Props;

export const About = (props: Partial<AboutProps>) => {
  const { tagline, heading, description, buttons, image } = {
    ...AboutDefaults,
    ...props,
  } as Props;
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              {heading}
            </h2>
            <p className="md:text-md">{description}</p>
            <div className="mt-6 flex items-center gap-x-4 md:mt-8">
              {buttons.map((button, index) => (
                <Button
                  key={`${button.title}-${index}`}
                  variant={button.variant}
                  size={button.size}
                  iconRight={button.iconRight}
                  iconLeft={button.iconLeft}
                >
                  {button.title}
                </Button>
              ))}
            </div>
          </div>
          <div>
            <img
              src={image.src}
              className="w-full object-cover"
              alt={image.alt}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutDefaults: AboutProps = {
  tagline: 'Alphabet Game',
  heading: 'Improve Your English Skills with Our Interactive Game',
  description:
    "Our game is designed to help you enhance your listening and alphabet recognition skills in a fun and engaging way. By playing the game, you'll become more proficient in identifying and typing letters, which are essential for effective communication in English.",
  buttons: [{ title: 'Play now', variant: 'secondary' }],
  image: {
    src: 'https://relume-assets.s3.amazonaws.com/placeholder-image.svg',
    alt: 'Placeholder image',
  },
};
