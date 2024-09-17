import React from 'react'
import Logo from '../logo'
import Icon from '../icon'
import { FaApple, FaGlobe, FaGooglePlay, FaWindows } from 'react-icons/fa'
import Image from 'next/image'
import Brand from '../brandList'

const Download = () => {
  return (
    <div className='flex flex-col p-8 lg:p-16 mt-24 md:mt-0 overflow-x-hidden 2xl:overflow-x-visible' id="download">
      <div className='relative flex flex-col md:flex-row items-center mb-96 md:mb-0 md:h-[550px]'>
        <div className='w-72 flex flex-col gap-8 mb-36 md:mb-0'>
          <Logo size='lg'/>
          <p className='p'>Try it now for free on iOS, Android, PC, and Web. Choose your platform and get started today!</p>
          <div className='flex flex-row justify-between'>
            <Icon icon={FaApple} link='#'/>
            <Icon icon={FaGooglePlay} link='#'/>
            <Icon icon={FaWindows} link='#'/>
            <Icon icon={FaGlobe} link='#'/>
          </div>
        </div>
        <div className='absolute left-4 top-72 md:top-auto md:left-1/2 w-[800px] rounded-3xl overflow-hidden border-2 border-black ring-1 ring-sky-950 ring-offset-[24px] ring-offset-slate-950'>
          <Image src="/download.png" alt='Interface' width={800} height={420}/>
        </div>
      </div>
      <Brand />
    </div>
  )
}

export default Download
