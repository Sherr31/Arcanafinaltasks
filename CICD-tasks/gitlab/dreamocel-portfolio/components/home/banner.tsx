'use client'

import {ArrowDownCircleIcon, icons} from "lucide-react";
import Image from "next/image";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import {cn} from "@/lib/utils";

interface Social {
  url: string
  image?: string
  name: string
  class?: string
  icon?: string
  showMiniIcon?: boolean
}

export default function Banner() {
  const socials: Social[] = [
    {
      image: '/social/liquipedia.png',
      name: 'Liquipedia',
      url: 'https://liquipedia.net/dota2/Dreamocel',
    },
    {
      image: '/social/d2pt.png',
      name: 'Dota 2 Pro Tracker',
      url: 'https://www.dota2protracker.com/player/Dreamocel',
      class: 'h-4'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/randymsapoetra',
      icon: 'Instagram',
    },
    {
      name: 'Twitch',
      url: 'https://www.twitch.tv/dreamocel',
      icon: 'Twitch',
    },
    {
      name: 'Youtube',
      url: 'https://www.youtube.com/@Dreamocell',
      icon: 'Youtube',
    },
    {
      name: 'Saweria',
      url: 'https://saweria.co/Dreamocel',
      icon: 'Wallet',
    },
    {
      name: 'GET YOUR OFFICIAL MERCH. NOW!',
      url: 'https://www.tokopedia.com/lucentstore',
      icon: 'ShoppingCart',
      showMiniIcon: true,
    },
  ]

  const Icon = ({name, color, size}: any) => {
    // @ts-ignore
    const LucideIcon = icons[name];

    return <LucideIcon color={color} size={size}/>;
  };

  const scrollPage = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    })
  }

  return (
    <section
      className="h-screen w-full relative flex justify-center items-center overflow-hidden bg-banner bg-cover z-50">
      <Image src="/dreamocel.png" loading="eager" alt="Dreamocel" width={479} height={637} className="absolute bottom-0 z-30 pointer-events-none w-auto h-[480px] sm:h-[520px] 2xl:h-[620px] 3xl:h-[900px]"/>

      <div className="absolute left-1/2 -translate-x-1/2 bottom-20 flex justify-center mt-14 z-30">
        <div className="relative flex justify-center items-center cursor-pointer animate-bounce" onClick={scrollPage}>
          <ArrowDownCircleIcon className="w-12 h-12 intro-y"/>
        </div>
      </div>

      <div className="flex items-center gap-3 mt-6 text-white absolute top-10">
        {socials.map((social, key) => {
          return <TooltipProvider delayDuration={0} key={key}>
            <Tooltip>
              <TooltipTrigger asChild={true}>
                <a href={social.url} target="_blank" aria-label={social.name}>
                  {
                    social.image ?
                      <Image
                        sizes="100vw"
                        width={0} height={32} src={social.image} alt={social.name}
                        className={cn([
                          'w-auto',
                          social.class ? social.class : 'h-6'
                        ])}
                      /> : ''
                  }
                  {
                    social.icon ?
                      <Icon name={social.icon}/> : ''
                  }
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p className="flex items-center">
                  {
                    social.showMiniIcon ?
                      <Image src="/emote/pog.webp" alt="" width={16} height={16} className="w-4 h-4 mr-1 sm:mr-2"/> : null
                  }
                  {social.name}
                  {
                    social.showMiniIcon ?
                      <Image src="/emote/pog.webp" alt="" width={16} height={16} className="w-4 h-4 ml-1 sm:ml-2"/> : null
                  }
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        })}
      </div>

      <div
        className="text-white flex flex-col z-10 absolute bottom-[460px] 2xl:bottom-[550px] 3xl:bottom-[820px] items-center">
        <p className="text-center text-2xl xl:text-3xl 2xl:text-5xl font-medium banner-name">Randy Muhammad Sapoetra</p>
        <h1
          className="banner-text text-5xl sm:text-[150px] 2xl:text-[190px] font-black tracking-wider sm:-ml-2.5 flex items-center">
          DREAMOCEL
        </h1>
      </div>
    </section>
  )
}
