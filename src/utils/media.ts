export type MediaKind = 'image' | 'embed' | 'link' | 'none';

const IMAGE_EXT = /\.(?:png|jpe?g|svg|webp|avif|gif)$/i;
const EMBEDDABLE =
  /(?:drive\.google\.com\/file\/[^"']*\/preview)|(?:facebook\.com\/plugins\/)|(?:youtube\.com\/embed\/)|(?:player\.vimeo\.com\/)/i;

/**
 * Classifies a `mediaUrl` from the CMS so the modal knows whether to print an
 * image, mount a player, or fall back to a plain outbound link.
 */
export function mediaKind(url: string | undefined): MediaKind {
  if (!url) return 'none';
  if (IMAGE_EXT.test(url)) return 'image';
  if (EMBEDDABLE.test(url)) return 'embed';
  return 'link';
}

/** Safe hostname for the facade label; never throws on odd URLs. */
export function mediaHost(url: string | undefined): string {
  if (!url) return '';
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return '';
  }
}
