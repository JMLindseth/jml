import Page from "../Page";
import styled from "styled-components";
import {Wave} from "react-animated-text";

const texts = {
  title: "Velkommen!",
  buzzwords: [
    'Synergy',
    'Sustainability',
    'Innovation',
    'Equality',
    'Streamlined',
  ],
}

const Buzzword = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1em;
  font-size: 10em;
`

const Homepage = () => {
  return (<Page title={texts.title}>
    <Buzzword>
      <Wave
        text={randomWord()}
        speed={4}
        iterations={1}
        effect="verticalFadeIn"
        effectChange={2}
        effectDuration={0.7}
      />
    </Buzzword>
  </Page>)
}

const randomWord = () => {
  const randomIndex = Math.floor(Math.random() * texts.buzzwords.length);

  return texts.buzzwords[randomIndex];
}

export default Homepage;
