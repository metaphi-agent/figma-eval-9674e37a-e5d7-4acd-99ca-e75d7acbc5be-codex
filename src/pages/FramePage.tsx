import { Link, useParams } from 'react-router-dom'
import { getFrameBySlug } from '../data/frames'

export default function FramePage() {
  const { slug } = useParams()
  const frame = getFrameBySlug(slug)

  if (!frame) {
    return (
      <div className="mx-auto w-full max-w-3xl p-6">
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="text-sm text-gray-600">Frame not found.</div>
          <Link
            to="/"
            className="mt-4 inline-flex items-center rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white hover:bg-gray-800"
          >
            Back to frames
          </Link>
        </div>
      </div>
    )
  }

  return (
    <img
      src={frame.gtImagePath}
      alt={frame.name}
      className="block h-auto w-full select-none"
      draggable={false}
    />
  )
}
