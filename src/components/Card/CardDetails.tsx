import React from 'react'
import ButtonLive from '../Buttons/ButtonLive'
import ButtonDemo from '../Buttons/ButtonDemo'
import { ClassNameValue, twMerge } from 'tailwind-merge'

interface CardDetailsProps {
  title: string
  description: string
  projectUrl?: string
  homepageUrl?: string | null
  className?: ClassNameValue
}

const CardDetails = ({
  title,
  description,
  projectUrl,
  homepageUrl,
  className,
}: CardDetailsProps) => {
  return (
    <div
      className={twMerge('p-4 flex flex-col gap-4 justify-between', className)}
    >
      <h3 className="text-2xl font-medium text-white">{title}</h3>
      <p className="text-base font-normal">{description}</p>
      {(homepageUrl || projectUrl) && (
        <div className="flex gap-4">
          {homepageUrl && (
            <ButtonLive>
              <a href={homepageUrl} target="_blank" rel="noreferrer">
                Live {'|>'}
              </a>
            </ButtonLive>
          )}
          {projectUrl && (
            <ButtonDemo>
              <a href={projectUrl} target="_blank" rel="noreferrer">
                Repo {'<~>'}
              </a>
            </ButtonDemo>
          )}
        </div>
      )}
    </div>
  )
}

export default CardDetails
