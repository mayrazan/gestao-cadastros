import styled from "styled-components";
import { media } from "../../styles/media";

export const ContainerList = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  flex-direction: column;
  width: 100%;
  height: auto;
  align-items: center;
  margin: auto;
`;

export const ContainerInfo = styled.div`
  display: flex;
  /* flex-direction: column; */
  background-color: white;
  padding: 20px 0 20px 0;
  gap: 20px;
  align-items: center;
  width: 100%;
  justify-content: center;
  height: inherit;
  flex-wrap: wrap;
`;

export const TextH3 = styled.h3`
  color: #7a7a7a;
  font-size: calc(1vw + 2vmin);
  ${media.custom(490)} {
    font-size: 4vw;
  }
  ${media.custom(300)} {
    font-size: 5.5vw;
  }
`;
