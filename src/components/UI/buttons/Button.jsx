import styled from "styled-components";

const Button = styled.button`
  border: none;
  outline: none;
  background: #e1e1e1;
  border-radius: 0.15rem;
  color: #333;
  padding: 0.25rem 1rem;
  font-size: 0.9rem;
  font-family: Arial;
  font-weight: 500;
  letter-spacing: 0.1 rem;
  cursor: pointer;
  text-transform: uppercase;
  &:focus {
    background-color: #ccc;
  }
`;

export default Button;
