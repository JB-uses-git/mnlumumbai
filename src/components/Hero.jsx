import React from 'react'
import HeroSection from './ui/hero-section'
import { BookOpen, Users, Gavel } from 'lucide-react'
import AnimatedHero from './ui/AnimatedHero'

const Hero = () => {
  const heroData = {
    title: (
      <div className="flex justify-center lg:justify-start">
        <AnimatedHero words={['Empowering Students', 'Advancing Research', 'Shaping Discourse']} interval={2500} />
      </div>
    ),
    subtitle: 'Centre for Advanced Legal Studies, Training and Research (CALSTAR) at MNLU Mumbai.',
    actions: [
      {
        text: 'Explore Research',
        onClick: () => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' }),
        variant: 'default',
      },
      {
        text: 'Our Vision',
        onClick: () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }),
        variant: 'outline',
      },
    ],
    // User requested to remove the specific stats "5+ Research Areas...", so we can either provide empty or better ones.
    // The design looks better with stats, so let's use relevant generic icons or hide them if preferred.
    // I'll comment them out to respect "remove this" explicitly.
    stats: [],
    images: [
      'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=2000', // Law library / Abstract
      'https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=2000', // Students
      'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=2000', // Handshake/Collaboration
    ],
  };

  return (
    <div className="w-full bg-background" id="home">
      <HeroSection
        title={heroData.title}
        subtitle={heroData.subtitle}
        actions={heroData.actions}
        stats={heroData.stats}
        images={heroData.images}
      />
    </div>
  )
}

export default Hero

