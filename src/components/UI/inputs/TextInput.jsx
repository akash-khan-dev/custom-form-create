import styled from "styled-components";

const TextInputs = styled.input`
  width: 100%;
  border: 1px solid #efefef;
  outline: none;
  padding: 0.2rem 0.5rem;
  background: transparent;
  font-family: Arial;
  color: #333;
  border-radius: 0.3rem;
  &:focus {
    border: 2px solid skyblue;
  }
`;
export default TextInputs;
