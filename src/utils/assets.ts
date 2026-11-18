/**
 * Resolves image paths written in JSON (e.g. "src/images/yu.png") to the URL
 * Vite emits for that asset. Keys are known at build time, so nothing here
 * depends on runtime directory listings.
 */
const modules = import.meta.glob('../images/**/*.{png,jpg,jpeg,svg,webp,avif,gif,ico}', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

const byPath = new Map<string, string>();

for (const [key, url] of Object.entries(modules)) {
  // Keys look like "../images/yu.png"; index both "images/yu.png" and the
  // exact repo-relative form so either style works in the JSON files.
  const relative = key.replace(/^\.\.\//, '');
  byPath.set(relative, url);
  byPath.set(`src/${relative}`, url);
}

export function resolveAsset(path: string | undefined): string {
  if (!path) return '';
  if (/^(?:[a-z]+:)?\/\//i.test(path) || path.startsWith('data:')) return path;
  const clean = path.replace(/^\.?\//, '');
  return byPath.get(clean) ?? byPath.get(path) ?? clean;
}

/**
 * Resolves an anchor href: absolute URLs, anchors and mail/tel links pass
 * through untouched, anything else is treated as a bundled asset path.
 */
export function resolveHref(url: string): string {
  if (/^(?:[a-z][a-z0-9+.-]*:|\/\/|#|\/)/i.test(url)) return url;
  return resolveAsset(url);
}
