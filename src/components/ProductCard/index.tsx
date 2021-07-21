import { IProducts } from "../../interfaces";
import { Button } from "../Button";
import {
  CardBox,
  NameStyled,
  PriceStyled,
  ContainerInfo,
  QuantityStyled,
  ImgStyled,
} from "./style";

export const ProductCard = ({
  img,
  productName,
  price,
  quantity,
  removeProduct,
  updateProduct,
}: IProducts) => {
  return (
    <CardBox>
      <ImgStyled src={img} alt={img} />
      <ContainerInfo>
        <NameStyled>Produto: {productName}</NameStyled>
        <PriceStyled>R$ {price}</PriceStyled>
        <QuantityStyled>Quantidade: {quantity}</QuantityStyled>
        <Button name="Excluir" onClick={removeProduct} />
        <Button name="Atualizar" onClick={updateProduct} />
      </ContainerInfo>
    </CardBox>
  );
};
