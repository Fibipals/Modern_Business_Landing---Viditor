"use client"

import React, { useEffect, useState } from 'react'
import Logo from '../logo'
import Link from 'next/link'

interface NavbarLinkProps{
  href: string
  currentSection: string
  children: React.ReactNode
}

const NavbarLink = ({href, currentSection, children}:NavbarLinkProps) => {
  const isActive = currentSection === href.substring(1)
  return (
    <Link href={href} className={`hidden md:block font-semibold ${isActive ? 'text-lime-400' : ''}`}>
      {children}
      {isActive && <div className='abolute bottom-[-3px] w-full h-[3px] bg-lime-400 rounded-full'/>}
    </Link>
  )
}

const Navbar = () => {
  const [currentSection, setCurrentSection] = useState('')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['features', 'pricing', 'faq', 'download']
      let current = ""
      sections.forEach((sectionName) => {
        const section = document.getElementById(sectionName)
        if (section){
          const rect = section.getBoundingClientRect();
          if(rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2){
            current = sectionName
          }
        }
      })
      setCurrentSection(current)

      if (window.scrollY > 0){
        setIsScrolled(true)
      }else{
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <div className={`flex justify-between p-8 mx-auto md:w-full max-w-[1024px] md:fixed z-20 transition-all duration-300 rounded-b-3xl ${isScrolled ? 'bg-blue-950' : 'bg-transparent'}`}>
      <NavbarLink href='#features' currentSection={currentSection}>Features</NavbarLink>
      <NavbarLink href='#pricing' currentSection={currentSection}>Pricing</NavbarLink>
      <Logo />
      <NavbarLink href='#faq' currentSection={currentSection}>FAQ</NavbarLink>
      <NavbarLink href='#download' currentSection={currentSection}>Download</NavbarLink>
    </div>
  )
}

export default Navbar
