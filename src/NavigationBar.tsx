import styled from 'styled-components';

const NavigationBarGrid = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const LinkRightPadded = styled.a`
  padding-right: 1em;
`

const texts = {
  home: "Home!",
  snake: "Snake",
}

const NavigationBar = () => {
  return (<NavigationBarGrid>
    <LinkRightPadded href="/" className="knapp knapp--mini">
      {texts.home}
    </LinkRightPadded>
    <LinkRightPadded href="/snake" className="knapp knapp--mini">
      {texts.snake}
    </LinkRightPadded>
  </NavigationBarGrid>)
}

export default NavigationBar;
