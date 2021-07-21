import axios from "axios";

interface ICEP {
  data?: object;
  erro?: boolean;
  message?: string;
}

export const getCep = async (cep: string): Promise<ICEP> => {
  try {
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

    if (response.data.erro || response.data.erro !== undefined) {
      return { data: response.data, erro: true, message: "CEP inválido" };
    } else {
      return { data: response.data, erro: false };
    }
  } catch (error) {
    return { erro: true, message: "CEP inválido" };
  }
};
