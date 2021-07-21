import styled, { css } from "styled-components";
import { media } from "../../styles/media";

export const ContainerSectionForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  background-color: #93a9bd;
  min-height: calc(100vh - 80px);
`;

export const TitleForm = styled.h3`
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 22px;
  color: aliceblue;
  ${media.custom(540)} {
    font-size: 3vw;
  }
  ${media.custom(420)} {
    font-size: 4vw;
  }
`;

interface IMessage {
  isMessageDisplayedSuccess?: boolean;
  isMessageDisplayedWarning?: boolean;
  messageSuccess?: boolean;
  messageError?: boolean;
}

const isMessageDisplayedWarning = css`
  color: red;
`;

const isMessageDisplayedSuccess = css`
  color: green;
`;

export const TextMessageStyled = styled.span<IMessage>`
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 14px;
  display: flex;
  align-items: center;
  text-align: center;
  ${({ messageSuccess }) =>
    messageSuccess &&
    css`
       {
        ${() => isMessageDisplayedSuccess};
      }
    `}
  ${({ messageError }) =>
    messageError &&
    css`
       {
        ${() => isMessageDisplayedWarning};
      }
    `}
`;
