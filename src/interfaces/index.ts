import { FormEvent } from "react";

export interface IProducts {
  id?: string;
  productName: string;
  img: string;
  price: number;
  quantity: number;
  removeProduct: () => void;
  updateProduct: () => void;
}

export interface IClients {
  id?: string;
  name: string;
  birthDate: Date;
  address: string;
  city: string;
  cep?: string;
  uf?: string;
  phone?: string;
  email?: string;
  removeClient: () => void;
  updateClient: () => void;
}

export interface IListProps {
  products?: IProducts[];
  clients?: IClients[];
  text: string;
  type: "product" | "client";
}

export interface IFormData {
  id: string;
  name?: FormDataEntryValue | null;
  email?: FormDataEntryValue | null;
  birthDate?: FormDataEntryValue | null;
  phone?: FormDataEntryValue | null;
  cep?: FormDataEntryValue | null;
  address?: FormDataEntryValue | null;
  city?: FormDataEntryValue | null;
  uf?: string;
  productName?: FormDataEntryValue | null;
  img?: FormDataEntryValue | null;
  price?: FormDataEntryValue | null;
  quantity?: FormDataEntryValue | null;
}

export interface IHandleSubmit extends FormEvent<HTMLFormElement> {
  event: FormEvent<HTMLFormElement> & EventTarget;
  preventDefault(): EventTarget;
  currentTarget: HTMLFormElement;
}

export interface IData {
  localidade?: string;
  uf?: string;
  logradouro?: string;
}

export interface IFormProps extends Object {
  data?: IData;
  erro?: boolean;
  message?: string;
}
