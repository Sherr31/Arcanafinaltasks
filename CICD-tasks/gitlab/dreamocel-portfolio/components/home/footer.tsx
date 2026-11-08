'use client'

import SocialMedia from "@/components/home/social-media";
import {ArrowUpRightIcon} from 'lucide-react'

export default function Footer() {
  return (
    <div className="xl:pt-16 pt-20 xl:pb-16 pb-12">
      {/*<div className="flex gap-4 mb-6 justify-center">*/}
      {/*  <SocialMedia/>*/}
      {/*</div>*/}
      <div className="container">
      <footer className="relative flex flex-col sm:flex-row justify-between items-center gap-2">
        <div className="flex sm:flex-col gap-2 sm:gap-0">
          Made by
          <a href="https://katsuotz.com" target="_blank" className="text-gray-300 tracking-wide hover:text-white flex items-center hover-border">katsuotz <ArrowUpRightIcon className="w-4 h-4 ml-2" /></a>
        </div>
        <p className="text-gray-300 tracking-wide font-light">&copy; 2023 <a href="https://www.youtube.com/watch?v=17Ge8IyhN3o" target="_blank" className="text-white font-medium hover-border">Dreamocel</a></p>
      </footer>
      </div>
    </div>
  )
}
