import { AspireDevIcon } from '@/assets/icons/icons'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface ExperienceCardProps {
  title: string;
  location: string;
  description: string;
  startDate: string;
  endDate?: string;
  companyName: string;
  companyIcon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  companyUrl: string;
}

const ExperienceCard = ({title, location, description, startDate, endDate, companyName, companyUrl, companyIcon: CompanyIcon,}: ExperienceCardProps) => {
  return (
    <div className="grid grid-cols-3 gap-6 items-baseline">
        <p className="text-xs uppercase tracking-wider text-muted-foreground">
            {startDate} - {endDate || "Present"}
        </p>

        <div className="col-span-2">
            <h3 className="text-base font-medium text-primary inline-flex items-center">
            {title} at
            <Link href={companyUrl} className='inline-flex items-center ml-1.5'>
              <CompanyIcon className='h-5 w-5 mr-1.5 rounded-xs'/> {companyName}
            </Link>
            </h3>
            <p className="mt-1 text-base text-muted-foreground">
            {description}
            </p>
        </div>
    </div>
  )
}

export default ExperienceCard