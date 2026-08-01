import WorkCard from '../workCard'
import Link from 'next/link';
import projects from "@/data/projects.json";

const Work = () => {
  return (
    <section className='flex flex-col items-start justify-start gap-6 w-full'>
        <div className='flex flex-col gap-2 max-w-2xl px-8 mx-auto w-full'>
            <h2 className='text-xs uppercase text-muted-foreground/75 font-light tracking-wider'>Work</h2>
            <p className="text-base text-muted-foreground">Below are some selected projects (as short-stories), full walk-throughs on calls.</p>
        </div>
        <div className='flex flex-col items-start justify-start gap-4 w-full'>
            {
              projects.map((item) => (
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
        <div className='max-w-2xl px-8 mx-auto w-full'>
          <p className='text-sm text-muted-foreground'>More projects on <Link href={"https://github.com/gujarathisampath?tab=repositories"} target='_blank' className='text-primary hover:text-muted-foreground transition-all'>Github</Link></p>
        </div>
    </section>
  )
}

export default Work