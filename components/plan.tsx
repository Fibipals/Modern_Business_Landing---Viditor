import React from 'react'
import { IconType } from 'react-icons'
import Icon from './icon'
import { MdCheck } from 'react-icons/md'
import Button from './button'

interface PlanProps{
    icon: IconType
    price: number
    name: string
    slogan: string
    option1: string
    option2: string
    option3: string
    option4: string
    buttonIcon: IconType
    type?: 'limited'
    buttonLink: string
}

interface OptionProps{
    option: string
}

const Option = ({option}:OptionProps) => {
    return(
        <div className='flex flex-row items-center gap-3 p-sm'>
            <MdCheck className='w-6 h-6 p-1 border-[1px] border-slate-900 rounded-md'/>
            {option}
        </div>
    )
}


const Plan = ({icon: MainIcon, price, name, slogan, option1, option2, option3, option4, buttonIcon: ButtonIcon, type, buttonLink }: PlanProps) => {
  return (
    <div className='relative flex flex-col items-center gap-2'>
        <div className='absolute top-[-50px]'>
            <Icon icon={MainIcon} size={type === 'limited' ? "lg" : "sm"} />
        </div>

        <p className={`w-fit text-center text-xs font-semibold uppercase rounded-full border-[1.5px] px-3 py-1 ${type === 'limited' ? 'text-lime-400 border-lime-400 mt-8' : 'text-cyan-500 border-cyan-500 mt-4'}`}>{name}</p>

        <div className='text-5xl font-semibold'>
            {price}
            <span className='p-xs'>/MO</span>
        </div>

        <p className='p'>{slogan}</p>
        <hr className='w-full my-4 border-slate-700'/>
        <div className='flex flex-col gap-6 mb-8'>
            <Option option={option1} />
            <Option option={option2} />
            <Option option={option3} />
            <Option option={option4} />
        </div>

        <Button icon={ButtonIcon} text="Get started" link={buttonLink} />

        {type === 'limited' && (<p className='mt-6 text-xs text-lime-400'>-- Limited time offer --</p>)}
      
    </div>
  )
}

export default Plan
