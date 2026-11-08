'use client'

import {TwitchIcon, YoutubeIcon} from 'lucide-react'
import Atropos from "atropos/react";

export default function JoinDiscord() {
  return (
    <section className="relative flex flex-col justify-center items-center xl:pt-16 pt-12 xl:pb-16 pb-12">
      <h2 className="text-3xl sm:text-5xl font-bold mb-8 flex items-center tracking-wider">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127.14 96.36" className="w-auto h-8 sm:w-10 sm:h-10 mr-4">
          <path className="cls-1" fill="#ffffff"
                d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"/>
        </svg>
        Community
      </h2>

      <div className="container flex flex-col items-center text-2xl">
        <p className="tracking-wide space-x-1 text-center">
          <span>Join</span>
          <span className="font-bold">DreamocelDotes Discord</span> by
          <span className="italic font-semibold">subscribing to Twitch</span> or join
          <span className="italic font-semibold">Youtube Member</span>
        </p>

        <div className="flex gap-8 mt-6">
          <Atropos
            rotateTouch={false}
            className="atropos-default"
          >
            <a href="https://www.twitch.tv/dreamocel" target="_blank"
               className="p-10 w-full sm:min-w-[260px] max-w-full custom-shadow rounded-3xl flex flex-col items-center bg-[#5A3E85]">
              <TwitchIcon className="h-10 w-10 sm:h-20 sm:w-20 mb-2"/>
              <p className="font-bold">Twitch</p>
            </a>
          </Atropos>
          <Atropos
            rotateTouch={false}
            className="atropos-default"
          >
            <a href="https://www.youtube.com/@Dreamocell" target="_blank"
               className="p-10 w-full sm:min-w-[260px] max-w-full custom-shadow rounded-3xl flex flex-col items-center bg-[#BA393B]">
              <YoutubeIcon className="h-10 w-10 sm:h-20 sm:w-20 mb-2"/>
              <p className="font-bold">Youtube</p>
            </a>
          </Atropos>
        </div>
      </div>
    </section>
  )
}
