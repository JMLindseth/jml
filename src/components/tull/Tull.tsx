import Side from "../../Page";
import CookieBanner from "./CookieBanner";
import NewsletterModal from "./NewsletterModal";
import ChatBot from "./ChatBot";
import stiler from "./Tull.module.css";

const Tull = () => {
  return (
    <Side>
      <div className={stiler.innhold}>
        <h1 className={stiler.tittel}>Velkommen!</h1>
        <p className={stiler.ingress}>
          Dette er en helt vanlig nettside. Ingen ting å bekymre seg for.
        </p>
      </div>
      <CookieBanner />
      <NewsletterModal />
      <ChatBot />
    </Side>
  );
};

export default Tull;
