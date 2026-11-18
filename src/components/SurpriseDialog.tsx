import { useEffect, useRef } from 'react';
import { site } from '../data';
import { useBodyScrollLock, useEscapeKey } from '../hooks/useOverlay';
import { AlertMark, CloseMark } from './Marks';
import './SurpriseDialog.css';

interface SurpriseDialogProps {
  onClose: () => void;
}

export default function SurpriseDialog({ onClose }: SurpriseDialogProps) {
  const { dialog } = site;
  const confirmRef = useRef<HTMLButtonElement>(null);

  useBodyScrollLock(true);
  useEscapeKey(true, onClose);

  useEffect(() => {
    confirmRef.current?.focus();
  }, []);

  return (
    <div
      className="dlg"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        className="dlg__sheet"
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="dlg-title"
        aria-describedby="dlg-message"
      >
        <div className="dlg__bar">
          <span className="dlg__bar-dots" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span className="dlg__bar-title mono" id="dlg-title">
            {dialog.title}
          </span>
          <button type="button" className="dlg__x" onClick={onClose} aria-label="Close dialog">
            <CloseMark className="dlg__x-mark" />
          </button>
        </div>

        <div className="dlg__body">
          <AlertMark className="dlg__icon" />
          <p className="dlg__message" id="dlg-message">
            {dialog.message}
          </p>
          <p className="dlg__detail mono">{dialog.detail}</p>

          <div className="dlg__actions">
            <button type="button" className="btn dlg__confirm" onClick={onClose} ref={confirmRef}>
              {dialog.confirm}
            </button>
            <button type="button" className="btn btn--outline" onClick={onClose}>
              {dialog.dismiss}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
