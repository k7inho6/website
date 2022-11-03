import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { BsFillMoonFill, BsFillSunFill, BsGithub, ImGithub} from 'react-icons/bs';
import { useState } from 'react';

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
        <section className="h-screen">
          <nav className="shadow-xl bg-stone-200 text-xl py-10 px-20 dark:text-white dark:bg-stone-800">
            <div className="flex max-w-2xl justify-between mx-auto">
              <h1 className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-green-500 font-bold">Feelsgladman</h1>
              <ul className="flex items-center gap-5">
                <li>
                  <button onClick={() => setDarkMode(!darkMode)} className="cursor-pointer">
                    <BsFillMoonFill size='1.5em'/>
                  </button>
                </li>
                <li>
                  <a href="https://github.com/k7inho6" target="_blank"><BsGithub size='2em'/></a>
                </li>
              </ul>
            </div>
          </nav>

          <div className="max-w-2xl flex-column content-center items-center mx-auto">
            <p className="text-black text-md font-bold text-4xl pt-20 pb-5 dark:text-gray-200">
              Hello, i'm Ian and this is my personal website. 
            </p>
            <p className="text-black dark:text-gray-200">
              My hobbies are basically
              playing my favorite games (which vary from time to time), reading manga, 
              watching series/anime and wandering away on the multiple internet social media 
              applications.
            </p>
            <p className="text-black pt-5 font-bold text-2xl dark:text-gray-200 mb-5">
              Games i'm playing or currently have interest on:
            </p>
          </div>

          <div className="grid grid-cols-2 max-w-2xl mx-auto gap-5">
              <div className="hover:bg-gray-200 max-w-sm text-black outline outline-1 outline-gray-500 dark:text-gray-200 dark:outline-gray-200 dark:hover:bg-gray-800">
                <a href="/home/ian/repos/cs50-homepage/react-homepage/pages/loa.js"className="w-100 h-100  text-black dark:text-gray-200" target="_blank">
                  <div className="font-bold pl-2 pt-2">Lost Ark</div>
                  <div className="pl-2 pt-2 pb-2 pr-2">The recently launched global version of a big Korean MMORPG</div>
                </a>
              </div>
              <div className="hover:bg-gray-200 max-w-sm text-black outline outline-1 outline-gray-500 dark:text-gray-200 dark:outline-gray-200 dark:hover:bg-gray-800">
                <a className="w-100 h-100  text-black dark:text-gray-200" href="https://github.com" target="_blank">
                  <div className="font-bold pl-2 pt-2">Overwatch 2</div>
                  <div className="pl-2 pt-2 pb-2 pr-2">Updated version of the Blizzard's famous chaotic skill set based
                     FPS (still basically the same game tho)
                  </div>
                </a>
              </div>
              <div className="hover:bg-gray-200 max-w-sm text-black outline outline-1 outline-gray-500 dark:text-gray-200 dark:outline-gray-200 dark:hover:bg-gray-800">
                <a className="w-100 h-100  text-black dark:text-gray-200" href="https://github.com" target="_blank">
                  <div className="font-bold pl-2 pt-2">MapleStory</div>
                  <div className="pl-2 pt-2 pb-2 pr-2">Very old global version of another
                    big Korean MMORPG with 2D graphics
                  </div>
                </a>
              </div>
              <div className="hover:bg-gray-200 max-w-sm text-black outline outline-1 outline-gray-500 dark:text-gray-200 dark:outline-gray-200 dark:hover:bg-gray-800">
                <a className="w-100 h-100  text-black dark:text-gray-200" href="https://github.com" target="_blank">
                  <div className="font-bold pl-2 pt-2">Guardian Tales</div>
                  <div className="pl-2 pt-2 pb-2 pr-2">Probably my favorite gacha game, quite known with pixelized 2D
                  style (global version)
                  </div>
                </a>
              </div>
          </div>  

          <div className="max-w-2xl flex-column content-center items-center mx-auto">
            <p className="text-black pt-5 font-bold text-2xl dark:text-gray-200 mb-5">
                Some of my favorite manga:
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}


