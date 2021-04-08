import SnakeGame from "./SnakeGame";
import Page from "../../Page";
import styled from "styled-components";

const texts = {
  title: 'Snake!'
}

const SnakeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const SnakePage = () => {
  return (<Page title={texts.title}>
    <SnakeWrapper>
      <h1>{texts.title}</h1>
      <SnakeGame/>
    </SnakeWrapper>
  </Page>)
}

export default SnakePage;
