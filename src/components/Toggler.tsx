import React from "react";
import { func, string } from "prop-types";
import styled from "styled-components";
import sunSvg from "../img/svg/sun.svg";
import moonSvg from "../img/svg/moon.svg";

const Button = styled.button`
  background: ${props => props.theme.toggleButtonBackground};
  border: 2px solid gray;
  border-radius: 30px;
  cursor: pointer;
  font-size: 0.5em;
  padding: 0.5em;
  width: 7em;
  height: 5em;
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
`;

interface ToggleProps {
  theme: string;
  toggleTheme: () => void;
}

const Toggle = ({ theme, toggleTheme }: ToggleProps) => {
  return (
    <div>
      <Button onClick={toggleTheme}>
        {theme === "light" ? <Moon src={moonSvg} /> : <Sun src={sunSvg} />}
      </Button>
    </div>
  );
};
Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};
export default Toggle;
