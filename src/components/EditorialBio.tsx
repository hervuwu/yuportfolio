import { profile } from '../data';
import { accentStyle } from '../utils/theme';
import { ArrowRight } from './Marks';
import './EditorialBio.css';

export default function EditorialBio() {
  return (
    <section id="about" className="bio sheet">
      <div className="wrap bio__grid">
        <div className="bio__left">
          <p className="eyebrow" data-reveal>
            {profile.eyebrow}
          </p>
          <h2 className="bio__title" data-reveal data-reveal-delay="1">
            {profile.heading}
          </h2>

          <div className="bio__manifesto" data-reveal data-reveal-delay="2">
            {profile.manifesto.map((paragraph) => (
              <p key={paragraph.slice(0, 28)}>{paragraph}</p>
            ))}
          </div>

          <p className="bio__note mono" data-reveal>
            {profile.note}
          </p>

          <div className="bio__explore" data-reveal>
            <p className="bio__explore-label mono">{profile.exploring.label}</p>
            <ul className="bio__explore-list">
              {profile.exploring.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <a className="link-arrow bio__cta" href={profile.cta.href} data-reveal>
            {profile.cta.label}
            <ArrowRight className="bio__cta-arrow" />
          </a>
        </div>

        <div className="bio__right">
          {profile.capabilities.map((capability, index) => (
            <article
              className="cap"
              key={capability.id}
              style={accentStyle(capability.accent)}
              data-reveal
              data-reveal-delay={String(index + 1)}
            >
              <div className="cap__tab">
                <h3 className="cap__tab-title">{capability.title}</h3>
              </div>
              <div className="cap__body">
                <p className="cap__summary">{capability.summary}</p>
                <ul className="cap__items">
                  {capability.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
