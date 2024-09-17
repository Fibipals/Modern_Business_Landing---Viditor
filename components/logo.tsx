import React from 'react'
import { GiRobotGolem } from 'react-icons/gi'

interface LogoProps{
    size?: 'sm' | 'lg'
}

const Logo = ({size = 'sm'}:LogoProps) => {
    const iconSize = size === 'lg' ? 'w-9 h-9' : 'w-6 h-6'
    const textSize = size === 'lg' ? 'text-3xl' : 'text-xl'
  return (
    <div className={`flex flex-row items-center gap-2 font-semibold ${textSize}`}>
      <GiRobotGolem className={iconSize}/>
      <span>VIDITOR</span>
    </div>
  )
}

export default Logo
