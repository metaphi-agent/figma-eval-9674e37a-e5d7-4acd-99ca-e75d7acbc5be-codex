import React from 'react'
import { NavLink, Route, Routes, useLocation } from 'react-router-dom'

const FramesIndexPage = React.lazy(() => import('./pages/FramesIndexPage'))
const FramePage = React.lazy(() => import('./pages/FramePage'))

function Loading() {
  return (
    <div className="min-h-[50vh] w-full flex items-center justify-center">
      <div className="text-sm text-gray-500">Loading…</div>
    </div>
  )
}

export default function App() {
  const location = useLocation()
  const isFrameRoute = location.pathname.startsWith('/frames/')

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {!isFrameRoute && (
        <header className="sticky top-0 z-20 border-b border-gray-200 bg-white/80 backdrop-blur">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3">
            <div className="min-w-0">
              <NavLink
                to="/"
                className="inline-flex items-center gap-2 font-semibold tracking-tight"
              >
                <span className="truncate">Landing Page Kit</span>
                <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-700">
                  Figma Frames
                </span>
              </NavLink>
              <div className="mt-0.5 text-xs text-gray-500">
                Desktop + mobile ground truth previews
              </div>
            </div>

            <nav className="flex items-center gap-2">
              <a
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
                href="https://www.figma.com/design/XKju9KAy07CsOjPBLGHlTU/Landing-Page-Kit---Free-13-Landing-Pages-Collection-for-UI-UX-Design--Community-"
                target="_blank"
                rel="noreferrer"
              >
                Open Figma
              </a>
            </nav>
          </div>
        </header>
      )}

      <main className={isFrameRoute ? '' : 'mx-auto w-full max-w-6xl px-4 py-6'}>
        <React.Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<FramesIndexPage />} />
            <Route path="/frames/:slug" element={<FramePage />} />
            <Route path="*" element={<FramesIndexPage />} />
          </Routes>
        </React.Suspense>
      </main>
    </div>
  )
}
