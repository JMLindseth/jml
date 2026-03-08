import Side from "../../Page";
import stiler from "./Forside.module.css";

const Forside = () => {
  return (
    <Side>
      <div className={stiler.søkeboks}>
        <input
          className={stiler.søkefelt}
          type="search"
          placeholder="Søk…"
          aria-label="Søk på nettstedet"
        />
      </div>
    </Side>
  );
};

export default Forside;
