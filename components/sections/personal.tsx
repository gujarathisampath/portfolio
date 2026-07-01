import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Personal = () => {
  return (
    <section className='flex flex-col items-start justify-start gap-8'>
        <div className='flex flex-col gap-2'>
            <h2 className='text-xs uppercase text-muted-foreground/75 font-light tracking-wider'>When i am not working</h2>
            <p className="text-base text-muted-foreground">I love listening to music, playing games, binging <Link href="https://www.imdb.com/title/tt1632701/" className='text-primary'>Suits</Link>, and collecting songs I'll probably never skip.</p>
        </div>
        <div className='flex bg-card p-3.5 items-center justify-between w-full rounded-[12px]'>
            <div className='flex items-center justify-center gap-4'>
                <Image
                    src={"https://i.scdn.co/image/ab67616d0000aa544806a1c10aa685b1b936158b"}
                    alt="spotify"
                    width={48}
                    height={48}
                    className='rounded-[6px]'
                />
                <div className='flex flex-col items-start justify-center'>
                    <p className='text-base text-primary'>Dracula</p>
                    <p className='text-base text-muted-foreground'>Tame Impala</p>
                </div>
            </div>
            <div>
                <Link href={"https://spotify.com"}>
                    <span className='text-sm text-primary'>Listen on Spotify</span>
                </Link>
            </div>
        </div>
    </section>
  )
}

export default Personal