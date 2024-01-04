import React from 'react'
import ButtonLive from '../Buttons/ButtonLive'
import ButtonDemo from '../Buttons/ButtonDemo'

interface CardDetailsProps {
  title: string
  description: string
  projectUrl: string
  homepageUrl?: string | null
  className?: string
}

const CardDetails = ({
  title,
  description,
  projectUrl,
  homepageUrl,
}: CardDetailsProps) => {
  return (
    <div className="p-4 flex flex-col gap-4 justify-between">
      <h3 className="text-2xl font-medium text-white">{title}</h3>
      <p className="text-base font-normal">{description}</p>
      <div className="flex gap-4">
        {homepageUrl && (
          <ButtonLive>
            <a href={homepageUrl} target="_blank" rel="noreferrer">
              Live {'|>'}
            </a>
          </ButtonLive>
        )}
        <ButtonDemo>
          <a href={projectUrl} target="_blank" rel="noreferrer">
            Repo {'<~>'}
          </a>
        </ButtonDemo>
      </div>
    </div>
  )
}

export default CardDetails
