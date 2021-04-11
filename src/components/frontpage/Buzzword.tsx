import { Wave } from "react-animated-text";
import styled from "styled-components";
import { randomElementFromArray } from "../../utils/arrayUtils";

const texts = {
  buzzwords: [
    "Synergy",
    "Sustainability",
    "Innovation",
    "Equality",
    "Streamlined",
  ],
};

const BuzzwordBox = styled.div`
  font-size: min(10vw, 10em);
`;

const Buzzword = () => {
  return (
    <BuzzwordBox>
      <Wave
        text={randomElementFromArray(texts.buzzwords)}
        speed={4}
        iterations={1}
        effect="verticalFadeIn"
        effectChange={2}
        effectDuration={0.7}
      />
    </BuzzwordBox>
  );
};

export default Buzzword;
