import { useState, useRef } from "react";
import stiler from "./CookieBanner.module.css";

const CookieBanner = () => {
  const [synlig, setSynlig] = useState(true);
  const [avvistPos, setAvvistPos] = useState({ top: "auto", left: "auto" });
  const beholderRef = useRef<HTMLDivElement>(null);

  if (!synlig) return null;

  const flytt = () => {
    const beholder = beholderRef.current;
    if (!beholder) return;
    const { width, height } = beholder.getBoundingClientRect();
    const knappW = 80;
    const knappH = 30;
    const maxX = width - knappW - 8;
    const maxY = height - knappH - 8;
    setAvvistPos({
      top: `${Math.max(8, Math.random() * maxY)}px`,
      left: `${Math.max(8, Math.random() * maxX)}px`,
    });
  };

  const håndterAvvis = () => {
    // "Avvis" technically works, but let's make it hard
    setSynlig(false);
    setTimeout(() => setSynlig(true), 4000);
  };

  return (
    <div className={stiler.banner}>
      <div className={stiler.tekst}>
        <strong>Vi bruker informasjonskapsler 🍪</strong>
        <p>
          Ved å klikke «Godta» samtykker du til all sporing, deling med
          tredjeparter, og at vi leser tankene dine.
        </p>
      </div>
      <div className={stiler.knapper} ref={beholderRef}>
        <button className={stiler.godta} onClick={() => setSynlig(false)}>
          Godta alle
        </button>
        <button
          className={stiler.avvis}
          style={{
            position: avvistPos.top !== "auto" ? "absolute" : "relative",
            top: avvistPos.top,
            left: avvistPos.left,
          }}
          onMouseEnter={flytt}
          onClick={håndterAvvis}
        >
          Avvis
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
