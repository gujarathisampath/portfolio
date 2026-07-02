import React from 'react'
import WorkCard from '../workCard'
import Link from 'next/link';

interface workCardProps {
  key: string;
  title:string;
  image:string;
  duration:string;
}

const workCardData: workCardProps[] = [
  {
    key: "1",
    title: "AspireFit- A gym management CRM and mobile application.",
    image: "/assets/AspireFit.png",
    duration: "2 M"
  },
  {
    key: "2",
    title: "DisBots- A discovery and promotion platform for Discord bots.",
    image: "/assets/DisBots.png",
    duration: "2 M"
  },
  {
    key:"3",
    title:"How I built my first discord bot",
    image:"/assets/Enron.png",
    duration:"1 M"
  }
]

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
                  duration={item.duration}
                />
              ))
            }
        </div>
        <div>
          <p className='text-sm text-muted-foreground'>More projects on <Link href={"https://github.com/gujarathisampath?tab=repositories"} target='_blank' className='text-primary'>Github</Link></p>
        </div>
    </section>
  )
}

export default Work