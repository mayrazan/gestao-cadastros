import { useHistory } from "react-router-dom";
import { Button } from "../../components/Button";
import { Main } from "../../components/Main";
import { Navbar } from "../../components/Navbar";
import { Title } from "../../components/Title";

export const Home = () => {
  const history = useHistory();

  const goTo = (path: string) => {
    history.push(path);
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Navbar />
      <Main>
        <Title />
        <Button name="Cadastrar Clientes" onClick={() => goTo("/clients")} />
        <Button name="Cadastrar Produtos" onClick={() => goTo("/products")} />
      </Main>
    </div>
  );
};
