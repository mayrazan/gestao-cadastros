import { FormHTMLAttributes, ReactNode } from "react";
import styled from "styled-components";

const FormContainer = styled.form`
  width: 100%;
  flex-wrap: wrap;
  display: flex;
  flex-shrink: 2;
  gap: 8px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

interface IFormProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
}

export const Form = ({ children, ...rest }: IFormProps) => {
  return (
    <FormContainer autoComplete="off" {...rest}>
      {children}
    </FormContainer>
  );
};
