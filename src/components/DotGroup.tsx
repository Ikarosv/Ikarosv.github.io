type OneToSix = 1 | 2 | 3 | 4 | 5 | 6

interface DotGroupProps {
  height?: OneToSix
  width?: OneToSix
}

export default function DotGroup({ height = 5, width = 5 }: DotGroupProps) {
  return new Array(height * width).fill(
    <span className="h-1 w-1 rounded-full bg-gray" />,
  )
}
