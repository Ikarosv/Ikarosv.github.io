import React from 'react'

interface CardTopicsProps {
  topics: string[]
}

function CardTopics({ topics }: CardTopicsProps) {
  return (
    <div className="gap-2 p-2">
      {topics.map((topic) => (
        <span
          key={topic}
          className="inline-block mr-2 text-base font-normal text-gray "
        >
          {topic}
        </span>
      ))}
    </div>
  )
}

export default CardTopics
