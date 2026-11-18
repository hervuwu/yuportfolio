import { site } from '../data';
import { resolveAsset } from '../utils/assets';
import { accentStyle } from '../utils/theme';
import { ArrowRight, FourPointStar, RetroEyes, WirePlane } from './Marks';
import './HeroSpread.css';

const RINGS = Array.from({ length: 13 }, (_, index) => index);

export default function HeroSpread() {
  const { hero } = site;

  return (
    <section id="home" className="hero">
      <div className="hero__spread sheet">
        <div className="wrap hero__grid">
          <div className="hero__left">
            <p className="eyebrow">{hero.eyebrow}</p>

            <h1 className="hero__title">
              <span className="sr-only">{hero.intro}</span>
              <span className="hero__headline">
                <span className="hero__display" aria-hidden="true">
                  {hero.displayLines.map((line, index) => (
                    <span
                      className={`hero__line${index === hero.displayLines.length - 1 ? ' is-last' : ''}`}
                      key={line}
                    >
                      {line}
                    </span>
                  ))}
                </span>
                <span className="hero__pill" aria-hidden="true">
                  {site.year}
                </span>
              </span>
            </h1>

            <p className="hero__intro">{hero.intro}</p>
            <p className="hero__desc">{hero.description}</p>

            <ul className="hero__stickers" aria-label="Disciplines">
              {hero.stickers.map((sticker) => (
                <li
                  className="sticker"
                  key={sticker.label}
                  style={{ ...accentStyle(sticker.accent), rotate: `${sticker.rotate}deg` }}
                >
                  {sticker.label}
                </li>
              ))}
            </ul>

            <div className="hero__actions">
              <a className="btn" href={hero.primaryCta.href}>
                {hero.primaryCta.label}
                <ArrowRight className="hero__arrow" />
              </a>
              <a className="btn btn--outline" href={hero.secondaryCta.href}>
                {hero.secondaryCta.label}
              </a>
            </div>

            <div className="hero__marks">
              <RetroEyes className="hero__eyes" />
              <span className="hero__marks-label">Everything is a storyboard</span>
            </div>

            <dl className="hero__meta">
              <div>
                <dt>Base</dt>
                <dd>{site.location}</dd>
              </div>
              <div>
                <dt>Handle</dt>
                <dd>{site.handle}</dd>
              </div>
              <div>
                <dt>Status</dt>
                <dd>{hero.availability}</dd>
              </div>
            </dl>
          </div>

          <div className="hero__right">
            <FourPointStar className="hero__star" />

            <div className="hero__book">
              <span className="hero__rings" aria-hidden="true">
                {RINGS.map((ring) => (
                  <i key={ring} />
                ))}
              </span>

              <div className="hero__sheet">
                <div className="hero__bar">
                  <span className="hero__dots" aria-hidden="true">
                    <i />
                    <i />
                    <i />
                  </span>
                  <span className="hero__filename">{hero.avatarTitle}</span>
                </div>
                <img
                  className="hero__photo"
                  src={resolveAsset(site.avatar)}
                  alt={`Portrait of ${site.name}`}
                  width={640}
                  height={640}
                />
                <p className="hero__caption">{hero.avatarCaption}</p>
              </div>

              <span className="hero__checker" aria-hidden="true" />
              <span className="hero__status">{hero.availability}</span>
            </div>

            <WirePlane className="hero__plane" />
          </div>
        </div>
      </div>
    </section>
  );
}
