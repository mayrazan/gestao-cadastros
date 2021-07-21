import { InputHTMLAttributes } from "react";
import styled from "styled-components";

const InputStyled = styled.input`
  max-width: 280px;
  width: 100%;
  height: 48px;
  background: #ffffff;
  border-radius: 5px;
  border: #ffffff;
  &:focus {
    border: #ffffff;
  }
  &::placeholder {
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    color: #585858;
    padding-left: 15px;
  }
`;

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
}

export const Input = ({ placeholder, ...rest }: IInputProps) => {
  return (
    <InputStyled
      required
      placeholder={placeholder}
      autoComplete="off"
      {...rest}
    />
  );
};
