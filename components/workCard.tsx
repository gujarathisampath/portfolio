import { Clock } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

interface workCardProps {
    title?:string;
    image?:string;
    duration?:string;
}

const WorkCard = ({title,image,duration}:workCardProps) => {
  return (
    <Link href={"/"}>
        <div className='flex flex-col w-full gap-2'>
            <Image 
                src={"/image.png"}
                alt={"project"}
                width={608}
                height={349.59}
                loading='eager'
                className='w-full h-auto object-cover'
            />
            <div className='flex items-center justify-between'>
                <p className='text-base text-primary'>How I helped Bolo AI raise $8M in the Seed Round</p>
                <p className='text-base text-muted-foreground inline-flex gap-2 items-center'>
                    <Clock className='w-4 h-4'/>
                    1 M
                </p>
            </div>
        </div>
    </Link>
  )
}

export default WorkCard