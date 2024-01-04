import { ClassNameValue, twMerge } from 'tailwind-merge'

interface CardImageProps {
  imageUrl?: string
  altText?: string
  className?: ClassNameValue
}

const CardImage = ({
  imageUrl = '/default-card-img.png',
  altText = 'Card Image',
  className,
}: CardImageProps) => {
  return (
    <img
      className={twMerge('w-full h-[12.5625rem]', className)}
      src={imageUrl}
      alt={altText}
    />
  )
}

export default CardImage
