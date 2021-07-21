import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

const ButtonSubmitForm = styled.button`
  background: #b3c8d9;
  border-radius: 5px;
  width: 100%;
  max-width: 150px;
  height: 48px;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 14px;
  text-align: center;
  color: black;
  transition: all 0.4s ease-in-out;
  border: none;
  &:hover {
    transform: scale(1.1);
    background-color: #567792;
  }
`;

interface IBtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
}
export const Button = ({ name, ...rest }: IBtnProps) => {
  return <ButtonSubmitForm {...rest}>{name}</ButtonSubmitForm>;
};
