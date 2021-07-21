import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "../../components/Button";
import { List } from "../../components/List";
import { Navbar } from "../../components/Navbar";

export const ViewClients = () => {
  const [clientList, setClientList] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const client = JSON.parse(window.localStorage.getItem("clients") || "[]");
    setClientList(client);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "calc(100vh - 80px)",
      }}
    >
      <Navbar />
      {clientList.length ? (
        <List text="Clientes" type="client" clients={clientList} />
      ) : (
        <h3
          style={{ display: "flex", justifyContent: "center", margin: "auto" }}
        >
          Nenhum registro encontrado
        </h3>
      )}
      <Button
        name="Cadastrar Clientes"
        onClick={() => history.push("/clients")}
        style={{ alignSelf: "center" }}
      />
    </div>
  );
};
