import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { BsFillMoonFill, BsFillSunFill, BsGithub } from 'react-icons/bs';
import { IoMoonOutline } from 'react-icons/io5';
import { useState } from 'react';
import Link from 'next/link';
import hlucidsolo from '../public/imgs/achiev_hlucid_solo.jpg';
import hwillsolo from '../public/imgs/achiev_hwill_solo.jpg';
import cgloomsolo from '../public/imgs/achiev_cgloom_solo.jpg';
import vhillasolo from '../public/imgs/achiev_vhilla_solo.png';
import hdarknellsolo from '../public/imgs/achiev_hdarknell_solo.jpg';
import lv275 from '../public/imgs/achiev_lv275.jpg';

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? 'dark': ''}>
      <Head>
        <title>Feelsgladman Homepage</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="dark:bg-stone-900">
        <section className="h-max">
        <nav className="shadow-xl bg-stone-200 text-xl py-10 px-20 dark:text-white dark:bg-stone-800">
            <div className="flex max-w-2xl justify-between mx-auto">
              <h1 className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-green-500 font-bold">Feelsgladman</h1>
              <div className="flex items-center content-center gap-5">
                  <Link href="/" className="hover:text-gray-700 dark:hover:text-gray-200">Home</Link>
                  <button onClick={() => setDarkMode(!darkMode)} className="cursor-pointer">
                    <IoMoonOutline size="30"/>
                  </button>              
                  <a href="https://github.com/k7inho6" target="_blank"><BsGithub size='30'/></a>
              </div>
            </div>
          </nav>

          <div className="max-w-2xl flex-column content-center items-center mx-auto pb-5">
            <p className="text-black text-md font-bold text-4xl pt-20 pb-5 dark:text-gray-200">
              MapleStory
            </p>
            <p className="text-black dark:text-gray-200 text-xl">
              Certainly the MMORPG i spent the MOST time on. I currently don't really play it tho, cause its fouls are too big,
              even tho i like the game a lot. I wouldn't be surprised if you have already played it before, since a LOT of people did
              way back in whatever year it was popular.
            </p>
            <p className="text-black pt-5 font-bold text-2xl dark:text-gray-200 mb-5 pt-10">
              Art
            </p>
            <p className="text-black dark:text-gray-200 text-xl pb-5">
              The best thing about this 2d pixely mushroom game for me is the art. Not just the graphics, but also the OSTs. The story is
              also probably pretty good but i didn't really pay much attention to it lol. The combat also feels good for me, so...
            </p>
            <p className="text-black dark:text-gray-200 text-xl pb-10">Here are some vids that showcase some of MapleStory's combat and by consequence, it's art:</p>
            <p className="text-black dark:text-gray-200 text-ml pb-5">Full footage of an early clear of the most iconic boss in the game:</p>
            <iframe width="600" height="300" src="https://www.youtube.com/embed/cAMVEwpK8vM" title="[Maplestory] GMS Reboot Black Mage CLEAR (DB POV)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <p className="text-black dark:text-gray-200 text-ml pt-10 pb-5">Short bossing showcase of my favorite class with full effects on:</p>
            <iframe width="600" height="300" src="https://www.youtube.com/embed/Pz6yasUjsuI" title="Maplestory Demon Slayer is Beautiful" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <p className="text-black dark:text-gray-200 text-ml pt-10 pb-5">One of my favorite MapleStory old OSTs:</p>
            <iframe width="600" height="300" src="https://www.youtube.com/embed/6uCaEDM-Kf8" title="[MapleStory BGM] Temple of Time" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <p className="text-black dark:text-gray-200 text-ml pt-10 pb-5">One of my favorite MapleStory recent/modern times OSTs:</p>
            <iframe width="600" height="300" src="https://www.youtube.com/embed/u3fisrTnOHI" title="[MapleStory BGM] Seren: Solar Deity - Twilight of Flame" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <p className="text-black pt-5 font-bold text-2xl dark:text-gray-200 mb-5 pt-10">
              Downsides
            </p>
            <p className="text-black dark:text-gray-200 text-xl pb-5"> Imo, some of MapleStory's biggest downsides are:</p>
              <ul className="text-black dark:text-gray-200 text-xl pb-5">
                <li className="pb-3">1. It's very poorly optimized</li>
                <li className="pb-3">2. The RNG involved in the progression systems is... very bad</li>
                <li className="pb-3">3. Progression systems bad</li>
                <li className="pb-3">4. It's super grindy</li>
                <li className="pb-3">5. The regular servers progression is even worse since it's very pay to win</li>
                <li className="pb-3">6. Nexon bad</li>
                <li className="pb-3">7. You can play Lost Ark instead</li>
              </ul>
            <p className="text-black dark:text-gray-200 text-xl pb-5">Basically, i don't recommend this game for anyone, even if you are a MMORPG player.
            Unless... You really like the cute pixels or have a nice group of friends that play with you... Or is just a psycho. I mean, i probably played
            this game more than any other! Also, as i mentioned in the downsides list, the company running it (nexon) is... Not great.
            </p>
            <p className="text-black pt-5 font-bold text-2xl dark:text-gray-200 mb-5 pt-10">
              My own progression
            </p>
            <p className="text-black dark:text-gray-200 text-xl pb-5">If you are familiar with the game and have any interest on my progression/experiences,
            i started playing the global version of MapleStory around year 2013, been playing it on/off (mostly off) since then, and played on the regular servers
            (i played a bit of reboot but stopped quite early due to Lost Ark release). My account has around 7.5k legion, i'm a 275 liberated demon slayer main and
            have solo'd bosses below blackmage level (not like that's much of a feat anymore).
            </p>
            <p className="text-black dark:text-gray-200 text-xl pb-5">
                Oh, and old flag race was the best content in the game. Even tho it was awful. Good times.
            </p>
            <p className="text-black dark:text-gray-200 text-xl pb-5">
                Some of my MapleStory personal screenies:
            </p>
            <p className="text-black dark:text-gray-200 pb-2">Hard Lucid solo</p>
            <Image src={hlucidsolo} alt="hlucidsolo"/>
            <p className="text-black dark:text-gray-200 pt-5 pb-2">Hard Will solo</p>
            <Image src={hwillsolo} alt="hwillsolo"/>
            <p className="text-black dark:text-gray-200 pt-5 pb-2">Chaos Gloom solo</p>
            <Image src={cgloomsolo} alt="cgloomsolo"/>
            <p className="text-black dark:text-gray-200 pt-5 pb-2">Verus Hilla solo</p>
            <Image src={vhillasolo} alt="vhillasolo"/>
            <p className="text-black dark:text-gray-200 pt-5 pb-2">Hard Darknell</p>
            <Image src={hdarknellsolo} alt="hdarknellsolo"/>
            <p className="text-black dark:text-gray-200 pt-5 pb-2">Level 275</p>
            <Image src={lv275} alt="lv275"/>
          </div>
        </section>
      </main>
    </div>
  )
}