'use client'

import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination, Mousewheel} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/mousewheel';
import {ChevronLeftIcon, ChevronRightIcon, TrophyIcon} from "lucide-react";
import AchievementItem from "@/components/home/achievement-item";
import {AchievementType} from "@/lib/interfaces/achievement";
import {useCallback, useRef, useState} from "react";
import {cn} from "@/lib/utils";

export default function Achievement() {
  const experiences: AchievementType[] = [
    {
      logo: '/achievement/iesf-white.png',
      name: 'IESF World Championship',
      year: 2023,
      position: '4th',
      class: 'h-14',
      url: 'https://liquipedia.net/dota2/IESF_World_Championship/2023',
    },
    {
      logo: '/achievement/iesf-white.png',
      name: 'IESF World Championship',
      year: 2022,
      position: '1st',
      class: 'h-14',
      url: 'https://liquipedia.net/dota2/IESF_World_Championship/2022',
    },
    {
      logo: '/achievement/aegis.webp',
      name: 'The International 2021: SEA Qualifier',
      year: 2021,
      position: '3rd',
      url: 'https://liquipedia.net/dota2/The_International/2023/Southeast_Asia',
    },
    {
      logo: '/achievement/bts.png',
      name: 'BTS Pro Series Season 6: SEA',
      year: 2021,
      position: '2nd',
      url: 'https://liquipedia.net/dota2/BTS/Pro_Series/6/Southeast_Asia',
    },
    {
      logo: '/achievement/bts.png',
      name: 'DOTA Summit 13 Online: SEA',
      year: 2020,
      position: '3rd',
      url: 'https://liquipedia.net/dota2/The_Summit/13/Southeast_Asia',
    },
    {
      logo: '/achievement/bts.png',
      name: 'BTS Pro Series Season 3: SEA',
      year: 2020,
      position: '2nd',
      url: 'https://liquipedia.net/dota2/BTS/Pro_Series/3/Southeast_Asia',
    },
    {
      logo: '/achievement/esl-one.png',
      name: 'ESL One Thailand 2020: Asia',
      year: 2020,
      position: '2nd',
      url: 'https://liquipedia.net/dota2/ESL_One/Thailand/2020/Asia',
    },
    {
      logo: '/achievement/bts.png',
      name: 'BTS Pro Series Season 2: SEA',
      year: 2020,
      position: '2nd',
      url: 'https://liquipedia.net/dota2/BTS/Pro_Series/2/Southeast_Asia',
    },
    {
      logo: '/achievement/esl-one.png',
      name: 'ESL One Birmingham Online: SEA',
      year: 2020,
      position: '2nd',
      url: 'https://liquipedia.net/dota2/ESL_One/Birmingham/2020/Online/Southeast_Asia',
    },
    {
      logo: '/achievement/esl.png',
      name: 'ESL SEA Championship 2020',
      year: 2020,
      position: '1st',
      url: 'https://liquipedia.net/dota2/ESL/SEA_Championship/2020',
    },
    {
      logo: '/achievement/predator.png',
      name: 'StarLadder ImbaTV Dota 2 Minor Season 3',
      year: 2020,
      position: '2nd',
      url: 'https://liquipedia.net/dota2/StarLadder_ImbaTV/Minor/Season_3',
    },
    {
      logo: '/achievement/esl.png',
      name: 'ESL Clash of Nations Bangkok',
      year: 2019,
      position: '2nd',
      url: 'https://liquipedia.net/dota2/ESL/Clash_of_Nations/2019',
    },
    {
      logo: '/achievement/esl.png',
      name: 'ESL Indonesia Championship Season 1',
      year: 2019,
      position: '1st',
      url: 'https://liquipedia.net/dota2/ESL/Indonesia_Championship/Season_1',
    },
    {
      logo: '/achievement/predator.png',
      name: 'Asia Pacific Predator League',
      year: 2019,
      position: '2nd',
      url: 'https://liquipedia.net/dota2/Asia_Pacific_Predator_League/2019',
    },
    {
      logo: '/achievement/predator.png',
      name: 'Asia Pacific Predator League',
      year: 2018,
      position: '2nd',
      url: 'https://liquipedia.net/dota2/Asia_Pacific_Predator_League/2018',
    },
  ]

  const sliderRef = useRef(null)

  const [activeIndex, setActiveIndex] = useState(0)
  const [totalSlides, setTotalSlides] = useState(0)

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    //@ts-ignore
    sliderRef.current.swiper.slidePrev()
  }, [])

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return
    //@ts-ignore
    sliderRef.current.swiper.slideNext()
  }, [])

  return (
    <section className="relative flex flex-col justify-center items-center xl:pt-16 pt-12 xl:pb-16 pb-12">
      <h2 className="text-3xl sm:text-5xl font-bold mb-20 sm:mb-24 flex items-center tracking-wider">
        <TrophyIcon className="w-8 h-8 sm:w-10 sm:h-10 mr-4"/>
        Achievement
      </h2>

      <div className="w-full">
        <Swiper
          ref={sliderRef}
          modules={[Pagination, Mousewheel]}
          pagination={{ clickable: true }}
          slidesPerView={'auto'}
          spaceBetween={0}
          mousewheel
          onSlideChange={(e) => {
            setActiveIndex(e.activeIndex)
            setTotalSlides(e.pagination.bullets.length)
          }}
        >
          {experiences.map((achievement, key) => {
            return <SwiperSlide key={key} className={key === 0 ? 'lg:ml-80' : ''}><AchievementItem achievement={achievement}/></SwiperSlide>
          })}
          <button aria-label="Prev Slider" className={
            cn([
              'swiper-arrow prev-arrow',
              activeIndex === 0 && 'disabled',
            ])
          } onClick={handlePrev} >
            <ChevronLeftIcon className="w-7 h-7"/>
          </button>
          <button aria-label="Next Slider" className={
            cn([
              'swiper-arrow next-arrow',
              activeIndex === totalSlides - 1 && 'disabled',
            ])
          } onClick={handleNext} >
            <ChevronRightIcon className="w-7 h-7"/>
          </button>
        </Swiper>
      </div>
    </section>
  )
}
