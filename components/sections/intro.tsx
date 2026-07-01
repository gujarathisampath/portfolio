"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { Button } from '../ui/button'

const Intro = () => {
    const [open, setOpen] = useState(false);
    const [pos, setPos] = useState({ x: 0, y: 0 });
  return (
    <section className='flex flex-col items-start justify-start mt-15 gap-6'>
        <div className='flex flex-col justify-start items-start gap-4'>
            <div className="relative">
                <Image
                    src="/profile.jpg"
                    alt="Profile"
                    width={56}
                    height={56}
                    className="rounded-xl object-cover"
                    loading='eager'
                />
                        <div className="absolute -bottom-1   -right-1 h-4 w-4 rounded-full bg-linear-to-b from-[#4EF08C] via-[#20D46B] to-[#119A4C] border-3 border-background cursor-none"
                            onMouseEnter={() => setOpen(true)}
                            onMouseLeave={() => setOpen(false)}
                            onMouseMove={(e) =>
                                setPos({
                                x: e.clientX,
                                y: e.clientY,
                                })
                            }>
                            <div className="h-full w-full rounded-full bg-linear-to-b from-[#2FE173] to-[#18B75A]" />
                        </div>
                        {open && (
                            <div
                                className="fixed left-0 top-0 z-50 pointer-events-none rounded-full border items-center bg-popover/5 backdrop-blur-sm px-2 py-1 text-xs shadow-lg transition-transform duration-75"
                                style={{
                                transform: `translate(${pos.x}px, ${pos.y}px) translate(-50%, -50%)`,
                                }}
                            >
                                <div className="absolute top-1 left-1 h-3.5 w-3.5 rounded-full bg-linear-to-b from-[#4EF08C] via-[#20D46B] to-[#119A4C] border-3 border-background">
                                    <div className="h-full w-full rounded-full bg-linear-to-b from-[#2FE173] to-[#18B75A]" />
                                </div>
                                <span className='ml-3 uppercase'>Available for work</span>
                            </div>
                        )}
            </div>
            <div>
                <h1 className='text-base text-primary'>Sampath Gujarathi</h1>
                <p className="text-base text-muted-foreground">Full Stack Engineer</p>
            </div>
        </div>
        <div className='flex flex-col justify-start items-start gap-4'>
            <p className='text-base text-muted-foreground'>
                I enjoy building <span className='text-primary'>full-stack applications</span>, experimenting with 
                <span className='text-primary'> self-hosted infrastructure</span>, and learning something new every day.
            </p>
        </div>
        <div className='flex gap-2'>
            <Button className='rounded-full font-normal'>
                Say hi
            </Button>
            <Button className='rounded-full font-normal' variant={"outline"}>
                Resume
            </Button>
        </div>
    </section>
  )
}

export default Intro