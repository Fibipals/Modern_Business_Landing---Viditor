import React from 'react'
import { IconType } from 'react-icons'
import Icon from './icon'

interface FeatureProps{
    icon: IconType
    name: string
}

const Feature = ({icon: FeatureIcon, name}:FeatureProps) => {
  return (
    <div className='w-32 p-4 flex-center flex-col'>
      <Icon icon={FeatureIcon} />
      <p className='mt-4 uppercase text-xs text-center text-slate-300'>{name}</p>
    </div>
  )
}

export default Feature
