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
  codebox: "codebox",
}

interface LinkProps {
  text: string;
  href: string;
}

const Link = ({text, href}: LinkProps) => {
  return(<LinkRightPadded href={href}>
    {text}
  </LinkRightPadded>)
}

const NavigationBar = () => {
  return (<NavigationBarGrid>
    <Link text={texts.home} href={'/'} />
    <Link text={texts.snake} href={'/snake'} />
    <Link text={texts.codebox} href={'/codebox'} />
  </NavigationBarGrid>)
}

export default NavigationBar;
