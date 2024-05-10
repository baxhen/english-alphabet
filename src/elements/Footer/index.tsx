'use client';

import type { ImageProps } from '@relume_io/relume-ui';
import { FaXTwitter } from 'react-icons/fa6';
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
  BiLogoYoutube,
} from 'react-icons/bi';

type Links = {
  title: string;
  url: string;
};

type ColumnLinks = {
  links: Links[];
};

type socialMediaLinks = Links & {
  icon: React.ReactNode;
};

type FooterLink = {
  title: string;
  url: string;
};

type Props = {
  image: ImageProps;
  columnLinks: ColumnLinks[];
  socialMediaLinks: socialMediaLinks[];
  footerText: string;
  footerLinks: FooterLink[];
};

export type FooterProps = React.ComponentPropsWithoutRef<'section'> & Props;

export const Footer = (props: Partial<FooterProps>) => {
  const { image, footerText, columnLinks, footerLinks, socialMediaLinks } = {
    ...FooterDefaults,
    ...props,
  } as Props;
  return (
    <footer className="px-[5%] py-12 md:py-18 lg:py-20">
      <div className="container">
        <div className="grid grid-cols-1 items-center justify-center justify-items-center gap-x-[4vw] gap-y-12 pb-12 md:pb-18 lg:grid-cols-[0.25fr_1fr_0.25fr] lg:justify-between lg:gap-y-4 lg:pb-20">
          <div className="lg:justify-self-start">
            <img src={image.src} alt={image.alt} className="inline-block" />
          </div>
          {columnLinks.map((column, index) => (
            <ul
              key={`column-${index}`}
              className="grid grid-flow-row grid-cols-1 items-start justify-center justify-items-center gap-6 md:grid-flow-col md:grid-cols-[max-content] md:justify-center md:justify-items-start"
            >
              {column.links.map((link, linkIndex) => (
                <li
                  key={`${link.title}-${linkIndex}`}
                  className="font-semibold"
                >
                  <a href={link.url} className="focus-visible:outline-none">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          ))}
          <div className="flex items-start justify-start justify-items-center gap-x-3 lg:justify-self-end">
            {socialMediaLinks.map((link, index) => (
              <a
                key={`${link.title}-${index}`}
                href={link.url}
                className="focus-visible:outline-none"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="h-px w-full bg-black" />
        <div className="flex flex-col-reverse items-center justify-center justify-items-center pt-6 text-sm md:flex-row md:gap-x-6 md:pt-8">
          <p className="mt-8 md:mt-0">{footerText}</p>
          <ul className="grid grid-flow-row grid-cols-[max-content] items-center justify-center justify-items-center gap-x-0 gap-y-4 text-sm md:grid-flow-col md:gap-x-6 md:gap-y-0">
            {footerLinks.map((link, index) => (
              <li
                key={`${link.title}-${index}`}
                className="underline decoration-black underline-offset-1 "
              >
                <a href={link.url} className="focus-visible:outline-none">
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

const FooterDefaults: FooterProps = {
  image: {
    src: 'https://relume-assets.s3.amazonaws.com/logo-image.svg',
    alt: 'Logo image',
  },
  columnLinks: [
    {
      links: [
        { title: 'Link One', url: '#' },
        { title: 'Link Two', url: '#' },
        { title: 'Link Three', url: '#' },
        { title: 'Link Four', url: '#' },
        { title: 'Link Five', url: '#' },
      ],
    },
  ],
  socialMediaLinks: [
    {
      title: 'Facebook',
      url: '#',
      icon: <BiLogoFacebookCircle className="size-6" />,
    },
    {
      title: 'Instagram',
      url: '#',
      icon: <BiLogoInstagram className="size-6" />,
    },
    { title: 'X', url: '#', icon: <FaXTwitter className="size-6 p-0.5" /> },
    {
      title: 'LinkedIn',
      url: '#',
      icon: <BiLogoLinkedinSquare className="size-6" />,
    },
    { title: 'Youtube', url: '#', icon: <BiLogoYoutube className="size-6" /> },
  ],
  footerText: '© 2024 Relume. All rights reserved.',
  footerLinks: [
    { title: 'Privacy Policy', url: '#' },
    { title: 'Terms of Service', url: '#' },
    { title: 'Cookies Settings', url: '#' },
  ],
};
