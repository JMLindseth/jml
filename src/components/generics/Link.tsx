import styled from "styled-components";

const Link = styled.a`
  padding: 0 0.5em;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 1em;
  white-space: nowrap;
  border-radius: 0.125em;
  cursor: pointer;
  user-select: none;
  letter-spacing: 0.0625em;
  line-height: 1.375rem;
  text-transform: uppercase;
  text-decoration: none;
  background-color: ${({ theme }) => theme.button.background};
  padding: ~"calc(.475rem - 1px) 2.5rem calc(.525rem - 1px) 2.5rem";
  min-height: 2.5rem;
  vertical-align: middle;
  color: ${({ theme }) => theme.button.text};

  &:focus,
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${({ theme }) => theme.button.hoverShadow};
  }
`;
export default Link;
