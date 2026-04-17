"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) =>
    pathname === path ? "active-link" : "";

  return (
    <header className="navbar">
      <div className="nav-logo">Lead Management System</div>

      <nav className="nav-links">
        <Link href="/" className={isActive("/")}>
          Home
        </Link>

        <Link href="/new-lead" className={isActive("/new-lead")}>
          New Lead
        </Link>
        
        <Link href="/leads" className={isActive("/leads")}>
          Leads Dashboard
        </Link>
        <Link href="/email-scheduler" className={isActive("/email-scheduler")}>
          Email Scheduler
        </Link>
      </nav>
    </header>
  );
}