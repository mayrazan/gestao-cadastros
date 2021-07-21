import { IClients } from "../../interfaces";
import { Button } from "../Button";
import {
  CardBox,
  NameStyled,
  PriceStyled,
  ContainerInfo,
  QuantityStyled,
} from "./style";

export const ClientCard = ({
  name,
  birthDate,
  address,
  city,
  uf,
  removeClient,
  updateClient,
}: IClients) => {
  const newDate = new Date(birthDate);
  return (
    <CardBox>
      <ContainerInfo>
        <NameStyled>{name}</NameStyled>
        <QuantityStyled>
          {newDate.toLocaleDateString("pt-BR", { timeZone: "UTC" })}
        </QuantityStyled>
        <PriceStyled>{address}</PriceStyled>
        <QuantityStyled>
          {city}/{uf}
        </QuantityStyled>
      </ContainerInfo>
      <Button name="Excluir" onClick={removeClient} />
      <Button name="Atualizar" onClick={updateClient} />
    </CardBox>
  );
};
