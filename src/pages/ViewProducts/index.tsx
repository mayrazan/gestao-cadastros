import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "../../components/Button";
import { List } from "../../components/List";
import { Navbar } from "../../components/Navbar";

export const ViewProducts = () => {
  const [productList, setProductList] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const product = JSON.parse(window.localStorage.getItem("products") || "[]");
    setProductList(product);
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
      {productList.length ? (
        <List text="Produtos" type="product" products={productList} />
      ) : (
        <h3
          style={{ display: "flex", justifyContent: "center", margin: "auto" }}
        >
          Nenhum registro encontrado
        </h3>
      )}
      <Button
        name="Cadastrar Produtos"
        onClick={() => history.push("/products")}
        style={{ alignSelf: "center" }}
      />
    </div>
  );
};
