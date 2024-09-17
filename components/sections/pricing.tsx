"use client"

import React, { useState } from 'react'
import PricingSvg from '../pricingSvg'
import Plan from '../plan'
import { FaPeopleGroup, FaPerson } from 'react-icons/fa6'
import { FaRegCircle, FaRegSquare } from 'react-icons/fa'
import { IoBusiness } from 'react-icons/io5'
import { PiHexagonBold } from 'react-icons/pi'

const Pricing = () => {
  const [plan, setPlan] = useState('month')
  return (
    <div className='px-4 lg:px-16 pt-28 mt-8 relative' id='pricing'>
      <div className='absolute inset-0 z-0'>
        <PricingSvg />
      </div>
      <h2 className='h2 text-center w-80 md:w-96 mx-auto relative z-10'>Flexible pricing <br/> for teams of all sizes</h2>

      <div className='w-80 h-14 grid grid-cols-2 p-1 mx-auto mt-12 mb-24 border-2 border-blue-950 rounded-xl relative z-10'>
        <div className={`flex-center uppercase font-semibold text-xs cursor-pointer ${plan === 'month' ? 'bg-blue-950 shadow-sm shadow-blue-900 rounded-lg text-white' : 'bg-transparent text-slate-600'}`} onClick={() => setPlan('month')}>Monthly</div>
        <div className={`flex-center uppercase font-semibold text-xs cursor-pointer ${plan === 'annual' ? 'bg-blue-950 shadow-sm shadow-blue-900 rounded-lg text-white' : 'bg-transparent text-slate-600'}`} onClick={() => setPlan('annual')}>Annual</div>
      </div>
      <div className='w-fit flex flex-col md:flex-row items-center gap-y-28 mx-auto'>
        <div className='px-12 py-6 md:px-6 lg:px-12 border-2 border-blue-950 rounded-3xl md:border-r-0 md:rounded-r-none z-10'>
          <Plan 
          icon={FaPerson}
          price={plan === 'month' ? 19 : 19*11}
          name='personal'
          slogan="Ideal for solo creators"
          option1="4K export"
          option2="1GB storage"
          option3="Basic tools"
          option4="Community support"
          buttonIcon={FaRegCircle}
          buttonLink={plan === 'month' ? 'https://buy.stripe.com/test_8wMg1Sg8sgai8qQdQQ' : '#'}
          />
        </div>
        <div className='px-12 lg:px-14 py-4 border-2 border-blue-800 bg-blue-950 rounded-3xl z-10'>
          <Plan 
          icon={FaPeopleGroup}
          price={plan === 'month' ? 39 : 39*11}
          name="startup"
          slogan="Perfect for small teams"
          option1='10GB storage'
          option2='Multi-track editing'
          option3='Motion graphics'
          option4='Team projects'
          buttonIcon={FaRegSquare}
          type="limited"
          buttonLink={plan === 'month' ? 'https://buy.stripe.com/test_aEUg1S9K44rAbD27st' : '#'}
          />
        </div>
        <div className='px-12 py-6 md:px-6 lg:px-12 border-2 border-blue-950 rounded-3xl md:border-l-0 md:rounded-l-none z-10'>
          <Plan 
          icon={IoBusiness}
          price={plan === 'month' ? 99 : 99*11}
          name="company"
          slogan="Best for businesses"
          option1='100GB storage'
          option2='Advanced analytics'
          option3='Custom branding'
          option4='24/7 support'
          buttonIcon={PiHexagonBold}
          buttonLink={plan === 'month' ? '#' : '#'}
          />
        </div>
      </div>
    </div>
  )
}

export default Pricing
