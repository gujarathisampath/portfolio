import React from 'react'

const ExperienceCard = () => {
  return (
    <div className="grid grid-cols-3 gap-6 items-baseline">
        <p className="text-xs uppercase tracking-wider text-muted-foreground">
            Feb 2026 – Present
        </p>

        <div className="col-span-2">
            <h3 className="text-base font-medium text-primary">
            Founding Product Designer
            </h3>
            <p className="mt-1 text-base text-muted-foreground">
            Leading the design efforts...
            </p>
        </div>
    </div>
  )
}

export default ExperienceCard