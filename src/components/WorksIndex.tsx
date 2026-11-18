import { catalog } from '../data';
import type { Work } from '../types/cms';
import { resolveAsset, resolveHref } from '../utils/assets';
import { mediaHost, mediaKind } from '../utils/media';
import { accentStyle } from '../utils/theme';
import { ArrowUpRight, PlayMark } from './Marks';
import './WorksIndex.css';

/** Every card is a single outbound link: no category gate before the work. */
function workHref(work: Work): string {
  if (work.liveUrl) return resolveHref(work.liveUrl);
  return work.mediaUrl ? resolveHref(work.mediaUrl) : '#work';
}

function workLabel(work: Work): string {
  const target = work.liveUrl ?? work.mediaUrl ?? '';
  if (/facebook\.com/i.test(target)) return 'Watch on Facebook';
  if (/drive\.google\.com/i.test(target)) return 'Open in Drive';
  if (work.liveUrl) return 'Visit live site';
  if (mediaKind(work.mediaUrl) === 'image') return 'View full image';
  return 'Open work';
}

export default function WorksIndex() {
  const bands = catalog.filter((discipline) => discipline.works.length > 0);
  const total = bands.reduce((count, discipline) => count + discipline.works.length, 0);

  return (
    <section id="work" className="works">
      <div className="wrap">
        <header className="works__head" data-reveal>
          <div>
            <p className="eyebrow eyebrow--ink">// Selected works</p>
            <h2 className="works__title">SELECTED WORKS</h2>
          </div>
          <p className="works__note">
            {total} works across {bands.length} disciplines. Every piece opens at its source — no
            extra steps.
          </p>
        </header>

        {bands.map((discipline) => (
          <section
            className="band"
            key={discipline.slug}
            style={accentStyle(discipline.accent)}
            aria-labelledby={`band-${discipline.slug}`}
          >
            <header className="band__head" data-reveal>
              <h3 className="band__title" id={`band-${discipline.slug}`}>
                {discipline.title}
              </h3>
              <p className="band__specs mono">{discipline.specialties.join(' · ')}</p>
              <span className="band__count mono">{discipline.works.length} works</span>
            </header>

            <div className="band__grid">
              {discipline.works.map((work, index) => {
                const isImage = mediaKind(work.mediaUrl) === 'image';

                return (
                  <article
                    className="work"
                    key={`${discipline.slug}-${work.title}`}
                    data-reveal
                    data-reveal-delay={String((index % 3) + 1)}
                  >
                    <a
                      className="work__anchor"
                      href={workHref(work)}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <span className="work__media">
                        {isImage ? (
                          <img
                            src={resolveAsset(work.mediaUrl)}
                            alt={`${work.title} — ${work.medium}`}
                            loading="lazy"
                            decoding="async"
                          />
                        ) : (
                          <span className="work__plate">
                            <PlayMark className="work__play" />
                            <span className="work__source mono">
                              {mediaHost(work.mediaUrl) || work.medium}
                            </span>
                          </span>
                        )}
                      </span>

                      <span className="work__body">
                        <span className="work__title">{work.title}</span>
                        <span className="work__meta mono">
                          {[work.medium, work.year].filter(Boolean).join(' · ')}
                        </span>
                        <span className="work__desc">{work.description}</span>
                        <span className="work__cta mono">
                          {workLabel(work)}
                          <ArrowUpRight className="work__arrow" />
                        </span>
                      </span>
                    </a>
                  </article>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
