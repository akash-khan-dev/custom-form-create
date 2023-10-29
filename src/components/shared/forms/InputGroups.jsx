/* eslint-disable react/prop-types */
import TextInputs from "../../UI/inputs/TextInput";
import styled from "styled-components";
import Label from "./Label";

const Container = styled.div`
  width: 100%;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 14px;
`;
const InputGroups = ({
  label,
  name,
  placeholder,
  error,
  onChange,
  onFocus,
  onBlur,
  value,
}) => {
  return (
    <>
      <Container>
        <Label htmlFor={name}>{label}</Label>
        <TextInputs
          name={name}
          id={name}
          placeholder={placeholder ?? ""}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </Container>
    </>
  );
};

export default InputGroups;
