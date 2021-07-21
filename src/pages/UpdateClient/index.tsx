import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "../../components/Button";
import { Form } from "../../components/Form";
import { Input } from "../../components/Input";
import { Navbar } from "../../components/Navbar";
import { IHandleSubmit } from "../../interfaces";
import {
  ContainerSectionForm,
  TextMessageStyled,
  TitleForm,
} from "../Clients/style";

interface IForm {
  id: string;
  name: string;
  email: string;
  birthDate: string;
  phone: string;
  cep: string;
  address: string;
  city: string;
  uf: string;
}

export const UpdateClient = () => {
  const [currentClient, setCurrentClient] = useState([]);
  const [clients, setClients] = useState<any[]>([]);
  const [messageSuccess, setMessageSuccess] = useState(false);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const client = JSON.parse(window.localStorage.getItem("clients") || "[]");
    if (client) {
      const result = client.filter((item: IForm) => id === item.id);

      setCurrentClient(result);
      setClients(client);
    }
  }, [id]);

  const handleSubmit = (event: IHandleSubmit) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const getAdrress = (
      window.document.querySelector("input[name=address]") as HTMLInputElement
    ).value;
    const getCity = (
      window.document.querySelector("input[name=city]") as HTMLInputElement
    ).value;
    const getCep = (
      window.document.querySelector("input[name=cep]") as HTMLInputElement
    ).value;
    const getUf = (
      window.document.querySelector("input[name=uf]") as HTMLInputElement
    ).value;

    const formValues = {
      id: id,
      name: formData.get("name"),
      email: formData.get("email"),
      birthDate: formData.get("birthDate"),
      phone: formData.get("phone"),
      cep: getCep,
      address: getAdrress,
      city: getCity,
      uf: getUf,
    };

    const result = clients.filter((item: IForm) => id !== item.id);

    setClients([...result, formValues]);

    window.localStorage.setItem(
      "clients",
      JSON.stringify([...result, formValues])
    );
    setMessageSuccess(true);
  };

  return (
    <>
      <Navbar />
      <ContainerSectionForm>
        <TitleForm>Cliente</TitleForm>
        <Form onSubmit={handleSubmit}>
          {currentClient.map((item: IForm, index) => (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                alignItems: "center",
                width: "inherit",
              }}
              key={index}
            >
              <Input
                type="text"
                placeholder="Digite o nome"
                name="name"
                id="name"
                required
                defaultValue={item.name}
              />
              <Input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Digite o email"
                defaultValue={item.email}
              />
              <Input
                type="date"
                name="birthDate"
                id="birthDate"
                required
                placeholder="Digite a data de nascimento"
                defaultValue={item.birthDate}
              />
              <Input
                type="tel"
                name="phone"
                id="phone"
                required
                placeholder="Digite o telefone"
                defaultValue={item.phone}
              />
              <Input
                type="search"
                name="cep"
                id="cep"
                required
                placeholder="Digite o cep"
                defaultValue={item.cep}
                disabled
              />

              <Input
                type="text"
                name="address"
                id="address"
                required
                placeholder="Digite o endereço"
                defaultValue={item.address}
                disabled
              />
              <Input
                type="text"
                name="city"
                id="city"
                required
                placeholder="Digite a cidade"
                defaultValue={item.city}
                disabled
              />
              <Input
                type="text"
                name="uf"
                id="uf"
                required
                placeholder="Digite o estado"
                defaultValue={item.uf}
                disabled
              />
            </div>
          ))}

          <Button type="submit" name="Atualizar" />
        </Form>
        {messageSuccess && (
          <TextMessageStyled messageSuccess={messageSuccess}>
            Atualização realizada com sucesso!
          </TextMessageStyled>
        )}
      </ContainerSectionForm>
    </>
  );
};
