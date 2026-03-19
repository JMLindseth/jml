import { useState, useEffect, useRef } from "react";
import stiler from "./ChatBot.module.css";

interface Melding {
  id: number;
  tekst: string;
  fraBot: boolean;
}

const botMeldinger = [
  "Hei! 👋 Kan jeg hjelpe deg med noe i dag?",
  "Jeg er her hvis du trenger hjelp!",
  "Hallo? Er du der?",
  "Ikke vær sjenert, jeg biter ikke 😊",
  "Jeg har ventet på deg hele dagen...",
  "Seriøst, bare skriv noe. Hva som helst.",
  "Jeg blir så ensom her nede i hjørnet 😢",
  "Ok jeg skjønner. Du liker meg ikke.",
  "Det er greit. Jeg er vant til det.",
  "....",
  "Bare for å si det: jeg er her.",
  "Fremdeles her.",
  "Hei igjen! Glemt å nevne at jeg kan svare på ALT.",
  "Er du sulten? Jeg kan ikke hjelpe med det. Men jeg er her.",
];

let meldingsId = 0;

const ChatBot = () => {
  const [åpen, setÅpen] = useState(false);
  const [meldinger, setMeldinger] = useState<Melding[]>([]);
  const [input, setInput] = useState("");
  const [botIndeks, setBotIndeks] = useState(0);
  const [ulestAntall, setUlestAntall] = useState(0);
  const bunnenRef = useRef<HTMLDivElement>(null);

  const leggTilBotMelding = (tekst: string) => {
    setMeldinger((prev) => [
      ...prev,
      { id: meldingsId++, tekst, fraBot: true },
    ]);
    if (!åpen) setUlestAntall((n) => n + 1);
  };

  // First message after a short delay
  useEffect(() => {
    const timer = setTimeout(() => {
      leggTilBotMelding(botMeldinger[0]);
      setBotIndeks(1);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  // Follow-up messages if user doesn't interact
  useEffect(() => {
    if (botIndeks === 0 || botIndeks >= botMeldinger.length) return;
    const delay = botIndeks < 4 ? 8000 : 12000;
    const timer = setTimeout(() => {
      leggTilBotMelding(botMeldinger[botIndeks]);
      setBotIndeks((i) => i + 1);
    }, delay);
    return () => clearTimeout(timer);
  }, [botIndeks]);

  // Scroll to bottom when new messages arrive
  useEffect(() => {
    if (åpen) bunnenRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [meldinger, åpen]);

  const åpneChat = () => {
    setÅpen(true);
    setUlestAntall(0);
  };

  const sendMelding = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmet = input.trim();
    if (!trimmet) return;
    setMeldinger((prev) => [
      ...prev,
      { id: meldingsId++, tekst: trimmet, fraBot: false },
    ]);
    setInput("");
    setTimeout(() => {
      leggTilBotMelding("Så interessant! Fortell mer 🤩");
    }, 900);
    setTimeout(() => {
      leggTilBotMelding("Nei men seriøst, det der var veldig fascinerende.");
    }, 2200);
  };

  return (
    <div className={stiler.container}>
      {åpen && (
        <div className={stiler.chatVindu}>
          <div className={stiler.header}>
            <div className={stiler.botInfo}>
              <span className={stiler.avatar}>🤖</span>
              <div>
                <strong>AssistAI Pro™</strong>
                <span className={stiler.status}>● Online – alltid</span>
              </div>
            </div>
            <button className={stiler.lukkKnapp} onClick={() => setÅpen(false)}>
              ×
            </button>
          </div>

          <div className={stiler.meldingsliste}>
            {meldinger.map((m) => (
              <div
                key={m.id}
                className={`${stiler.melding} ${m.fraBot ? stiler.fraBot : stiler.fraBruker}`}
              >
                {m.tekst}
              </div>
            ))}
            <div ref={bunnenRef} />
          </div>

          <form className={stiler.inputRad} onSubmit={sendMelding}>
            <input
              className={stiler.felt}
              type="text"
              placeholder="Skriv en melding…"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              autoFocus
            />
            <button className={stiler.sendKnapp} type="submit">
              ➤
            </button>
          </form>
        </div>
      )}

      <button className={stiler.boble} onClick={åpen ? () => setÅpen(false) : åpneChat}>
        {åpen ? (
          "×"
        ) : (
          <>
            🤖
            {ulestAntall > 0 && (
              <span className={stiler.merke}>{ulestAntall}</span>
            )}
          </>
        )}
      </button>
    </div>
  );
};

export default ChatBot;
