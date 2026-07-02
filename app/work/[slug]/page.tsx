import { ChartNoAxesGanttIcon, Clock, LucideCornerDownLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import projects from '@/data/projects.json'
import { Metadata, Viewport } from 'next';
import RenderBlock from '@/components/RenderBlock';
import Footer from '@/components/sections/footer';

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.url,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const project = projects.find((p) => p.url === slug);

   if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found.",
    };
  }
  const url = `https://sampath.me/work/${project.url}`;
  return {
    title: project.title,
    description: `Read about ${project.title} by Sampath Gujarathi.`,
    alternates: {
      canonical: url,
    },
    icons: {
      icon: "/logo.png",
    },
    openGraph: {
      title: project.title,
      description:
        `Read about ${project.title} by Sampath Gujarathi.`,
      siteName: "Sampath Gujarathi",
      type: "article",
      url: `https://sampath.me/work/${project.url}`,
      images: [
        {
          url: project.image,
          width: 608,
          height: 395.19,
          alt: project.title,
        },
      ],
      
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description:
        `Read about ${project.title} by Sampath Gujarathi.`,
      images: [project.image],
    },
  };
}

export async function generateViewport({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Viewport> {
  const { slug } = await params;

  const project = projects.find((p) => p.url === slug);

  return {
    themeColor: project?.themeColor ?? "#000000",
  };
}

export async function page({params} : {params: Promise<{ slug: string }>}){
    const { slug } = await params;
    const project = projects.find((p) => p.url === slug);
  return (
    <div className='flex flex-col items-start justify-start w-full gap-6'>
        <div>
          <Link href={"/"} className='inline-flex items-center text-xs font-light uppercase text-muted-foreground gap-1 hover:text-primary transition-all'>
                <LucideCornerDownLeft className='h-3 w-3' />
                back
          </Link>
        </div>
        <div className='flex items-center justify-between w-full'>
            <div>
              <p className='text-sm text-muted-foreground font-light uppercase'>{project?.date}</p>
            </div>
            <div className='flex items-center justify-right gap-3'>
              <p className='inline-flex items-center text-sm text-muted-foreground font-light gap-1 lowercase'>
                  <ChartNoAxesGanttIcon className='h-4 w-4'/>
                  {project?.words} words
              </p>
              <p className='inline-flex items-center text-sm text-muted-foreground font-light gap-1 lowercase'>
                  <Clock className='h-4 w-4'/>
                  {project?.readingTime}
              </p>
            </div>
        </div>
        <div className='space-y-5'>
          <h1 className='text-primary text-4xl font-medium'>{project?.title}</h1>
          {project && project.blocks && (
            project.blocks.map((block, key)=>(
              <RenderBlock block={block} key={key}/>
            ))
          )}
        </div>
        <Footer className="mt-9"/>
    </div>
  )
}

export default page