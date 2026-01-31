import { Link } from 'react-router-dom'
import { FRAMES } from '../data/frames'

function FrameCard({
  name,
  targetRoute,
  gtImagePath,
}: {
  name: string
  targetRoute: string
  gtImagePath: string
}) {
  return (
    <Link
      to={targetRoute}
      className="group rounded-xl border border-gray-200 bg-white p-3 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="aspect-[16/9] w-full overflow-hidden rounded-lg bg-gray-50">
        <img
          src={gtImagePath}
          alt={name}
          loading="lazy"
          className="h-full w-full object-cover transition duration-200 group-hover:scale-[1.02]"
        />
      </div>
      <div className="mt-3 text-sm font-semibold text-gray-900">{name}</div>
      <div className="mt-0.5 text-xs text-gray-500">View frame</div>
    </Link>
  )
}

export default function FramesIndexPage() {
  const desktopFrames = FRAMES.filter((f) => f.tags.includes('desktop'))
  const mobileFrames = FRAMES.filter((f) => f.tags.includes('mobile'))

  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold tracking-tight">Frames</h1>
        <p className="text-sm text-gray-600">
          Ground truth exports from Figma (rendered as images for reference).
        </p>
      </div>

      <section className="space-y-3">
        <div className="flex items-end justify-between gap-3">
          <h2 className="text-base font-semibold tracking-tight">Desktop</h2>
          <div className="text-xs text-gray-500">{desktopFrames.length} frames</div>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {desktopFrames.map((frame) => (
            <FrameCard
              key={frame.slug}
              name={frame.name}
              targetRoute={frame.targetRoute}
              gtImagePath={frame.gtImagePath}
            />
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <div className="flex items-end justify-between gap-3">
          <h2 className="text-base font-semibold tracking-tight">Mobile</h2>
          <div className="text-xs text-gray-500">{mobileFrames.length} frames</div>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {mobileFrames.map((frame) => (
            <FrameCard
              key={frame.slug}
              name={frame.name}
              targetRoute={frame.targetRoute}
              gtImagePath={frame.gtImagePath}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
