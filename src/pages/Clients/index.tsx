import { Button } from "../../components/Button";
import { Form } from "../../components/Form";
import { Input } from "../../components/Input";
import { Navbar } from "../../components/Navbar";
import { useForm } from "../../hooks/useForm";
import { ContainerSectionForm, TextMessageStyled, TitleForm } from "./style";

export const Clients = () => {
  const {
    handleSubmit,
    messageError,
    messageSuccess,
    onFocusInputCep,
    cep,
    setCep,
    form,
  } = useForm();

  return (
    <>
      <Navbar />
      <ContainerSectionForm>
        <TitleForm>Cadastro de Clientes</TitleForm>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Digite o nome"
            name="name"
            id="name"
            required
          />
          <Input
            type="email"
            name="email"
            id="email"
            required
            placeholder="Digite o email"
          />
          <Input
            type="date"
            name="birthDate"
            id="birthDate"
            required
            placeholder="Digite a data de nascimento"
          />
          <Input
            type="tel"
            name="phone"
            id="phone"
            required
            placeholder="Digite o telefone"
          />
          <Input
            type="search"
            name="cep"
            id="cep"
            required
            placeholder="Digite o cep. Somente números"
            value={cep}
            onChange={(e) => setCep(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                onFocusInputCep();
              }
            }}
          />

          {!form.erro && form.erro !== undefined && cep ? (
            <>
              <Input
                type="text"
                name="address"
                id="address"
                required
                placeholder="Digite o endereço"
                defaultValue={form.data?.logradouro}
                disabled
              />
              <Input
                type="text"
                name="city"
                id="city"
                required
                placeholder="Digite a cidade"
                defaultValue={form.data?.localidade}
                disabled
              />
              <Input
                type="text"
                name="uf"
                id="uf"
                required
                placeholder="Digite o estado"
                defaultValue={form.data?.uf}
                disabled
              />
            </>
          ) : (
            <TextMessageStyled messageError={form.erro}>
              {form.message}
            </TextMessageStyled>
          )}
          {cep && (
            <Button
              type="button"
              name="Pesquisar CEP"
              onClick={onFocusInputCep}
            />
          )}

          <Button type="submit" name="Cadastrar" disabled={!cep} />
        </Form>
        {messageSuccess && (
          <TextMessageStyled messageSuccess={messageSuccess}>
            Cadastro realizado com sucesso!
          </TextMessageStyled>
        )}
        {messageError && (
          <TextMessageStyled messageError={messageError}>
            E-mail já cadastrado! Tente novamente.
          </TextMessageStyled>
        )}
      </ContainerSectionForm>
    </>
  );
};
