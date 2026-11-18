import { site } from '../data';
import { ArrowUpRight } from './Marks';
import './Colophon.css';

interface ColophonProps {
  onSurprise: () => void;
}

export default function Colophon({ onSurprise }: ColophonProps) {
  const { contact } = site;

  return (
    <footer id="contact" className="colophon">
      <div className="wrap">
        <div className="colophon__top">
          <div>
            <p className="eyebrow eyebrow--ink" data-reveal>
              {contact.eyebrow}
            </p>
            <h2 className="colophon__title" data-reveal data-reveal-delay="1">
              {contact.heading}
            </h2>
            <p className="colophon__sub" data-reveal data-reveal-delay="2">
              {contact.subtitle}
            </p>
          </div>

          <div className="colophon__mail-wrap" data-reveal data-reveal-delay="2">
            <span className="colophon__mail-label mono">{contact.emailLabel}</span>
            <a className="colophon__mail" href={`mailto:${site.email}`}>
              {site.email}
              <ArrowUpRight className="colophon__mail-arrow" />
            </a>
            <span className="colophon__handle mono">
              {site.location} · {site.handle}
            </span>
          </div>
        </div>

        <div className="colophon__socials">
          {site.socials.map((social) => (
            <a
              className="social"
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className="social__label">{social.label}</span>
              <span className="social__handle mono">{social.handle}</span>
              <ArrowUpRight className="social__arrow" />
            </a>
          ))}
        </div>

        <div className="colophon__base">
          <span className="mono">{site.colophon.copyright}</span>
          <span className="mono colophon__base-mid">{site.colophon.note}</span>
          <span className="mono colophon__base-end">{site.colophon.built}</span>
          <button type="button" className="colophon__surprise mono" onClick={onSurprise}>
            {contact.surpriseLabel}
          </button>
        </div>
      </div>
    </footer>
  );
}
