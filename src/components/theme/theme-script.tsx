const themeScript = `
try {
  var storedTheme = localStorage.getItem('theme');
  var root = document.documentElement;
  if (storedTheme === 'light') {
    root.classList.add('light');
  } else {
    root.classList.remove('light');
  }
} catch (_) {}
`;

export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: themeScript }} />;
}
