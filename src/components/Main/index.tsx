import { ReactNode } from "react";
import styled from "styled-components";

const MainStyled = styled.main`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

interface IMainProps {
  children: ReactNode;
}

export const Main = ({ children }: IMainProps) => {
  return <MainStyled>{children}</MainStyled>;
};
