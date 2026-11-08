import Image from "next/image";
import {AchievementType} from "@/lib/interfaces/achievement";
import {cn} from "@/lib/utils";
import {ArrowUpRightIcon} from "lucide-react";
import Atropos from "atropos/react";

export default function AchievementItem({achievement}: { achievement: AchievementType }) {
  return (
    <div className="sm:w-[450px] w-screen px-5">
      <Atropos
        rotateTouch={false}
        className="atropos-achievement"
      >
        <a
          href={achievement.url}
          target="_blank"
          className="flex flex-col sm:px-8 px-5 sm:py-5 pt-5 pb-3 rounded-3xl relative text-lg">
          <div className={
            cn([
              'achievement-bg',
              achievement.position === '1st' && 'bg-first',
              achievement.position === '2nd' && 'bg-second',
              achievement.position === '3rd' && 'bg-third',
              achievement.position === '4th' && 'bg-forth',
            ])
          }></div>
          <Image src={achievement.logo} alt="" width={120} height={100} className={
            cn([
              'w-auto mb-1.5 absolute sm:left-8 left-5 -top-2 -translate-y-1/2',
              achievement.class ? achievement.class : 'h-20',
            ])
          }/>
          <p className="mt-5 font-semibold tracking-wider flex items-center">
          <span className={
            cn([
              'w-4 h-4 rounded-full mr-2',
              achievement.position === '1st' && 'bg-[#ffd739]',
              achievement.position === '2nd' && 'bg-[#bebebe]',
              achievement.position === '3rd' && 'bg-[#bb8644]',
              achievement.position === '4th' && 'bg-[#f8996b]',
            ])
          }></span>
            {achievement.position} Position
          </p>
          <p>{achievement.name}</p>
          <p className="font-bold tracking-wider">{achievement.year}</p>
          <ArrowUpRightIcon className="absolute right-5 top-5"/>
        </a>
      </Atropos>
    </div>
  )
}
