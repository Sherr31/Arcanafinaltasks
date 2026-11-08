'use client'

import {CrosshairIcon} from "lucide-react";

export default function Redemption() {
  return (
    <section className="relative flex flex-col justify-center items-center xl:pt-16 pt-12 xl:pb-16 pb-12">
      <h2 className="text-3xl sm:text-5xl font-bold mb-8 sm:mb-14 flex items-center tracking-wider">
        <CrosshairIcon className="w-8 h-8 sm:w-10 sm:h-10 mr-4"/>
        Redemption Arc
      </h2>

      <div className="container flex justify-center">
        <iframe width="920" height="480" src="https://www.youtube.com/embed/8qVJgZqunwg?si=BzVM5kM5kDYdN8PA"
                title="YouTube video player" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen></iframe>
      </div>
    </section>
  )
}
