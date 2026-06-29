type RainbowWrapperProps = {
  index: number
  children: React.ReactNode
}

const rainbowColors = [
  '#ef4444', // red
  '#f97316', // orange
  '#eab308', // yellow
  '#22c55e', // green
  '#3b82f6', // blue
  '#6366f1', // indigo
  '#a855f7', // violet
]

export default function RainbowWrapper({ index, children }: RainbowWrapperProps) {
  const normalizedIndex = Math.abs(index) % rainbowColors.length
  const backgroundColor = rainbowColors[normalizedIndex]

  return (
    <div
      className="rounded-3xl p-6 transition-colors duration-300"
      style={{ backgroundColor }}
    >
      {children}
    </div>
  )
}
