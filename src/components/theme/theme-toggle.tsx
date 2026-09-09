"use client";

export function ThemeToggle() {
  function toggleTheme() {
    const root = document.documentElement;
    const nextTheme = root.classList.contains("light") ? "dark" : "light";
    root.classList.toggle("light", nextTheme === "light");
    localStorage.setItem("theme", nextTheme);
  }

  return (
    <button
      type="button"
      aria-label="Toggle color theme"
      onClick={toggleTheme}
      className="group relative inline-grid size-9 place-items-center border border-border bg-card text-muted-foreground transition-colors hover:border-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <span className="sr-only">Toggle theme</span>
      <span className="theme-toggle__sun">
        <SunIcon />
      </span>
      <span className="theme-toggle__moon">
        <MoonIcon />
      </span>
    </button>
  );
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4 transition-transform group-hover:rotate-45" aria-hidden="true">
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
        d="M12 4v2M12 18v2M4 12h2M18 12h2M6.34 6.34l1.42 1.42M16.24 16.24l1.42 1.42M17.66 6.34l-1.42 1.42M7.76 16.24l-1.42 1.42M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4 transition-transform group-hover:-rotate-12" aria-hidden="true">
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
        d="M20 14.5A7.5 7.5 0 0 1 9.5 4 8.5 8.5 0 1 0 20 14.5Z"
      />
    </svg>
  );
}
