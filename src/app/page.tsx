import { Footer } from '@/elements/Footer';
import { Header } from '@/elements/Header';
import { About } from '@/sections/About';
import { Ebook } from '@/sections/Ebook';
import { Game } from '@/sections/Game';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="">
      <Header />
      <About />
      <Ebook />
      <Game />
      <Footer />
    </main>
  );
}
