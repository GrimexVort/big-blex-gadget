import { useState } from 'react'
import * as Icons from 'lucide-react'

/**
 * Renders a local product image if it exists, and falls back to a styled
 * icon tile if it doesn't (so we never show a broken-image icon).
 * Drop a real photo at the given `src` path and it will replace the
 * placeholder automatically — no code changes needed.
 */
export default function GadgetImage({ src, alt, icon = 'Sparkles', className = '', imgClassName = '' }) {
  const [errored, setErrored] = useState(false)
  const Icon = Icons[icon] || Icons.Sparkles

  if (errored) {
    return (
      <div
        className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-navy via-ink to-ink ${className}`}
        role="img"
        aria-label={alt}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,102,255,0.35),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_80%,rgba(0,229,255,0.2),transparent_55%)]" />
        <Icon className="relative h-10 w-10 text-cyan/70 sm:h-12 sm:w-12" strokeWidth={1.5} />
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setErrored(true)}
      className={`${className} ${imgClassName}`}
    />
  )
}
