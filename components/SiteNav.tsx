"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type NavItem = {
  href: string;
  label: string;
};

const NAV_ITEMS: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/#leadership", label: "Leadership" },
  { href: "/projects", label: "Projects" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/contact-us", label: "Contact Us" },
];

function isActiveItem(item: NavItem, pathname: string, hash: string) {
  if (item.href === "/") {
    return pathname === "/" && hash !== "#leadership";
  }

  if (item.href === "/#leadership") {
    return pathname === "/" && hash === "#leadership";
  }

  return pathname === item.href;
}

export default function SiteNav() {
  const pathname = usePathname();
  const [hash, setHash] = useState("");

  useEffect(() => {
    const syncHash = () => {
      setHash(window.location.hash);
    };

    syncHash();
    window.addEventListener("hashchange", syncHash);

    return () => window.removeEventListener("hashchange", syncHash);
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <div className="mx-auto max-w-6xl rounded-[28px] border border-white/10 bg-black/85 px-4 py-3 shadow-2xl backdrop-blur">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <Link
            href="/"
            className="flex items-center gap-4 rounded-2xl px-2 py-1 text-white transition-colors hover:bg-white/5"
          >
            <Image
              src="/new-logo-3.png"
              alt="Buckeye Rocketry"
              width={148}
              height={52}
              priority
              className="h-11 w-auto"
            />
            <div className="hidden sm:flex flex-col justify-center">
              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-200">
                Buckeye Rocketry
              </span>
              <span className="text-[10px] uppercase tracking-[0.28em] text-zinc-500">
                Founded 2025
              </span>
            </div>
          </Link>

          <nav className="flex gap-2 overflow-x-auto rounded-full bg-white p-1 text-sm font-medium text-zinc-900 shadow-md">
            {NAV_ITEMS.map((item) => {
              const active = isActiveItem(item, pathname, hash);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`whitespace-nowrap rounded-full px-4 py-2 transition-colors ${
                    active
                      ? "bg-black text-white"
                      : "text-zinc-900 hover:bg-zinc-100"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
