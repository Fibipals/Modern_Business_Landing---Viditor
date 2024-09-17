import React from 'react'
import { FaCut, FaRobot, FaVideo } from 'react-icons/fa';
import { GiBrain, GiFilmStrip } from 'react-icons/gi';
import { MdVideoLibrary } from 'react-icons/md';
import { PiRocketLaunchBold } from 'react-icons/pi';
import { SiGithubactions } from 'react-icons/si';
import FeatureCard from '../featureCard';
import Feature from '../feature';

const featureCards = [
  {
    icon: GiBrain,
    slogan: "Automated Editing",
    heading: "Seamless and Smart",
    text: "Our AI-powered editor automatically cuts, trims, and enhances your footage with precision, enabling you to focus on creativity without manual editing hassles.",
    buttonIcon: SiGithubactions,
    buttonText: "See in Action"
  },
  {
    icon: MdVideoLibrary,
    slogan: "Media Library",
    heading: "Unlimited Resources",
    text: "Explore our extensive media library, featuring diverse stock footage, high-quality music tracks, and professional effects to enhance your videos effortlessly.",
    buttonIcon: PiRocketLaunchBold,
    buttonText: "Explore Now"
  }
];

const features = [
  { icon: FaRobot, name: "AI Smart Tools" },
  { icon: FaCut, name: "Precise Trimming" },
  { icon: FaVideo, name: "High-Quality Exports" },
  { icon: GiFilmStrip, name: "Advanced Filters" }
];

const Features = () => {
  return (
    <div className='p-4 pt-28' id='features'>
      <div className='flex flex-col mx-4 lg:mx-16 border-2 border-blue-900 bg-blue-950 rounded-3xl shadow-inner shadow-blue-900'>
        <div className='grid md:grid-cols-2 pt-8 md:pt-0'>
          {featureCards.map((card, index) => (
            <FeatureCard 
            key={index}
            icon={card.icon}
            slogan={card.slogan}
            heading={card.heading}
            text={card.text}
            buttonIcon={card.buttonIcon}
            buttonText={card.buttonText}
            />
          ))}
        </div>
        <div className='grid grid-cols-2 md:grid-cols-4 px-4 md:px-16 py-6 w-full bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950 rounded-3xl ring-2 place-items-center'>
          {features.map((feature, index) => (
            <Feature 
            key={index}
            icon={feature.icon}
            name={feature.name}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Features
