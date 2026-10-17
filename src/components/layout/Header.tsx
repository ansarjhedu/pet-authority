"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Suspense, useEffect, useId, useState, useSyncExternalStore } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

type NavChild = {
  label: string;
  href: string;
};

type NavItem = {
  label: string;
  href: string;
  badge?: string;
  children?: NavChild[];
};

const navigation: NavItem[] = [
  {
    label: "Dogs",
    href: "/dogs",
    children: [
      { label: "Breeds", href: "/dogs" },
      { label: "Nutrition", href: "/dogs/nutrition" },
      { label: "Care", href: "/dogs/care" },
    ],
  },
  {
    label: "Cats",
    href: "/cats",
    children: [
      { label: "Breeds", href: "/cats" },
      { label: "Nutrition", href: "/cats/nutrition" },
      { label: "Care", href: "/cats/care" },
    ],
  },
  {
    label: "Birds",
    href: "/birds",
  },
  {
    label: "Small Pets",
    href: "/small-pets",
  },
  {
    label: "Symptoms & Triage",
    href: "/health-symptoms",
  },
  {
    label: "Medications & Safety",
    href: "/medications",
  },
  {
    label: "Calculators & Tools",
    href: "/tools/pet-food-calculator",
    children: [
      { label: "Food Calculator", href: "/tools/pet-food-calculator" },
      { label: "Diet Planner", href: "/tools/diet-planner" },
      { label: "Vet Finder", href: "/tools/vet-finder" },
    ],
  },
  {
    label: "AI Pet Assistant",
    href: "/tools/ai-assistant",
    badge: "Free AI",
  },
];

function pathMatches(href: string, pathname: string, exact: boolean) {
  if (pathname === href) {
    return true;
  }

  if (exact) {
    return false;
  }

  return pathname.startsWith(`${href}/`);
}

function childIsCurrent(item: NavItem, child: NavChild, pathname: string) {
  return pathMatches(child.href, pathname, child.href === item.href);
}

function itemIsCurrent(item: NavItem, pathname: string) {
  if (item.children?.some((child) => childIsCurrent(item, child, pathname))) {
    return true;
  }

  return pathMatches(item.href, pathname, false);
}

function navLinkClass(active: boolean) {
  return cn(
    "rounded-lg px-2.5 py-2 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary",
    active
      ? "bg-brand-primary text-white hover:bg-brand-primary-700"
      : "text-slate-800 hover:bg-brand-primary-50 hover:text-brand-primary",
  );
}

const pathnameSubscribers = new Set<() => void>();
let historyPatched = false;

function notifyPathnameSubscribers() {
  pathnameSubscribers.forEach((subscriber) => subscriber());
}

function ensureHistoryPatch() {
  if (historyPatched || typeof window === "undefined") {
    return;
  }

  historyPatched = true;
  const { pushState, replaceState } = window.history;

  window.history.pushState = function patchedPushState(...args) {
    const result = pushState.apply(this, args);
    notifyPathnameSubscribers();
    return result;
  };

  window.history.replaceState = function patchedReplaceState(...args) {
    const result = replaceState.apply(this, args);
    notifyPathnameSubscribers();
    return result;
  };

  window.addEventListener("popstate", notifyPathnameSubscribers);
}

function subscribeToPathname(onStoreChange: () => void) {
  ensureHistoryPatch();
  pathnameSubscribers.add(onStoreChange);
  return () => {
    pathnameSubscribers.delete(onStoreChange);
  };
}

function useCurrentPathname() {
  const fromRouter = usePathname();
  const fromWindow = useSyncExternalStore(
    subscribeToPathname,
    () => window.location.pathname,
    () => "",
  );

  return fromRouter || fromWindow;
}

export function Header() {
  return (
    <Suspense fallback={<HeaderBar pathname="" />}>
      <HeaderWithPath />
    </Suspense>
  );
}

function HeaderWithPath() {
  const pathname = useCurrentPathname();
  return <HeaderBar pathname={pathname} />;
}

function HeaderBar({ pathname }: { pathname: string }) {
  const menuId = useId();
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    setOpen(false);
    setExpanded(null);
  }, [pathname]);

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      <Link
        href="/emergency"
        className="flex items-center justify-center gap-2 bg-brand-accent-50 px-4 py-2 text-center text-sm font-semibold text-brand-primary transition-colors hover:bg-brand-accent-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-brand-primary"
      >
        <span>Need urgent triage? View the 24/7 Pet Emergency Guide →</span>
      </Link>

      <div className="relative border-b border-slate-200/80 bg-brand-surface/95 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between gap-4">
          <Link
            href="/"
            className="flex shrink-0 items-center gap-2.5 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
          >
            <Image
              src="/brand/logo-icon.png"
              alt=""
              width={44}
              height={44}
              priority
              className="h-11 w-11"
            />
            <span className="text-lg font-semibold tracking-tight text-brand-primary">
              Pet Safety Hub
            </span>
          </Link>

          <nav aria-label="Primary" className="hidden min-w-0 items-center gap-0.5 xl:flex">
            {navigation.map((item) => {
              const active = itemIsCurrent(item, pathname);

              return item.children ? (
                <div key={item.label} className="group relative">
                  <Link
                    href={item.href}
                    aria-current={pathname === item.href ? "page" : undefined}
                    className={cn(navLinkClass(active), "inline-flex items-center gap-1")}
                  >
                    {item.label}
                    <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                  <div className="invisible absolute top-full left-0 z-20 min-w-52 pt-2 opacity-0 transition-opacity group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    <div className="rounded-xl border border-slate-200 bg-brand-surface p-2 shadow-lg">
                      {item.children.map((child) => {
                        const childActive = childIsCurrent(item, child, pathname);

                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            aria-current={childActive ? "page" : undefined}
                            className={cn(
                              "block rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                              childActive
                                ? "bg-brand-primary text-white hover:bg-brand-primary-700"
                                : "text-slate-800 hover:bg-brand-primary-50 hover:text-brand-primary",
                            )}
                          >
                            {child.label}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(navLinkClass(active), "inline-flex items-center gap-2")}
                >
                  {item.label}
                  {item.badge ? (
                    <span
                      className={cn(
                        "rounded-full px-2 py-0.5 text-[11px] font-bold tracking-wide uppercase",
                        active
                          ? "bg-white/20 text-white"
                          : "bg-brand-accent-100 text-brand-accent-900",
                      )}
                    >
                      {item.badge}
                    </span>
                  ) : null}
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-brand-primary hover:bg-brand-primary-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary xl:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setOpen((current) => !current)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
          </button>
        </div>

        <nav
          id={menuId}
          aria-label="Mobile"
          hidden={!open}
          className="absolute inset-x-0 top-full z-40 max-h-[calc(100dvh-7.5rem)] overflow-y-auto border-b border-slate-200 bg-brand-surface shadow-lg xl:hidden"
        >
          <ul className="container space-y-1 py-3">
            {navigation.map((item) => {
              const active = itemIsCurrent(item, pathname);

              return (
                <li key={item.label} className="border-b border-slate-200/80 last:border-b-0">
                  {item.children ? (
                    <div>
                      <button
                        type="button"
                        className={cn(
                          "flex w-full items-center justify-between gap-3 rounded-lg px-3 py-3 text-left text-base font-semibold transition-colors",
                          active
                            ? "bg-brand-primary text-white hover:bg-brand-primary-700"
                            : "text-slate-800 hover:bg-brand-primary-50 hover:text-brand-primary",
                        )}
                        aria-expanded={expanded === item.label}
                        onClick={() =>
                          setExpanded((current) => (current === item.label ? null : item.label))
                        }
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 shrink-0 transition-transform",
                            expanded === item.label && "rotate-180",
                          )}
                          aria-hidden="true"
                        />
                      </button>
                      {expanded === item.label ? (
                        <ul className="space-y-1 py-2 pl-3">
                          <li>
                            <Link
                              href={item.href}
                              aria-current={pathname === item.href ? "page" : undefined}
                              className={cn(
                                "block rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                                pathname === item.href
                                  ? "bg-brand-primary text-white hover:bg-brand-primary-700"
                                  : "text-slate-700 hover:bg-brand-primary-50 hover:text-brand-primary",
                              )}
                            >
                              {item.label} overview
                            </Link>
                          </li>
                          {item.children.map((child) => {
                            const childActive = childIsCurrent(item, child, pathname);

                            return (
                              <li key={child.href}>
                                <Link
                                  href={child.href}
                                  aria-current={childActive ? "page" : undefined}
                                  className={cn(
                                    "block rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                                    childActive
                                      ? "bg-brand-primary text-white hover:bg-brand-primary-700"
                                      : "text-slate-700 hover:bg-brand-primary-50 hover:text-brand-primary",
                                  )}
                                >
                                  {child.label}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      ) : null}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "flex items-center justify-between gap-3 rounded-lg px-3 py-3 text-base font-semibold transition-colors",
                        active
                          ? "bg-brand-primary text-white hover:bg-brand-primary-700"
                          : "text-slate-800 hover:bg-brand-primary-50 hover:text-brand-primary",
                      )}
                    >
                      <span>{item.label}</span>
                      {item.badge ? (
                        <span
                          className={cn(
                            "rounded-full px-2 py-0.5 text-[11px] font-bold tracking-wide uppercase",
                            active
                              ? "bg-white/20 text-white"
                              : "bg-brand-accent-100 text-brand-accent-900",
                          )}
                        >
                          {item.badge}
                        </span>
                      ) : null}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
