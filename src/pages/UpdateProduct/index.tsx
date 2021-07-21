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
} from "../Products/style";

interface IForm {
  id: string;
  productName: string;
  img: string;
  price: string;
  quantity: string;
}

export const UpdateProduct = () => {
  const [currentProduct, setCurrentProduct] = useState([]);
  const [products, setProducts] = useState<any[]>([]);
  const [messageSuccess, setMessageSuccess] = useState(false);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const product = JSON.parse(window.localStorage.getItem("products") || "[]");
    if (product) {
      const result = product.filter((item: IForm) => id === item.id);

      setCurrentProduct(result);
      setProducts(product);
    }
  }, [id]);

  const handleSubmit = (event: IHandleSubmit) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const formValues = {
      id: id,
      productName: formData.get("productName"),
      img: formData.get("img"),
      price: formData.get("price"),
      quantity: formData.get("quantity"),
    };

    const result = products.filter((item: IForm) => id !== item.id);

    setProducts([...result, formValues]);

    window.localStorage.setItem(
      "products",
      JSON.stringify([...result, formValues])
    );
    setMessageSuccess(true);
  };

  return (
    <>
      <Navbar />
      <ContainerSectionForm>
        <TitleForm>Produto</TitleForm>
        <Form onSubmit={handleSubmit}>
          {currentProduct.map((item: IForm, index) => (
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
                placeholder="Digite o produto"
                name="productName"
                id="productName"
                required
                defaultValue={item.productName}
              />
              <Input
                type="text"
                name="img"
                id="img"
                required
                placeholder="Digite o email"
                defaultValue={item.img}
              />
              <Input
                type="text"
                name="price"
                id="price"
                required
                placeholder="Digite o preço. Ex: 14.05"
                defaultValue={item.price}
              />
              <Input
                type="number"
                name="quantity"
                id="quantity"
                required
                placeholder="Digite a quantidade"
                defaultValue={item.quantity}
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
