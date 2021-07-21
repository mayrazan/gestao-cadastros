import styled from "styled-components";

export const CardBox = styled.div`
  max-width: 200px;
  height: 300px;
  border: 1px solid #e6e8ea;
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
  transition: all 0.4s ease-in-out;
  cursor: pointer;
  width: 100%;
  align-items: center;
  gap: 10px;
  &:hover {
    background-color: #e6e8ea;
    transform: scale(1.1);
  }
`;

export const NameStyled = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  color: #7a7a7a;
`;

export const PriceStyled = styled(NameStyled)`
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  color: #000000;
`;

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  gap: 5px;
  cursor: pointer;
  width: inherit;
  align-items: center;
`;

export const QuantityStyled = styled(NameStyled)`
  font-weight: normal;
`;
