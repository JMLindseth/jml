import { useState, useEffect, useRef } from "react";
import stiler from "./NewsletterModal.module.css";

const NewsletterModal = () => {
  const [synlig, setSynlig] = useState(false);
  const [rister, setRister] = useState(false);
  const [epost, setEpost] = useState("");
  const [abonnert, setAbonnert] = useState(false);
  const risterTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setSynlig(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const forsøkLukk = () => {
    if (risterTimerRef.current) clearTimeout(risterTimerRef.current);
    setRister(true);
    risterTimerRef.current = setTimeout(() => setRister(false), 600);
  };

  const håndterAbonner = (e: React.FormEvent) => {
    e.preventDefault();
    setAbonnert(true);
    setTimeout(() => {
      setAbonnert(false);
      setSynlig(false);
    }, 2000);
  };

  if (!synlig) return null;

  return (
    <div className={stiler.overlegg} onClick={forsøkLukk}>
      <div
        className={`${stiler.modal} ${rister ? stiler.rister : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={stiler.lukkKnapp} onClick={forsøkLukk} title="Lukk">
          ×
        </button>

        {abonnert ? (
          <div className={stiler.suksess}>
            <span>🎉</span>
            <p>Takk! Du vil aldri slippe unna oss nå.</p>
          </div>
        ) : (
          <>
            <div className={stiler.ikon}>📬</div>
            <h2 className={stiler.tittel}>Vent, ikke gå!</h2>
            <p className={stiler.beskrivelse}>
              Registrer deg for nyhetsbrevet vårt og motta opptil 14 e-poster
              per dag om ting du ikke bryr deg om.
            </p>
            <form className={stiler.skjema} onSubmit={håndterAbonner}>
              <input
                className={stiler.felt}
                type="email"
                placeholder="din@epost.no"
                value={epost}
                onChange={(e) => setEpost(e.target.value)}
                required
              />
              <button className={stiler.abonnerKnapp} type="submit">
                Ja, send meg spam!
              </button>
            </form>
            <button className={stiler.avslåKnapp} onClick={forsøkLukk}>
              Nei takk, jeg hater gode ting
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default NewsletterModal;
