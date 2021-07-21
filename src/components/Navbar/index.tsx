import { HeaderStyled, ContainerNavInfo, Text } from "./style";

export const Navbar = () => {
  return (
    <HeaderStyled>
      <ContainerNavInfo>
        <Text to="/">Home</Text>
        <Text to="/view-clients-list">Clientes</Text>
        <Text to="/view-products-list">Produtos</Text>
      </ContainerNavInfo>
    </HeaderStyled>
  );
};
