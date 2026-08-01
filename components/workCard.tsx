import { Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface WorkCardProps {
  title: string;
  image: string;
  readingTime: string;
  url: string;
}

const WorkCard = ({ title, image, readingTime, url }: WorkCardProps) => {
  return (
    <Link href={`/work/${url}`} className="block w-full hover:bg-accent/30 py-2 transition-all">
      <div className="flex flex-col gap-3 max-w-2xl px-8 mx-auto">
        <Image
          src={image}
          alt={title}
          width={608}
          height={350}
          className="h-auto w-full object-cover"
          loading="eager"
          priority
        />

        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <h3 className="text-base text-primary">
            {title}
          </h3>

          <div className="inline-flex items-center gap-2 text-base text-muted-foreground md:shrink-0">
            <Clock className="h-4 w-4" />
            <span>{readingTime}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WorkCard;