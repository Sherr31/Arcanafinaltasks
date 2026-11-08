'use client'

import Banner from "@/components/home/banner";
import TeamExperience from "@/components/home/team-experience";
import Achievement from "@/components/home/achievement";
import Footer from "@/components/home/footer";
import BackToTop from "@/components/home/back-to-top";
import Trivia from "@/components/home/trivia";
import JoinDiscord from "@/components/home/join-discord";
import YoutubeContent from "@/components/home/youtube-content";
import SignatureHero from "@/components/home/signature-hero";
import Moment from "@/components/home/moment";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner/>
      <Image src="/bg-2.jpg" alt="" unoptimized={true} width={1920} height={1070} className="absolute w-full mt-[-350px]"/>
      <TeamExperience/>
      <Achievement/>
      <SignatureHero/>
      <YoutubeContent/>
      <Moment/>
      <Trivia/>
      <JoinDiscord/>
      <Footer/>
      <Image src="/bg-2.jpg" alt="" unoptimized={true} width={1920} height={1070} className="absolute bottom-0 -scale-y-100 h-[500px] w-full object-cover object-bottom -z-10"/>
      <BackToTop/>
    </div>
  )
}
