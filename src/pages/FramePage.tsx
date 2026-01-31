import { Link, useParams } from 'react-router-dom'
import { getFrameBySlug } from '../data/frames'

export default function FramePage() {
  const { slug } = useParams()
  const frame = getFrameBySlug(slug)

  if (!frame) {
    return (
      <div className="space-y-4">
        <div className="text-sm text-gray-600">Frame not found.</div>
        <Link
          to="/"
          className="inline-flex items-center rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white hover:bg-gray-800"
        >
          Back to frames
        </Link>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="min-w-0">
          <div className="text-xs font-medium text-gray-500">Frame</div>
          <h1 className="truncate text-lg font-semibold tracking-tight">
            {frame.name}
          </h1>
          <div className="mt-0.5 text-xs text-gray-500">
            Figma node: <span className="font-mono">{frame.figmaNodeId}</span>
          </div>
        </div>
        <Link
          to="/"
          className="inline-flex items-center rounded-md border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50"
        >
          Back
        </Link>
      </div>

      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
        <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3">
          <div className="text-sm font-medium text-gray-700">
            Ground truth export
          </div>
          <a
            className="text-sm font-medium text-indigo-600 hover:text-indigo-700"
            href={frame.gtImagePath}
            target="_blank"
            rel="noreferrer"
          >
            Open image
          </a>
        </div>
        <div className="w-full overflow-auto bg-gray-50 p-4">
          <img
            src={frame.gtImagePath}
            alt={frame.name}
            className="mx-auto h-auto max-w-none"
          />
        </div>
      </div>
    </div>
  )
}
