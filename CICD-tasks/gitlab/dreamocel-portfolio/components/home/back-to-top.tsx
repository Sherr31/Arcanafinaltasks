'use client'

import {ArrowUpSquareIcon} from "lucide-react";
import {useEffect, useState} from "react";

export default function BackToTop() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  const handleShowBackToTop = () => {
    setShowBackToTop(window.pageYOffset > (window.innerHeight / 2))
  }

  useEffect(() => {
    handleShowBackToTop()

    window.addEventListener('scroll', handleShowBackToTop)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <>
      <ArrowUpSquareIcon
        onClick={scrollToTop}
        className={`w-10 h-10 cursor-pointer fixed bottom-20 right-10 z-10 back-to-top transition-all ${showBackToTop ? '' : 'opacity-0 pointer-events-none'}`}
      />
    </>
  )
}
