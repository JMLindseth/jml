import { useEffect, useCallback } from "react";
import { bildUrl } from "../../utils/cloudinary";
import stiler from "./Lightbox.module.css";

interface LightboxProps {
  bilder: string[];
  startIndeks: number;
  onLukk: () => void;
  onForrige: () => void;
  onNeste: () => void;
}

const Lightbox = ({ bilder, startIndeks, onLukk, onForrige, onNeste }: LightboxProps) => {
  const håndterTast = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onLukk();
      if (e.key === "ArrowLeft") onForrige();
      if (e.key === "ArrowRight") onNeste();
    },
    [onLukk, onForrige, onNeste]
  );

  useEffect(() => {
    document.addEventListener("keydown", håndterTast);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", håndterTast);
      document.body.style.overflow = "";
    };
  }, [håndterTast]);

  const erFørste = startIndeks === 0;
  const erSiste = startIndeks === bilder.length - 1;

  return (
    <div
      className={stiler.bakgrunn}
      onClick={onLukk}
      role="dialog"
      aria-modal="true"
      aria-label="Bildevisning"
    >
      <button className={stiler.lukkKnapp} onClick={onLukk} aria-label="Lukk">
        ✕
      </button>

      {!erFørste && (
        <button
          className={`${stiler.navKnapp} ${stiler.forrige}`}
          onClick={(e) => { e.stopPropagation(); onForrige(); }}
          aria-label="Forrige bilde"
        >
          ‹
        </button>
      )}

      <div className={stiler.bildeWrapper} onClick={(e) => e.stopPropagation()}>
        <img
          key={bilder[startIndeks]}
          src={bildUrl(bilder[startIndeks], 1920)}
          alt={`Bilde ${startIndeks + 1} av ${bilder.length}`}
          className={stiler.bilde}
        />
      </div>

      {!erSiste && (
        <button
          className={`${stiler.navKnapp} ${stiler.neste}`}
          onClick={(e) => { e.stopPropagation(); onNeste(); }}
          aria-label="Neste bilde"
        >
          ›
        </button>
      )}

      <div className={stiler.teller} onClick={(e) => e.stopPropagation()}>
        {startIndeks + 1} / {bilder.length}
      </div>
    </div>
  );
};

export default Lightbox;
