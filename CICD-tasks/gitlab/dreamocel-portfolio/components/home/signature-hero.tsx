'use client'

import {DramaIcon} from "lucide-react";
import Image from "next/image";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";

export default function SignatureHero() {
  return (
    <section className="relative flex flex-col justify-center items-center xl:pt-16 pt-12 xl:pb-16 pb-12">
      <h2 className="text-3xl sm:text-5xl font-bold mb-8 sm:mb-14 flex items-center tracking-wider">
        <DramaIcon className="w-8 h-8 sm:w-14 sm:h-14 mr-4"/>
        Signature Hero
      </h2>

      <div className="container">
        <div className="flex flex-wrap justify-center gap-8">
          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger asChild={true}><Image src="/hero/phantom-lancer.webp" alt="Phantom Lancer" width="145" height="90" className="w-auto h-20 custom-shadow"/></TooltipTrigger>
              <TooltipContent>
                <p>Phantom Lancer</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger asChild={true}><Image src="/hero/riki.webp" alt="Riki" width="145" height="90" className="w-auto h-20 custom-shadow"/></TooltipTrigger>
              <TooltipContent>
                <p>Riki</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger asChild={true}><Image src="/hero/lone-druid.webp" alt="Lone Druid" width="145" height="90" className="w-auto h-20 custom-shadow"/></TooltipTrigger>
              <TooltipContent>
                <p>Lone Druid</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </section>
  )
}
