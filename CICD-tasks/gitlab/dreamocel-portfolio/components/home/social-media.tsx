'use client'

import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import {AtSignIcon, GithubIcon, InstagramIcon, LinkedinIcon} from "lucide-react";

export default function SocialMedia() {

  return (
    <>
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild={true}>
            <a href="https://github.com/katsuotz/" target="_blank">
              <GithubIcon className="w-6 h-6"/>
            </a>
          </TooltipTrigger>
          <TooltipContent>Github</TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild={true}>
            <a href="https://www.linkedin.com/in/irfan-fakhri/" target="_blank">
              <LinkedinIcon className="w-6 h-6"/>
            </a>
          </TooltipTrigger>
          <TooltipContent>LinkedIn</TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild={true}>
            <a href="https://www.instagram.com/katsuotz/" target="_blank">
              <InstagramIcon className="w-6 h-6"/>
            </a>
          </TooltipTrigger>
          <TooltipContent>Instagram</TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild={true}>
            <a href="mailto:m.irfan.fakhri66@gmail.com" target="_blank">
              <AtSignIcon className="w-6 h-6"/>
            </a>
          </TooltipTrigger>
          <TooltipContent>Email</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  )
}
