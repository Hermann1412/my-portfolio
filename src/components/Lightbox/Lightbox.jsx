import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './Lightbox.module.css';
import { getImageUrl } from '../../utils';

export const Lightbox = ({ images, index, onClose, onPrev, onNext, onGoTo }) => {
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && images.length > 1) onPrev();
      if (e.key === 'ArrowRight' && images.length > 1) onNext();
    };
    document.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [images.length, onClose, onPrev, onNext]);

  return createPortal(
    <div className={styles.backdrop} onClick={onClose}>
      <button className={styles.closeBtn} onClick={onClose} aria-label="Close">✕</button>

      {images.length > 1 && (
        <button
          className={`${styles.navBtn} ${styles.prev}`}
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          aria-label="Previous"
        >
          ‹
        </button>
      )}

      <div className={styles.imgWrapper} onClick={(e) => e.stopPropagation()}>
        <img
          src={getImageUrl(images[index])}
          alt={`Screenshot ${index + 1}`}
          className={styles.img}
        />
        {images.length > 1 && (
          <span className={styles.counter}>{index + 1} / {images.length}</span>
        )}
      </div>

      {images.length > 1 && (
        <button
          className={`${styles.navBtn} ${styles.next}`}
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          aria-label="Next"
        >
          ›
        </button>
      )}

      {images.length > 1 && (
        <div className={styles.thumbs} onClick={(e) => e.stopPropagation()}>
          {images.map((img, i) => (
            <img
              key={i}
              src={getImageUrl(img)}
              alt={`Thumbnail ${i + 1}`}
              className={`${styles.thumb} ${i === index ? styles.thumbActive : ''}`}
              onClick={() => onGoTo(i)}
            />
          ))}
        </div>
      )}
    </div>,
    document.body
  );
};
