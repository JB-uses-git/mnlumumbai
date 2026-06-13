import React from 'react'
import { useNavigate } from 'react-router-dom'
import HeroSection from './ui/hero-section'
import AnimatedHero from './ui/AnimatedHero'

const Hero = () => {
  const navigate = useNavigate()

  const heroData = {
    title: (
      <div className="flex justify-center lg:justify-start">
        <AnimatedHero text="" words={['Empowering Future Jurists', 'Advancing Legal Research', 'Shaping Policy Discourse']} interval={2500} />
      </div>
    ),
    subtitle: 'Centre for Advanced Legal Studies, Training and Research (CALSTAR) at MNLU Mumbai.',
    actions: [
      {
        text: 'Submit to Blog',
        onClick: () => navigate('/submissions'),
        variant: 'default',
        className: 'bg-primary hover:bg-primary/95 text-white font-medium px-8 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg'
      },
      {
        text: 'About CALSTAR',
        onClick: () => {
          const element = document.getElementById('about')
          if (element) element.scrollIntoView({ behavior: 'smooth' })
        },
        variant: 'outline',
        className: 'border-primary text-primary hover:bg-primary/5 font-medium px-8 py-3 rounded-full transition-all duration-300'
      }
    ],
    stats: [],
  };

  return (
    <div className="w-full bg-background" id="home">
      <HeroSection
        title={heroData.title}
        subtitle={heroData.subtitle}
        actions={heroData.actions}
        stats={heroData.stats}
      />
    </div>
  )
}

export default Hero

