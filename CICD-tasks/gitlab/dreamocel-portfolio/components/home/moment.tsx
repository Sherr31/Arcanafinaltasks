'use client'

import {Gamepad2Icon} from "lucide-react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Moment() {
  return (
    <section className="relative flex flex-col justify-center items-center xl:pt-16 pt-12 xl:pb-16 pb-12">
      <h2 className="text-3xl sm:text-5xl font-bold mb-8 sm:mb-14 flex items-center tracking-wider">
        <Gamepad2Icon className="w-8 h-8 sm:w-14 sm:h-14 mr-4"/>
        Best Moment
      </h2>

      <div className="container">
        <Tabs defaultValue="pog" className="w-full flex flex-col items-center">
          <TabsList className="mb-5">
            <TabsTrigger value="pog" className="flex items-center">
              <Image src="/emote/pog.webp" alt="" width={16} height={16} className="w-4 h-4 mr-1 sm:mr-2"/>
              Pog Moment
            </TabsTrigger>
            <TabsTrigger value="funny" className="flex items-center">
              <Image src="/emote/icant.webp" alt="" width={16} height={16} className="w-4 h-4 mr-1 sm:mr-2"/>
              Funny Moment
            </TabsTrigger>
            <TabsTrigger value="redemption" className="flex items-center">
              <Image src="/emote/gigachad.webp" alt="" width={16} height={16} className="w-4 h-4 mr-1 sm:mr-2"/>
              Chad Moment
            </TabsTrigger>
          </TabsList>
          <TabsContent value="pog" className="w-full">
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-12 sm:col-span-6">
                <div className="embed-yt custom-shadow">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/FIreEs8njRQ?si=uOjN4WNpwvmUl3RL"
                          title="YouTube video player"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen></iframe>
                </div>
                <p className="text-center mt-4 font-bold text-xl">Rampage Moment (Nigma Galaxy vs Team Liquid)</p>
              </div>
              <div className="col-span-12 sm:col-span-6">
                <div className="embed-yt custom-shadow">
                  <iframe
                    width="560" height="315" src="https://www.youtube.com/embed/bZAlKerGpcU?si=M3OMJEtttdLt17Jg"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen></iframe>
                </div>
                <p className="text-center mt-4 font-bold text-xl">Legendary PL Juke (Boom vs Fnatic)</p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="funny" className="w-full">
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-12 sm:col-span-4">
                <div className="embed-yt custom-shadow">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/M-jb_YybQRs?si=Gzd0WRx3N01zZ1je"
                          title="YouTube video player"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen></iframe>
                </div>
                <p className="text-center mt-4 font-bold text-xl">When you're not ready for Mediashare</p>
              </div>
              <div className="col-span-12 sm:col-span-4">
                <div className="embed-yt custom-shadow">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/P7QQOAJtkXo?si=CVp5JDc3DAMtz13Y"
                          title="YouTube video player"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen></iframe>
                </div>
                <p className="text-center mt-4 font-bold text-xl">Efficiency Gone Wrong</p>
              </div>
              <div className="col-span-12 sm:col-span-4">
                <div className="embed-yt custom-shadow">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/CGCkKjwWdDo?si=L63FoW4wvVEGdpvS"
                          title="YouTube video player"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen></iframe>
                </div>
                <p className="text-center mt-4 font-bold text-xl">Recalibrate Moment</p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="redemption" className="w-full">
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-12 sm:col-span-8 sm:col-start-3">
                <div className="embed-yt custom-shadow">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/8qVJgZqunwg?si=V5262TmseTSlYuh2"
                          title="YouTube video player"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen></iframe>
                </div>
                <p className="text-center mt-4 font-bold text-xl">Redemption Arc</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
