'use client'

import {ArrowUpRightIcon, PlayIcon, YoutubeIcon} from "lucide-react";
import Image from "next/image";
import Atropos from "atropos/react";

export default function YoutubeContent() {
  return (
    <section className="relative flex flex-col justify-center items-center xl:pt-16 pt-12 xl:pb-16 pb-12">
      <h2 className="text-3xl sm:text-5xl font-bold mb-8 sm:mb-14 flex items-center tracking-wider">
        <YoutubeIcon className="w-8 h-8 sm:w-14 sm:h-14 mr-4"/>
        Content
      </h2>

      <div className="container">
        <div className="grid grid-cols-12 gap-8">
          <Atropos
            rotateTouch={false}
            className="atropos-default col-span-12 sm:col-span-4 Dgroup/content"
          >
            <a href="https://www.youtube.com/watch?v=hi_zSO8y_2U" target="_blank" className="relative">
              <PlayIcon className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 z-10"/>
              <Image src="/content/content-1.jpg" alt="THIS IS WHAT REAL INDONESIAN IESF TEAM SHOULD LOOK" width="854" height="480" className="rounded-3xl brightness-[80%] blur-[1px] saturate-[75%] group-hover/content:saturate-100 group-hover/content:blur-0  duration-500"/>
            </a>
          </Atropos>
          <Atropos
            rotateTouch={false}
            className="atropos-default col-span-12 sm:col-span-4 group/content"
          >
            <a href="https://www.youtube.com/watch?v=PxZwH2k1tKE" target="_blank" className="relative">
              <PlayIcon className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 z-10"/>
              <Image src="/content/content-2.jpg" alt="Hotel Sanhok Horror Story" width="854" height="480" className="rounded-3xl brightness-[80%] blur-[1px] saturate-[75%] group-hover/content:saturate-100 group-hover/content:blur-0 duration-500"/>
            </a>
          </Atropos>
          <Atropos
            rotateTouch={false}
            className="atropos-default col-span-12 sm:col-span-4"
          >
            <a href="https://www.youtube.com/@Dreamocell/videos" target="_blank" className="">
              <div
                className="absolute left-0 right-0 top-0 bottom-0 z-20 flex flex-col items-center justify-center">
                <ArrowUpRightIcon className="w-20 h-20"/>
                <span className="font-bold text-2xl tracking-wider">More</span>
              </div>
              <Image src="/content/content-3.jpg" alt="Rusman Dreamocel" width="854" height="480" className="rounded-3xl brightness-[80%] blur"/>
            </a>
          </Atropos>
        </div>
      </div>
    </section>
  )
}
