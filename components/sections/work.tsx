import React from 'react'
import WorkCard from '../workCard'

const Work = () => {
  return (
    <section className='flex flex-col items-start justify-start gap-8'>
        <div className='flex flex-col gap-2'>
            <h2 className='text-xs uppercase text-muted-foreground/75 font-light tracking-wider'>Work</h2>
            <p className="text-base text-muted-foreground">Below are some selected projects (as short-stories), full walk-throughs on calls.</p>
        </div>
        <div className='grid grid-cols-1 gap-8'>
            <WorkCard/>
            <WorkCard/>
            <WorkCard/>
            <WorkCard/>
        </div>
    </section>
  )
}

export default Work