import Link from "next/link";
import { companyIcons } from "@/assets/icons/icons";

interface ExperienceCardProps {
  title: string;
  description: string;
  startDate: string;
  endDate?: string;
  companyName?: string;
  companyIcon?: string;
  companyUrl?: string;
}

const ExperienceCard = ({
  title,
  description,
  startDate,
  endDate,
  companyName,
  companyUrl,
  companyIcon,
}: ExperienceCardProps) => {
  const Icon = companyIcons[companyIcon as keyof typeof companyIcons];

  return (
    <div className="grid gap-3 md:grid-cols-3 md:gap-6">
      <p className="text-xs uppercase tracking-wider text-muted-foreground md:pt-1">
        {startDate} – {endDate || "Present"}
      </p>

      <div className="md:col-span-2">
        <h3 className="flex flex-wrap items-center text-base font-medium text-primary">
          <span>{title} {
            companyName && (
              <span>at</span>
            )
          }</span>

          {companyName && companyUrl && Icon && (
            <Link
              href={companyUrl}
              className="inline-flex items-center gap-1.5 ml-1.5"
            >
              <Icon className="h-5 w-5 rounded-sm" />
              <span>{companyName}</span>
            </Link>
          )}
        </h3>

        <p className="mt-2 text-base text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ExperienceCard;