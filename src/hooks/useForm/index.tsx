import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { IFormData, IFormProps, IHandleSubmit } from "../../interfaces";
import { getCep } from "../../services/getCepApi";

export const useForm = () => {
  const [messageSuccess, setMessageSuccess] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [form, setForm] = useState({} as IFormProps);
  const [cep, setCep] = useState("");

  const onFocusInputCep = () => {
    if (cep) {
      getCep(cep).then((res) => setForm(res));
    }
  };

  const handleSubmitProducts = (event: IHandleSubmit) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const formValues = {
      id: uuidv4(),
      productName: formData.get("productName"),
      img: formData.get("img"),
      price: formData.get("price"),
      quantity: formData.get("quantity"),
    };

    let hasData: IFormData[] =
      JSON.parse(localStorage.getItem("products") || "[]") || [];

    if (hasData) {
      const hasEmail = hasData.find(
        (item: IFormData) => item.productName === formData.get("productName")
      );

      if (!hasEmail) {
        hasData.push(formValues);
        localStorage.setItem("products", JSON.stringify(hasData));
        setMessageSuccess(true);
        setTimeout(() => {
          setMessageSuccess(false);
        }, 2300);
      } else {
        setMessageError(true);
        setTimeout(() => {
          setMessageError(false);
        }, 2300);
      }
    } else {
      localStorage.setItem("products", JSON.stringify(formValues));
      setMessageSuccess(true);
      setTimeout(() => {
        setMessageSuccess(false);
      }, 2300);
    }
    event.currentTarget.reset();
  };

  const handleSubmit = (event: IHandleSubmit) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const formValues = {
      id: uuidv4(),
      name: formData.get("name"),
      email: formData.get("email"),
      birthDate: formData.get("birthDate"),
      phone: formData.get("phone"),
      cep: formData.get("cep"),
      address: form.data?.logradouro,
      city: form.data?.localidade,
      uf: form.data?.uf,
    };

    let hasData: IFormData[] =
      JSON.parse(localStorage.getItem("clients") || "[]") || [];

    if (hasData) {
      const hasEmail = hasData.find(
        (item: IFormData) => item.email === formData.get("email")
      );

      if (!hasEmail) {
        hasData.push(formValues);
        localStorage.setItem("clients", JSON.stringify(hasData));
        setMessageSuccess(true);
        setTimeout(() => {
          setMessageSuccess(false);
        }, 2300);
      } else {
        setMessageError(true);
        setTimeout(() => {
          setMessageError(false);
        }, 2300);
      }
    } else {
      localStorage.setItem("clients", JSON.stringify(formValues));
      setMessageSuccess(true);
      setTimeout(() => {
        setMessageSuccess(false);
      }, 2300);
    }
    event.currentTarget.reset();
    setForm({} as IFormProps);
    setCep("");
  };

  return {
    messageError,
    messageSuccess,
    handleSubmitProducts,
    onFocusInputCep,
    cep,
    setCep,
    form,
    handleSubmit,
  };
};
