export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500 opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/4 -right-24 w-80 h-80 bg-red-500 opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-yellow-500 opacity-10 rounded-full blur-3xl"></div>
    </div>
  )
}
