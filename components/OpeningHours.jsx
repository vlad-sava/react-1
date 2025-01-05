import React from 'react'
import Badge from './Badge'
import Separator from './Separator'
import Image from "next/image"

const OpeningHours = () => {
  return (
    <section>
        {/* 1 */}
        <div className="hidden relative xl:flex flex-1 justify-center items-center">
            {/* overlay */}
            <div className="w-full h-full absolute z-40 top-0 bg-black/60"></div>
            <Image
            src="/assets/opening-hours/img.png"
            fill
            alt=""
            quality={100}
            priority
            className="object-cover"
            />
            <Badge containerStyles="w-[320px] h-[320px] absolute z-40" />
        </div>
        {/* 2 */}
        <div className="flex-1 bg-opening_hours bg-cover bg-no-repeat flex flex-col
        justify-center items-center relative">
            {/* overlay */}
            <div className="w-full h-full absolute top-0 bg-black/[0.85] z-10"></div>
            {/* text & images */}
            <div className="z-20 flex flex-col items-center justify-normal">
                <h2 className="h2 text-white mb-4">Opening Hours</h2>
                <Separator bg="accent" />
                <div className="mt-12 relative w-[300px] h-[220px] xl:w-[470px] xl:h-[280px]">
                    <Image
                    src="/assets/opening-hours/program-badge.svg"
                    fill
                    className="object-contain"
                    quality={100}
                    priority
                    alt=""
                    />
                </div>
            </div>

        </div>
      
    </section>
  )
}

export default OpeningHours
