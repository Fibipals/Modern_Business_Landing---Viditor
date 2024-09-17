"use client"

import React, { useState } from 'react'
import { BiMinus } from 'react-icons/bi'
import { FiMinus, FiPlus } from 'react-icons/fi'

interface FaqCardProps{
    number: string
    question: string
    answer: string
}

const FaqCard = ({number, question, answer}:FaqCardProps) => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <div className={`p-4 md:p-6 ${isOpen ? 'bg-blue-950 rounded-xl' : ''}`}>
      <div className='flex flex-row justify-between items-center mb-2'>
        <div className='w-64 lg:w-72'>
            <p className='mb-2 text-slogan'>{number}</p>
            <h3 className='mb-2'>{question}</h3>
        </div>
        <div onClick={() => setIsOpen(!isOpen)} className='w-8 h-8 flex-center ml-4 md:ml-8 rounded-full bg-radial-blue-gradient ring-1 ring-blue-950 ring-offset-1 ring-offset-slate-950 cursor-pointer'>
            {isOpen ? <FiMinus className='w-6 h-6'/> : <FiPlus className='w-6 h-6'/>}
        </div>
      </div>
      {isOpen && (<p className='p-sm'>{answer}</p>)}
    </div>
  )
}

export default FaqCard
