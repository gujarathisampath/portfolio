import React from 'react'
import WorkCard from '../workCard'
import Link from 'next/link';
import projects from "@/data/projects.json";

interface workCardProps {
  key: string;
  title:string;
  image:string;
  readingTime:string;
  url: string;
}

const workCardData: workCardProps[] = projects

const Work = () => {
  return (
    <section className='flex flex-col items-start justify-start gap-8'>
        <div className='flex flex-col gap-2'>
            <h2 className='text-xs uppercase text-muted-foreground/75 font-light tracking-wider'>Work</h2>
            <p className="text-base text-muted-foreground">Below are some selected projects (as short-stories), full walk-throughs on calls.</p>
        </div>
        <div className='grid grid-cols-1 gap-8'>
            {
              workCardData.map((item)=>(
                <WorkCard
                  key={item.key}
                  title={item.title}
                  image={item.image}
                  readingTime={item.readingTime}
                  url={item.url}
                />
              ))
            }
        </div>
        <div>
          <p className='text-sm text-muted-foreground'>More projects on <Link href={"https://github.com/gujarathisampath?tab=repositories"} target='_blank' className='text-primary hover:text-muted-foreground transition-all'>Github</Link></p>
        </div>
    </section>
  )
}

export default Work