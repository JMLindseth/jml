import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import Side from "../../Page";
import { bildUrl } from "../../utils/cloudinary";
import type { Konsert } from "../../types/konsert";
import konserterData from "../../data/konserter.json";
import Lightbox from "../lightbox/Lightbox";
import stiler from "./Konserter.module.css";

const alleKonserter: Konsert[] = [...(konserterData as Konsert[])].sort(
  (a, b) => new Date(b.dato).getTime() - new Date(a.dato).getTime()
);

const formaterDato = (isoString: string): string => {
  return new Date(isoString).toLocaleDateString("nb-NO", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

const matcherSøk = (konsert: Konsert, søk: string): boolean => {
  const term = søk.toLowerCase();
  return (
    konsert.sted.toLowerCase().includes(term) ||
    konsert.band.some((b) => b.navn.toLowerCase().includes(term)) ||
    formaterDato(konsert.dato).toLowerCase().includes(term)
  );
};

interface ÅpentBilde {
  bilder: string[];
  indeks: number;
}

const Konserter = () => {
  const [searchParams] = useSearchParams();
  const søkeord = searchParams.get("q") ?? "";
  const [åpneKonserter, setÅpneKonserter] = useState<Set<string>>(new Set());
  const [åpentBilde, setÅpentBilde] = useState<ÅpentBilde | null>(null);
  const kortRefs = useRef<Map<string, HTMLElement>>(new Map());

  const treff = søkeord
    ? alleKonserter.filter((k) => matcherSøk(k, søkeord))
    : [];

  useEffect(() => {
    if (!søkeord || treff.length === 0) return;
    setÅpneKonserter(new Set(treff.map((k) => k.id)));
    setTimeout(() => {
      const førsteTreff = treff[0];
      kortRefs.current.get(førsteTreff.id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 50);
  }, [søkeord]);

  const toggleKonsert = (id: string) => {
    setÅpneKonserter((gjeldende) => {
      const ny = new Set(gjeldende);
      ny.has(id) ? ny.delete(id) : ny.add(id);
      return ny;
    });
  };

  return (
    <Side>
      <div className={stiler.side}>
        <h1 className={stiler.overskrift}>Konserter</h1>

        {søkeord && (
          <div className={stiler.søkeresultat}>
            <p className={stiler.søkeresultatTittel}>
              {treff.length === 0
                ? `Ingen treff for «${søkeord}»`
                : `${treff.length} treff for «${søkeord}»`}
            </p>
            {treff.length > 0 && (
              <ul className={stiler.treffListe}>
                {treff.map((k) => (
                  <li key={k.id}>
                    <button
                      className={stiler.treffKnapp}
                      onClick={() => {
                        setÅpneKonserter((s) => new Set([...s, k.id]));
                        setTimeout(() => {
                          kortRefs.current.get(k.id)?.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          });
                        }, 50);
                      }}
                    >
                      {formaterDato(k.dato)} — {k.sted} —{" "}
                      {k.band.map((b) => b.navn).join(", ")}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        <ul className={stiler.konsertListe}>
          {alleKonserter.map((konsert) => {
            const erÅpen = åpneKonserter.has(konsert.id);
            const erTreff = søkeord && matcherSøk(konsert, søkeord);

            return (
              <li
                key={konsert.id}
                ref={(el) => {
                  if (el) kortRefs.current.set(konsert.id, el);
                }}
                className={`${stiler.konsertKort} ${erTreff ? stiler.fremhevet : ""}`}
              >
                <button
                  className={stiler.konsertHeader}
                  onClick={() => toggleKonsert(konsert.id)}
                  aria-expanded={erÅpen}
                >
                  <div className={stiler.konsertInfo}>
                    <span className={stiler.dato}>{formaterDato(konsert.dato)}</span>
                    <span className={stiler.sted}>{konsert.sted}</span>
                    <span className={stiler.band}>
                      {konsert.band.map((b) => b.navn).join(" · ")}
                    </span>
                  </div>
                  <span className={stiler.pil} aria-hidden="true">
                    {erÅpen ? "▲" : "▼"}
                  </span>
                </button>

                {erÅpen && (
                  <div className={stiler.galleri}>
                    {konsert.bilder.length === 0 ? (
                      <p className={stiler.ingenBilder}>Ingen bilder ennå.</p>
                    ) : (
                      konsert.bilder.map((publicId, i) => (
                        <button
                          key={publicId}
                          className={stiler.bildKnapp}
                          onClick={() => setÅpentBilde({ bilder: konsert.bilder, indeks: i })}
                          aria-label={`Åpne bilde ${i + 1} av ${konsert.bilder.length}`}
                        >
                          <img
                            src={bildUrl(publicId, 400)}
                            alt={`${konsert.band.map((b) => b.navn).join(", ")} — bilde ${i + 1}`}
                            className={stiler.bilde}
                            loading="lazy"
                          />
                        </button>
                      ))
                    )}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      {åpentBilde && (
        <Lightbox
          bilder={åpentBilde.bilder}
          startIndeks={åpentBilde.indeks}
          onLukk={() => setÅpentBilde(null)}
          onForrige={() =>
            setÅpentBilde((b) => b && b.indeks > 0 ? { ...b, indeks: b.indeks - 1 } : b)
          }
          onNeste={() =>
            setÅpentBilde((b) =>
              b && b.indeks < b.bilder.length - 1 ? { ...b, indeks: b.indeks + 1 } : b
            )
          }
        />
      )}
    </Side>
  );
};

export default Konserter;
