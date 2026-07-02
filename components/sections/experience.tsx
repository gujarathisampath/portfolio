import React from 'react'
import ExperienceCard from '../experienceCard'
import { AspireDevIcon } from '@/assets/icons/icons';
import experiences from "@/data/experience.json"

interface ExperienceData {
  id: number;
  title: string;
  description: string;
  startDate: string;
  endDate?: string;
  companyName: string;
  companyIcon: string;
  companyUrl: string;
}

const experienceData : ExperienceData[] = experiences

const Experience = () => {
  return (
    <section className='flex flex-col items-start justify-start gap-8'>
        <div className='flex flex-col gap-2'>
            <h2 className='text-xs uppercase text-muted-foreground/75 font-light tracking-wider'>EXPERIENCES</h2>
            <p className="text-base text-muted-foreground">A snapshot of my journey, building software, exploring new technologies, and turning ideas into real products.</p>
        </div>
        <div className='grid grid-cols-1 gap-8'>
            {experienceData.map((experience) => (
                <ExperienceCard
                    key={experience.id}
                    title={experience.title}
                    description={experience.description}
                    startDate={experience.startDate}
                    endDate={experience.endDate}
                    companyName={experience.companyName}
                    companyIcon={experience.companyIcon}
                    companyUrl={experience.companyUrl}
                />
            ))}
        </div>
    </section>
  )
}

export default Experience