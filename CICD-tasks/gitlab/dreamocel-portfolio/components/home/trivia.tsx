'use client'

import {ArrowUpRightIcon, PuzzleIcon} from "lucide-react";
import Image from "next/image";

export default function Trivia() {
  return (
    <section className="relative flex flex-col justify-center items-center xl:pt-16 pt-12 xl:pb-16 pb-12">
      <h2 className="text-3xl sm:text-5xl font-bold mb-8 flex items-center tracking-wider">
        <PuzzleIcon className="w-8 h-8 sm:w-10 sm:h-10 mr-4"/>
        Trivia
      </h2>

      <div className="container flex flex-col gap-2 text-xl sm:text-3xl font-medium text-center">
        <div>
          <p>One of the first Indonesian to Subathon with most variety content</p>
          <p className="sm:text-lg text-sm text-slate-400 font-light">Content: Dota 2, Dota Coaching, Gaming Rig Review, Night Talk, IRL Stream, IRL Ghost Hunting, Gym Stream</p>
        </div>
        <p>Reached 11,000 MMR on July 7th, 2022</p>
        <p>Reached 10,000 MMR on March 2nd, 2021</p>
        <p className="flex justify-center items-end">
          Young Matu
          <span className="sm:text-xl text-sm text-slate-400 font-light flex items-center ml-2">
          (<a href="https://www.instagram.com/p/CkiPHn0prIR/" target="_blank" className="flex items-center hover:text-white hover-border">
            Not Self-Proclaimed
            <Image src="/emote/copium.webp" alt="" width={16} height={16} className="w-4 h-4 ml-1"/>
            <ArrowUpRightIcon className="ml-1 w-4 h-4"/>
          </a>)
          </span>
        </p>
      </div>
    </section>
  )
}
