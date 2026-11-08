import Image from "next/image";
import {TeamExperienceType} from "@/lib/interfaces/team";

export default function TeamExperienceItem({experience}: { experience: TeamExperienceType }) {
  return (
    <div className="team">
      <div className="team-wrapper">
        <Image
          src={experience.logo}
          width={0}
          height={240}
          sizes="100vw"
          alt={experience.team}
          className="cover-image"
        />
        <div className="shiny"></div>
      </div>
      <div className="team-name text-center">
        <p>{experience.team}</p>
        <p>{experience.year}</p>
      </div>
      <Image
        src={experience.photo}
        height={300}
        width={200}
        alt={`${experience.team} - Dreamocel`}
        className="model"
      />
    </div>
  )
}
