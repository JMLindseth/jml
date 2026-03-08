import { useEffect, useRef } from "react";
import Side from "../../Page";
import stiler from "./Forside.module.css";

const Forside = () => {
  const søkeboksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const oppdaterGlød = (e: MouseEvent) => {
      const el = søkeboksRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      // Beregn musepeker-posisjon relativt til elementets senter
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      el.style.setProperty("--glød-x", `${x}px`);
      el.style.setProperty("--glød-y", `${y}px`);

      // Beregn avstand fra musepekeren til nærmeste punkt på elementet
      const nærmestX = Math.max(0, Math.min(x, rect.width));
      const nærmestY = Math.max(0, Math.min(y, rect.height));
      const avstand = Math.hypot(x - nærmestX, y - nærmestY);
      const rekkevidde = 200;
      const styrke = Math.max(0, 1 - avstand / rekkevidde);

      el.style.setProperty("--glød-styrke", String(styrke));
    };

    window.addEventListener("mousemove", oppdaterGlød);
    return () => window.removeEventListener("mousemove", oppdaterGlød);
  }, []);

  return (
    <Side>
      <div className={stiler.søkeboks}>
        <div ref={søkeboksRef} className={stiler.glødWrapper}>
          <input
            className={stiler.søkefelt}
            type="search"
            placeholder="Søk…"
            aria-label="Søk på nettstedet"
          />
        </div>
      </div>
    </Side>
  );
};

export default Forside;
