import React from 'react'
import { IconType } from 'react-icons'
import Button from './button'
import Icon from './icon'

interface CardProps{
    icon: IconType
    slogan: string
    heading: string
    text: string
    buttonIcon: IconType
    buttonText: string
}

const FeatureCard = ({icon: FeatureIcon, slogan, heading, text, buttonIcon: ButtonIcon, buttonText}: CardProps) => {
  return (
    <div>
      <div>
        <div className='hidden md:block w-[2px] h-16 ml-24 bg-blue-900'/>
        <div className='flex flex-row md:ml-16'>
            <div className='w-12 h-[2px] mt-8 md:hidden bg-blue-900'/>
            <Icon icon={FeatureIcon} size="lg" />
        </div>
      </div>
      <div className='flex flex-col gap-2 p-8 pt-6 md:px-16 md:py-10'>
        <p className='text-slogan'>{slogan}</p>
        <h2 className='h2'>{heading}</h2>
        <p className='p mb-8'>{text}</p>
        <Button text={buttonText} icon={ButtonIcon} link="#" />
      </div>
    </div>
  )
}

export default FeatureCard
