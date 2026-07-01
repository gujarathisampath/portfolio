import { MapPin } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <section className='flex flex-col items-center justify-center gap-8 w-full'>
        <div>
            <Link href={"/"}>
                <p className='text-base text-primary'>Sampath Gujarathi</p>
            </Link>
        </div>
        <div className='flex items-center justify-between w-full'>
            <div className='flex items-baseline gap-2'>
                <MapPin className='h-3 w-3 text-muted-foreground'/>
                <p className='text-muted-foreground uppercase font-light text-xs'>
                    Hyderabad, India
                </p>
            </div>
            <div>
                <p className='font-light text-muted-foreground text-xs'>
                    {new Date().getFullYear()}
                </p>
            </div>
        </div>
    </section>
  )
}

export default Footer