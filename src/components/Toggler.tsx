import React from 'react'
import { func, string } from 'prop-types';
import styled from 'styled-components';
import sunSvg from "../img/svg/sun.svg";
import moonSvg from "../img/svg/moon.svg";

const Button = styled.button`
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 30px;
  cursor: pointer;
  font-size: 0.5rem;
  justify-content: space-between;
  margin: 0 auto;
  overflow: hidden;
  padding: 0.5em;
  position: relative;
  width: 10em;
  height: 5em;
  outline: none;
}
`;

const Sun = styled.img`
 height: auto;
 width: 3em;
 transition: all 0.7s linear;
`;

const Moon = styled.img`
  height: auto;
  width: 3em;
  transition: all 0.7s linear;
`

interface ToggleProps {
  theme: string;
  toggleTheme: () => void;
}

const Toggle = ({ theme,  toggleTheme }: ToggleProps) => {
    return (
      <div>
        <Button onClick={toggleTheme}>
          { theme  === 'light'
            ? <Moon src={moonSvg} />
            : <Sun src={sunSvg} />
          }
        </Button>
      </div>
    );
};
Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}
export default Toggle;
