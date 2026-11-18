import type { CSSProperties } from 'react';
import './Ticker.css';

interface TickerProps {
  items: string[];
  reverse?: boolean;
  /** Seconds per loop. */
  speed?: number;
  tone?: 'ink' | 'paper';
  className?: string;
}

/**
 * 36px print index strip. Two identical groups slide -50% for a seamless loop;
 * the duplicate is hidden from assistive tech.
 */
export default function Ticker({ items, reverse = false, speed = 34, tone = 'ink', className }: TickerProps) {
  if (items.length === 0) return null;

  const style = { '--tk-speed': `${speed}s` } as CSSProperties;

  return (
    <div className={`tk tk--${tone}${className ? ` ${className}` : ''}`} style={style}>
      <div className={`tk__track${reverse ? ' is-reverse' : ''}`}>
        {[0, 1].map((copy) => (
          <div className="tk__group" key={copy} aria-hidden={copy === 1 || undefined}>
            {items.map((item, index) => (
              <span className="tk__item" key={`${copy}-${index}-${item}`}>
                {item}
                <span className="tk__sep" aria-hidden="true">
                  //
                </span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
