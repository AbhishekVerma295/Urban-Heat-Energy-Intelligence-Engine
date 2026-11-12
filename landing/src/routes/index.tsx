import { createFileRoute } from '@tanstack/react-router'
import { useEffect } from 'react'
import heroVideo from '../assets/hero-video.mp4'

export const Route = createFileRoute('/')({
  component: HomePage,
})

// ─── Navbar ────────────────────────────────────────────────────────────────────

function Navbar() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{ backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)' }}
    >
      <div
        className="mx-auto px-8 py-5 flex items-center justify-between"
        style={{ maxWidth: '1400px', background: 'oklch(0.10 0.015 280 / 0.65)' }}
      >
        {/* Wordmark */}
        <div className="flex items-center gap-3">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: 'var(--color-brand)' }}
          >
            <div
              className="w-3.5 h-3.5 rounded-sm bg-white"
              style={{ transform: 'rotate(45deg)' }}
            />
          </div>
          <span className="text-xl font-semibold tracking-tight">UHEI</span>
        </div>

        {/* Centre nav — desktop only */}
        <nav className="hidden md:flex items-center gap-8">
          {['About', 'Blog'].map((link) => (
            <a key={link} href="#" className="text-sm text-muted hover:text-foreground transition-colors">
              {link}
            </a>
          ))}

          <div className="flex items-center gap-2">
            <a href="#" className="text-sm text-muted hover:text-foreground transition-colors">
              Changelog
            </a>
            <span
              className="text-xs px-2 py-0.5 rounded-full font-medium text-brand-fg"
              style={{ background: 'var(--color-brand)' }}
            >
              ✦ New
            </span>
          </div>

          <a href="#" className="text-sm text-muted hover:text-foreground transition-colors">
            Pricing
          </a>

          <a href="#" className="flex items-center gap-1 text-sm text-muted hover:text-foreground transition-colors">
            Pages
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
              <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </nav>

        {/* CTA */}
        <button
          className="px-5 py-2.5 rounded-full text-sm font-medium text-brand-fg hover:opacity-90 transition-opacity cursor-pointer"
          style={{ background: 'var(--color-brand)' }}
        >
          Book Your Demo
        </button>
      </div>
    </header>
  )
}

// ─── Hero Section ──────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="relative flex flex-col items-center text-center px-6 pt-44 pb-20">
      {/* ── Gradient video background ── */}
      <div
        aria-hidden
        className="absolute pointer-events-none -z-10"
        style={{
          top: '-140px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '140%',
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: '100%',
            height: 'auto',
            objectFit: 'cover',
            opacity: 0.55,
            mixBlendMode: 'screen',
            filter: 'blur(90px)',
            transform: 'scale(1.35) translateY(-5%)',
            display: 'block',
          }}
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
      </div>

      {/* ── Status pill ── */}
      <div
        className="inline-flex items-center gap-2.5 rounded-full px-4 py-2 mb-8"
        style={{ background: 'var(--color-pill)' }}
      >
        <span
          className="w-2 h-2 rounded-full flex-shrink-0"
          style={{
            background: 'var(--color-success)',
            boxShadow: '0 0 8px 3px oklch(0.78 0.20 145 / 0.55)',
          }}
        />
        <span className="text-sm">New Feature: Zapier Integration</span>
      </div>

      {/* ── Headline ── */}
      <h1
        className="tracking-tight mb-6"
        style={{
          fontSize: 'clamp(2.6rem, 6vw, 5.5rem)',
          fontWeight: 500,
          lineHeight: 1.08,
          maxWidth: '820px',
        }}
      >
        Manage your sales and
        <br />
        analytics in{' '}
        <em
          className="not-italic font-normal"
          style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}
        >
          one place.
        </em>
      </h1>

      {/* ── Sub-copy ── */}
      <p
        className="text-muted mb-10"
        style={{ maxWidth: '480px', fontSize: '1.0625rem', lineHeight: 1.65 }}
      >
        Track custom events, increase form submissions, optimise conversion rates
        and optimise your sales flow with UHEI.
      </p>

      {/* ── CTA ── */}
      <button
        className="px-8 py-3.5 rounded-full font-medium text-base text-brand-fg hover:opacity-90 transition-opacity cursor-pointer"
        style={{
          background: 'var(--color-brand)',
          boxShadow: '0 0 48px 10px oklch(0.56 0.26 285 / 0.38)',
        }}
      >
        Book Your Demo
      </button>
    </section>
  )
}

// ─── Logos Row ─────────────────────────────────────────────────────────────────

const LOGOS = [
  { label: 'SAVANNAH', style: { fontWeight: 700, letterSpacing: '0.32em' } },
  { label: 'M MILANO', style: { fontWeight: 700 } },
  { label: '◆ luminous', style: { fontWeight: 500 } },
  { label: 'theo', style: { fontWeight: 400, fontStyle: 'italic', fontFamily: 'var(--font-serif)' } },
  { label: '◐ Amsterdam', style: { fontWeight: 500 } },
]

function LogosRow() {
  return (
    <section
      className="mx-auto px-6 pt-4 pb-10 text-center"
      style={{ maxWidth: '1000px' }}
    >
      <p className="text-sm text-muted mb-7">Used by global powerhouses like</p>
      <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-5">
        {LOGOS.map(({ label, style }) => (
          <span
            key={label}
            className="text-lg select-none"
            style={{ color: 'oklch(0.96 0.008 280 / 0.30)', ...style }}
          >
            {label}
          </span>
        ))}
      </div>
    </section>
  )
}

// ─── Dashboard components ──────────────────────────────────────────────────────

const glassCard: React.CSSProperties = {
  border: '1px solid oklch(1 0 0 / 0.09)',
  background: 'oklch(1 0 0 / 0.045)',
  backdropFilter: 'blur(8px)',
  WebkitBackdropFilter: 'blur(8px)',
}

function StatCard({ label, value, delta }: { label: string; value: string; delta: string }) {
  return (
    <div className="rounded-2xl p-4" style={glassCard}>
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs text-muted">{label}</span>
        <span
          className="text-xs px-2 py-0.5 rounded-full font-medium"
          style={{ color: 'var(--color-success)', background: 'oklch(0.78 0.20 145 / 0.12)' }}
        >
          {delta}
        </span>
      </div>
      <p className="text-2xl font-semibold tracking-tight">{value}</p>
    </div>
  )
}

function BalanceCard() {
  return (
    <div className="rounded-2xl p-5 flex flex-col" style={glassCard}>
      <p className="text-xs text-muted mb-1">Total Balance</p>
      <p className="text-3xl font-semibold tracking-tight mb-5">$675,931</p>

      <button
        className="w-full py-2.5 rounded-full text-sm font-medium text-brand-fg mb-5 cursor-pointer hover:opacity-90 transition-opacity"
        style={{ background: 'var(--color-brand)' }}
      >
        Withdraw
      </button>

      <div className="border-t pt-4 mb-4" style={{ borderColor: 'oklch(1 0 0 / 0.09)' }}>
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs text-muted mb-1">Total Income</p>
            <p className="text-sm font-semibold">$21,478</p>
          </div>
          <span className="text-sm font-medium mb-0.5" style={{ color: 'var(--color-success)' }}>
            92%
          </span>
        </div>
      </div>

      <div className="border-t pt-4" style={{ borderColor: 'oklch(1 0 0 / 0.09)' }}>
        <p className="text-xs text-muted mb-1">Total Expense</p>
        <p className="text-sm text-muted">$9,627</p>
      </div>
    </div>
  )
}

function RevenueChart() {
  const tabs = ['Daily', 'Weekly', 'Monthly', 'Yearly'] as const
  const active = 'Monthly'

  return (
    <div className="rounded-2xl p-5" style={glassCard}>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold">Revenue Overview</h3>
        <div className="flex items-center gap-0.5">
          {tabs.map((tab) => (
            <button
              key={tab}
              className="text-xs px-2.5 py-1 rounded-full cursor-pointer transition-colors"
              style={{ color: tab === active ? 'var(--color-foreground)' : 'var(--color-muted)' }}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Chart */}
      <svg viewBox="0 0 600 200" style={{ width: '100%', height: '180px', display: 'block' }}>
        <defs>
          <linearGradient id="uhei-line-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%"   stopColor="oklch(0.86 0.17 188)" />
            <stop offset="100%" stopColor="oklch(0.58 0.22 245)" />
          </linearGradient>
        </defs>

        {/* Horizontal grid lines */}
        {[35, 80, 125, 168].map((y) => (
          <line key={y} x1="0" y1={y} x2="600" y2={y} stroke="white" strokeOpacity="0.07" strokeWidth="1" />
        ))}

        {/* Smooth cubic bezier path */}
        <path
          d="M 0,172 C 55,158 85,112 145,96 C 205,80 245,132 295,112 C 345,92 385,42 445,32 C 500,22 545,52 600,68"
          fill="none"
          stroke="url(#uhei-line-grad)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Halo rings */}
        <circle cx="295" cy="112" r="16" fill="white" fillOpacity="0.06" />
        <circle cx="295" cy="112" r="9"  fill="white" fillOpacity="0.12" />
        {/* Centre dot */}
        <circle cx="295" cy="112" r="4.5" fill="white" />
      </svg>
    </div>
  )
}

function ProgressCard() {
  const rows = [
    { label: 'Employee',                pct: 84 },
    { label: 'Independent Contractor',  pct: 61 },
    { label: 'Contracted Employee',     pct: 72 },
    { label: 'Stakeholders',            pct: 46 },
  ]

  return (
    <div className="rounded-2xl p-5" style={glassCard}>
      <div className="flex flex-col gap-6">
        {rows.map(({ label, pct }) => (
          <div key={label}>
            <p className="text-xs text-muted mb-2">{label}</p>
            <div
              className="h-[3px] rounded-full"
              style={{ background: 'oklch(1 0 0 / 0.10)' }}
            >
              <div
                className="h-full rounded-full"
                style={{ width: `${pct}%`, background: 'oklch(1 0 0 / 0.44)' }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Dashboard Mockup ──────────────────────────────────────────────────────────

function DashboardMockup() {
  return (
    <section className="mx-auto px-4 pb-24 pt-8" style={{ maxWidth: '1100px' }}>
      <div
        className="rounded-3xl p-5 md:p-6"
        style={{
          border: '1px solid oklch(1 0 0 / 0.10)',
          background: 'oklch(1 0 0 / 0.04)',
          backdropFilter: 'blur(48px)',
          WebkitBackdropFilter: 'blur(48px)',
          boxShadow: '0 60px 120px oklch(0 0 0 / 0.55), 0 0 0 1px oklch(1 0 0 / 0.05) inset',
        }}
      >
        {/* Top row — three stat cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          <StatCard label="Total Profit"   value="$9,432.25" delta="+84%" />
          <StatCard label="Total Revenue"  value="$404,585"  delta="+47%" />
          <StatCard label="Products Sold"  value="1,457"     delta="+24%" />
        </div>

        {/* Bottom row — balance | chart | progress */}
        <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr_220px] gap-4">
          <BalanceCard />
          <RevenueChart />
          <ProgressCard />
        </div>
      </div>
    </section>
  )
}

// ─── Page ──────────────────────────────────────────────────────────────────────

function HomePage() {
  useEffect(() => {
    document.title = 'UHEI — Manage your urban heat and energy analytics in one place'
  }, [])

  return (
    <div style={{ background: 'var(--color-background)', color: 'var(--color-foreground)', minHeight: '100svh', overflowX: 'hidden' }}>
      <Navbar />
      <main>
        <HeroSection />
        <LogosRow />
        <DashboardMockup />
      </main>
    </div>
  )
}
