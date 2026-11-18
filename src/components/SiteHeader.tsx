import { useEffect, useState } from 'react';
import { site } from '../data';
import './SiteHeader.css';

const DESKTOP = '(min-width: 901px)';

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const query = window.matchMedia(DESKTOP);
    const onChange = (event: MediaQueryListEvent) => {
      if (event.matches) setIsOpen(false);
    };
    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, [isOpen]);

  const close = () => setIsOpen(false);

  return (
    <header className={`hdr${isScrolled ? ' is-scrolled' : ''}${isOpen ? ' is-open' : ''}`}>
      <div className="hdr__inner">
        <a className="hdr__brand" href="#home" onClick={close}>
          <span className="hdr__mark" aria-hidden="true">
            {site.initials}
          </span>
          <span className="hdr__ident">
            <span className="hdr__name">{site.name}</span>
            <span className="hdr__handle">{site.handle}</span>
          </span>
        </a>

        <nav id="primary-nav" className="hdr__nav" aria-label="Primary">
          {site.nav.map((item) => (
            <a key={item.href} className="hdr__link" href={item.href} onClick={close}>
              {item.label}
            </a>
          ))}
        </nav>

        <span className="hdr__year" aria-label={`Edition ${site.year}`}>
          {site.year}
        </span>

        <button
          type="button"
          className="hdr__toggle"
          aria-expanded={isOpen}
          aria-controls="primary-nav"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
