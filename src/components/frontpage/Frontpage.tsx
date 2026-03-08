import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Side from "../../Page";
import stiler from "./Forside.module.css";

const Forside = () => {
  const søkeboksRef = useRef<HTMLDivElement>(null);
  const [søkeTekst, setSøkeTekst] = useState("");
  const naviger = useNavigate();

  useEffect(() => {
    const oppdaterGlød = (e: MouseEvent) => {
      const el = søkeboksRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      el.style.setProperty("--glød-x", `${x}px`);
      el.style.setProperty("--glød-y", `${y}px`);

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

  const håndterSøk = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmet = søkeTekst.trim();
    if (!trimmet) return;
    naviger(`/konserter?q=${encodeURIComponent(trimmet)}`);
  };

  return (
    <Side>
      <form className={stiler.søkeboks} onSubmit={håndterSøk}>
        <div ref={søkeboksRef} className={stiler.glødWrapper}>
          <input
            className={stiler.søkefelt}
            type="search"
            placeholder="Søk…"
            aria-label="Søk på nettstedet"
            value={søkeTekst}
            onChange={(e) => setSøkeTekst(e.target.value)}
          />
        </div>
      </form>
    </Side>
  );
};

export default Forside;

