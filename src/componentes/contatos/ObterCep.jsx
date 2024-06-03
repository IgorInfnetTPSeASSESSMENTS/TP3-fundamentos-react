  import { useState } from "react";
  import Endereco from "./Endereco";

  export default function ObterCep() {

    const [endereco, setEndereco] = useState({});
    const [erro, setErro] = useState(false);

    function handleClick() {
      const input = document.getElementById("input");
      const url = `https://viacep.com.br/ws/${input.value}/json/`;

      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Erro ao buscar o CEP');
          }
          return response.json();
        })
        .then((data) => {
          const endereco = {
            CEP: data.cep,
            logradouro: data.logradouro,
            complemento: data.complemento ? data.complemento : "Não existe complemento",
            bairro: data.bairro,
            localidade: data.localidade,
            UF: data.uf
          }
          setEndereco(endereco);
          setErro(false);
        })
        .catch((error) => {
          console.error(error);
          setErro(true);
        });
    }

    return (
      <div className="flex items-center justify-center h-screen">
        <div>
          <div className="flex items-center justify-center">
            <label htmlFor="input" className="mr-2">Digite um CEP válido:</label>
            <input id="input" placeholder="Digite aqui..." className="mr-2"></input>
            <button onClick={handleClick} className="bg-blue-500 text-white px-4 py-2 rounded">Buscar</button>
          </div>
          <div>
            <Endereco endereco={endereco}></Endereco>
            {erro && <p className="text-red-500">Erro ao buscar o CEP, verifique se digitou corretamente, ex: 01001000</p>}
          </div>
        </div>
      </div>
    )
  }
