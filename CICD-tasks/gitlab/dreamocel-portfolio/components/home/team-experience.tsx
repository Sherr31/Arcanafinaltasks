'use client'

import TeamExperienceItem from "@/components/home/team-experience-item";
import {ShieldIcon} from "lucide-react";
import {TeamExperienceType} from "@/lib/interfaces/team";

export default function TeamExperience() {
  const experiences: TeamExperienceType[] = [
    {
      logo: '/team/indonesia.webp',
      photo: '/team/dreamocel-timnas.png',
      team: 'Indonesia National Team',
      year: '2022 - 2023'
    },
    {
      logo: '/team/spawn.png',
      photo: '/team/dreamocel-spawn.png',
      team: 'Spawn',
      year: '2023'
    },
    {
      logo: '/team/ngx.png',
      photo: '/team/dreamocel-ngx.png',
      team: 'Nigma Galaxy (Standin)',
      year: '2022'
    },
    {
      logo: '/team/boom.png',
      photo: '/team/dreamocel-boom.png',
      team: 'Boom Esports',
      year: '2017 - 2021'
    },
  ]

  return (
    <section className="relative flex flex-col justify-center items-center xl:pt-24 pt-16 xl:pb-16 pb-12">
      <h2 className="text-3xl sm:text-5xl font-bold mb-8 sm:mb-14 flex items-center tracking-wider">
        <ShieldIcon className="w-8 h-8 sm:w-10 sm:h-10 mr-4"/>
        Team Experience
      </h2>

      <div className="flex flex-wrap flex-col sm:flex-row justify-center items-center sm:gap-20 gap-8">
          {experiences.map((experience, key) => {
            return <TeamExperienceItem key={key} experience={experience}/>
          })}
      </div>
    </section>
  )
}
