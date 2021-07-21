import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { IFormData, IListProps } from "../../interfaces";
import { ClientCard } from "../ClientCard";
import { ProductCard } from "../ProductCard";
import { ContainerList, ContainerInfo, TextH3 } from "./style";

export const List = ({ products, text, clients, type }: IListProps) => {
  const [clientList, setClientList] = useState([]);
  const [productList, setProductList] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const client = JSON.parse(window.localStorage.getItem("clients") || "[]");
    const product = JSON.parse(window.localStorage.getItem("products") || "[]");
    setClientList(client);
    setProductList(product);
  }, []);

  const removeProduct = (id: string | undefined) => {
    const result = productList.filter((item: IFormData) => id !== item.id);
    localStorage.setItem("products", JSON.stringify(result));
    setProductList(result);
    window.location.reload();
  };

  const removeClient = (id: string | undefined) => {
    const result = clientList.filter((item: IFormData) => id !== item.id);
    localStorage.setItem("clients", JSON.stringify(result));
    setClientList(result);
    window.location.reload();
  };

  const updateClient = (id: string | undefined) => {
    history.push(`/update-client/${id}`);
  };

  const updateProduct = (id: string | undefined) => {
    history.push(`/update-product/${id}`);
  };

  return (
    <ContainerList>
      <>
        <TextH3>{text}</TextH3>
      </>

      <ContainerInfo>
        {type === "product"
          ? products?.map((item) => {
              return (
                <ProductCard
                  key={item.id}
                  productName={item.productName}
                  img={item.img}
                  price={item.price}
                  quantity={item.quantity}
                  removeProduct={() => removeProduct(item.id)}
                  updateProduct={() => updateProduct(item.id)}
                />
              );
            })
          : clients?.map((item) => {
              return (
                <ClientCard
                  key={item.id}
                  name={item.name}
                  address={item.address}
                  city={item.city}
                  birthDate={item.birthDate}
                  uf={item.uf}
                  removeClient={() => removeClient(item.id)}
                  updateClient={() => updateClient(item.id)}
                />
              );
            })}
      </ContainerInfo>
    </ContainerList>
  );
};
