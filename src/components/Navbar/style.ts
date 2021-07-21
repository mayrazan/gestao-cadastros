import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  flex-wrap: wrap;
  height: 80px;
  border-bottom: 1px solid #b3c8d9;
  background-color: #b3c8d9;
`;

export const ContainerNavInfo = styled.nav`
  display: flex;
  align-items: center;
  flex-grow: 2;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export const Text = styled(Link)`
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  text-decoration: none;
  color: black;
  &:hover {
    transform: scale(1.3);
    font-weight: bold;
  }
`;
