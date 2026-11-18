import { stack } from '../data';
import { ArrowUpRight } from './Marks';
import './CreativeLedger.css';

export default function CreativeLedger() {
  return (
    <section id="resume" className="ledger sheet">
      <div className="wrap">
        <header className="ledger__head">
          <p className="eyebrow" data-reveal>
            {stack.eyebrow}
          </p>
          <div className="ledger__head-row" data-reveal data-reveal-delay="1">
            <h2 className="ledger__title">{stack.heading}</h2>
            <p className="ledger__summary">{stack.summary}</p>
          </div>
        </header>

        <div className="ledger__grid">
          <div className="ledger__col">
            <div className="block" data-reveal>
              <div className="block__head">
                <h3 className="block__title">{stack.experience.title}</h3>
                <span className="block__caption mono">{stack.experience.caption}</span>
              </div>

              {stack.experience.items.map((item) => (
                <article className="entry" key={item.role}>
                  <div className="entry__top">
                    <h4 className="entry__role">{item.role}</h4>
                    <span className="entry__period mono">{item.period}</span>
                  </div>
                  <p className="entry__org mono">{item.org}</p>
                  <ul className="entry__bullets">
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div className="block" data-reveal data-reveal-delay="1">
              <div className="block__head">
                <h3 className="block__title">{stack.education.title}</h3>
                <span className="block__caption mono">{stack.education.caption}</span>
              </div>

              {stack.education.items.map((item) => (
                <article className="entry" key={item.degree}>
                  <div className="entry__top">
                    <h4 className="entry__role">{item.degree}</h4>
                    <span className="entry__period mono">{item.period}</span>
                  </div>
                  <p className="entry__org mono">{item.school}</p>
                  <p className="entry__note">{item.note}</p>
                </article>
              ))}

              <a className="link-arrow block__cta" href={stack.education.cta.href}>
                {stack.education.cta.label}
                <ArrowUpRight className="block__cta-arrow" />
              </a>
            </div>
          </div>

          <div className="ledger__col ledger__col--aside">
            <div className="block" data-reveal data-reveal-delay="1">
              <div className="block__head">
                <h3 className="block__title">{stack.techSpecs.title}</h3>
                <span className="block__caption mono">{stack.techSpecs.caption}</span>
              </div>
              <ul className="tags">
                {stack.techSpecs.tags.map((tag) => (
                  <li className="tag mono" key={tag}>
                    {tag}
                  </li>
                ))}
              </ul>
            </div>

            <div className="block" data-reveal data-reveal-delay="2">
              <div className="block__head">
                <h3 className="block__title">{stack.references.title}</h3>
                <span className="block__caption mono">{stack.references.caption}</span>
              </div>

              <div className="proofs">
                {stack.references.items.map((reference) => (
                  <figure className="proof" key={reference.name}>
                    <span className="proof__stamp mono">Proof</span>
                    <figcaption className="proof__name">{reference.name}</figcaption>
                    <p className="proof__quote">{reference.quote}</p>
                    <span className="proof__tag mono">{reference.tag}</span>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
