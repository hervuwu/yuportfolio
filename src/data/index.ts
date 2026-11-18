import catalogJson from './catalog.json';
import profileJson from './profile.json';
import siteJson from './site.json';
import stackJson from './stack.json';
import type { Catalog, Profile, Site, Stack } from '../types/cms';

/**
 * Single entry point for content. These are assignments rather than `as`
 * casts: TypeScript compares each JSON file to its interface, so a drifted
 * field breaks `npm run build` with the exact path to the problem.
 */
export const site: Site = siteJson;
export const catalog: Catalog = catalogJson;
export const profile: Profile = profileJson;
export const stack: Stack = stackJson;
