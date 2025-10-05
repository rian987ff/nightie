import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { WavyBackground } from '../components/ui/WavyBackground';
import { lookbookSliderImages } from '../constants';
import { ExpandablePlaylist } from '../components/ui/ExpandableCard';
import { ImagesSlider } from '../components/ui/ImagesSlider';
import SvgBordado from '../components/icons/Bordado.tsx';
import InstagramIcon from '../components/icons/Instagram.tsx';

const HomePage: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <main className="flex-grow relative">
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-40 flex justify-center items-center w-full">
          <Link to="/">
            <SvgBordado className="w-28 h-28 md:w-32 md:h-32 text-white drop-shadow-lg opacity-90" />
          </Link>
        </div>

        <section className="relative h-screen overflow-hidden [-webkit-mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)] [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)]">
          <WavyBackground 
            className="max-w-4xl mx-auto pb-40"
            colors={["#22c55e", "#14b8a6", "#5c6ac4", "#8b5cf6", "#7c3aed"]} 
            waveWidth={4}
            waveOpacity={0.8}
          >
            <div className="pt-20 px-4">
              <p className="text-2xl md:text-4xl lg:text-7xl text-white inter-var text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 font-sans font-bold opacity-90 tracking-tighter leading-snug">
                Living as an artist is a way of being in the world
              </p>
              <p className="text-base md:text-lg mt-4 text-neutral-300 font-normal inter-var text-center max-w-lg mx-auto opacity-70">
                Rick Rubin
              </p>
              <div className="mt-8 flex justify-center">
                <Link to="/shop">
                  <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 font-medium text-white backdrop-blur-3xl tracking-widest leading-7 text-base">
                      Shop now
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </WavyBackground>

          {/* Simple Bouncing Chevron Scroll Down Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30">
            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white/50">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </motion.div>
          </div>
        </section>

        <div className="px-4 md:px-8 py-16">
          {/* Playlists Card */}
          <div className="relative border border-zinc-800 rounded-3xl p-8 md:p-12 mb-16 overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-40 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e5b,transparent)] animate-[pulse_8s_ease-in-out_infinite]"></div>
            <motion.div
              className="relative z-10"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeInOut' as const }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
               Our Playlists
              </h2>
              <ExpandablePlaylist />
            </motion.div>
          </div>

          {/* Lookbook Card */}
          <div className="relative overflow-hidden border border-zinc-800 rounded-3xl p-8 md:p-12">
            <div className="absolute inset-0 z-0 opacity-40 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e5b,transparent)] animate-[pulse_8s_ease-in-out_infinite]"></div>
            <motion.div
              className="relative z-10 w-full flex flex-col items-center justify-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeInOut' as const }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Lookbook
              </h2>
              <div className="h-[28rem] w-full max-w-2xl mx-auto rounded-2xl overflow-hidden">
                <ImagesSlider images={lookbookSliderImages}>
                  <motion.div
                    initial={{ opacity: 0, y: -80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="z-50 flex flex-col justify-center items-center"
                  >
                    <motion.p className="font-bold text-xl md:text-4xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
                      Explore our latest moves
                    </motion.p>
                    <Link to="/lookbook">
                      <button className="px-4 py-2 backdrop-blur-sm border bg-zinc-800/10 border-zinc-500/20 text-white mx-auto text-center rounded-full relative mt-4">
                        <span>View gallery now →</span>
                        <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-zinc-400 to-transparent" />
                      </button>
                    </Link>
                  </motion.div>
                </ImagesSlider>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <footer className="w-full bg-black text-neutral-400 text-center py-8 border-t border-zinc-800">
        <nav className="mb-4">
          <ul className="flex justify-center items-center space-x-4 md:space-x-6 text-sm">
            <li>
              <Link to="/" className="hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li><span className="text-zinc-600">|</span></li>
            <li>
              <Link to="/shop" className="hover:text-white transition-colors">
                Shop
              </Link>
            </li>
             <li><span className="text-zinc-600">|</span></li>
            <li>
              <Link to="/lookbook" className="hover:text-white transition-colors">
                Gallery
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex justify-center items-center mt-4">
          <p className="text-xs">&copy; 2020 - {currentYear} Nightie Studio. All Rights Reserved.</p>
          <a href="https://www.instagram.com/nightiestudio/" target="_blank" rel="noreferrer" className="ml-4">
            <InstagramIcon className="w-5 h-5 hover:text-white transition-colors" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;