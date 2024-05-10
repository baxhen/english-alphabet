'use client';

import { Button } from '@relume_io/relume-ui';
import type { ImageProps, ButtonProps } from '@relume_io/relume-ui';

type Props = {
  heading: string;
  description: string;
  buttons: ButtonProps[];
  image: ImageProps;
};

export type EbookProps = React.ComponentPropsWithoutRef<'section'> & Props;

export const Ebook = (props: Partial<EbookProps>) => {
  const { heading, description, buttons, image } = {
    ...EbookDefaults,
    ...props,
  } as Props;
  return (
    <header className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              {heading}
            </h2>
            <p className="md:text-md">{description}</p>
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
          <div>
            <img
              src={image.src}
              className="w-full object-cover"
              alt={image.alt}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

const EbookDefaults: EbookProps = {
  heading: 'Unlock Your English Potential Today',
  description:
    'Get one of the best e-book for improving your English skills as a beginner or intermediate.',
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
