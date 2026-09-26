/**
 * Ambient background: soft drifting glow blobs + a faint grid.
 * Pure CSS transform/opacity animation — cheap on mobile, no JS ticking.
 */
export default function AnimatedBackground({ variant = 'default' }) {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-ink" />
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(#0066FF 1px, transparent 1px), linear-gradient(90deg, #0066FF 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
      />
      <div className="absolute -left-32 -top-32 h-72 w-72 rounded-full bg-blex/30 blur-[90px] motion-safe:animate-drift sm:h-96 sm:w-96" />
      <div
        className="absolute -right-24 top-1/3 h-72 w-72 rounded-full bg-cyan/20 blur-[100px] motion-safe:animate-drift sm:h-[26rem] sm:w-[26rem]"
        style={{ animationDelay: '-8s', animationDirection: 'reverse' }}
      />
      {variant === 'rich' && (
        <div
          className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-navy/60 blur-[110px] motion-safe:animate-drift"
          style={{ animationDelay: '-14s' }}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink" />
    </div>
  )
}
