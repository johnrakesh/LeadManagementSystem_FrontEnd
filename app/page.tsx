import Link from "next/link";
import "./globals.css";


export default function HomePage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <h1>Smarter Lead Management for Growing Businesses</h1>
          <p>
            Capture, organize, and nurture your business leads with automated
            follow-ups and centralized tracking.
          </p>

          <div className="hero-actions">
            <Link href="/new-lead" className="btn primary">
              New Lead Registration
            </Link>
            <Link href="/email-scheduler" className="btn secondary">
              Email Scheduler
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <h2>Why Use Our Lead Management System?</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>Centralized Leads</h3>
            <p>
              Store and manage all your leads in a single secure dashboard.
            </p>
          </div>

          <div className="feature-card">
            <h3>Automated Outreach</h3>
            <p>
              Schedule emails and follow-ups to engage leads automatically.
            </p>
          </div>

          <div className="feature-card">
            <h3>Status Tracking</h3>
            <p>
              Monitor lead progress from first contact to conversion.
            </p>
          </div>

          <div className="feature-card">
            <h3>Scalable & Secure</h3>
            <p>
              Built for growing teams with performance and security in mind.
            </p>
          </div>
        </div>

        <div className="bg-red-500 text-white p-4 text-red">
  Tailwind Test
</div>
<div className="bg-red-500 text-white p-4 text-2xl">
  Tailwind Working
</div>
      </section>
    </>
  );
}