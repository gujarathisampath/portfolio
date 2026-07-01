import React from 'react'
import ExperienceCard from '../experienceCard'

const Experience = () => {
  return (
    <section className='flex flex-col items-start justify-start gap-8'>
        <div className='flex flex-col gap-2'>
            <h2 className='text-xs uppercase text-muted-foreground/75 font-light tracking-wider'>EXPERIENCES</h2>
            <p className="text-base text-muted-foreground">A snapshot of my journey, building software, exploring new technologies, and turning ideas into real products.</p>
        </div>
        <div className='grid grid-cols-1 gap-8'>
            <ExperienceCard/>
        </div>
    </section>
  )
}

export default Experience