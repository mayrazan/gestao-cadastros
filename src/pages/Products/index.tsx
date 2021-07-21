import { Button } from "../../components/Button";
import { Form } from "../../components/Form";
import { Input } from "../../components/Input";
import { Navbar } from "../../components/Navbar";
import { useForm } from "../../hooks/useForm";
import { ContainerSectionForm, TextMessageStyled, TitleForm } from "./style";

export const Products = () => {
  const { handleSubmitProducts, messageError, messageSuccess } = useForm();

  return (
    <>
      <Navbar />
      <ContainerSectionForm>
        <TitleForm>Cadastro de Produtos</TitleForm>
        <Form onSubmit={handleSubmitProducts}>
          <Input
            type="text"
            placeholder="Digite o produto"
            name="productName"
            id="productName"
            required
          />
          <Input
            type="url"
            name="img"
            id="img"
            required
            placeholder="Digite a url da imagem"
          />
          <Input
            type="text"
            name="price"
            id="price"
            required
            placeholder="Digite o preço. Ex: 14.05"
          />
          <Input
            type="number"
            name="quantity"
            id="quantity"
            required
            placeholder="Digite a quantidade"
          />

          <Button type="submit" name="Cadastrar" />
        </Form>
        {messageSuccess && (
          <TextMessageStyled messageSuccess={messageSuccess}>
            Cadastro realizado com sucesso!
          </TextMessageStyled>
        )}
        {messageError && (
          <TextMessageStyled messageError={messageError}>
            Produto já cadastrado! Tente novamente.
          </TextMessageStyled>
        )}
      </ContainerSectionForm>
    </>
  );
};
