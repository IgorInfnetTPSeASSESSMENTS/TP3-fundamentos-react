import { useEffect, useState } from 'react';
import './App.css';
import { faker } from '@faker-js/faker';
import Atencao from './componentes/msg/Atencao';
import Erro from './componentes/msg/Erro';
import Sucesso from './componentes/msg/Sucesso';
import Login from './componentes/login/Login';
import CriarConta from './componentes/login/CriarConta';
import Contato from './componentes/contatos/Contato';
import ListaContatos from './componentes/contatos/ListaContatos';
import Endereco from './componentes/contatos/Endereco';
import ObterCep from './componentes/contatos/ObterCep';
import ListaCategorias from './componentes/refeicoes/ListaCategorias';

export default function App() {
  
  const [erro, setErro] = useState("Título Existe!");
  const [atencao, setAtencao] = useState("Existe um título!");
  const [sucesso, setSucesso] = useState("Título existente :)!");
  const [contato, setContato] = useState({nome: "Igor Antonio", email: "igorantonio@gmail.com", telefone: "31999999999"});
  const [contatos, setContatos] = useState([]);
  const [endereco, setEndereco] = useState([]);

  useEffect(() => {
    const endereco = {
      CEP: "01450000",
      logradouro: "Rua do Brasil",
      complemento: "Apto. 101",
      bairro: "Copacabana",
      localidade: "Rio de Janeiro",
      UF: "RJ"
    }
    setEndereco(endereco)
  }, []);

  useEffect(() => {
    const novosContatos = [];
    for (let i = 0; i < 10; i++) {
      const contato = {
        nome: faker.person.fullName(),
        email: faker.internet.email(),
        telefone: faker.phone.number(),
      };
      novosContatos.push(contato);
    }
    setContatos(novosContatos);
  }, []); 

  function esvaziarTitulos() {
    setErro("");
    setAtencao("");
    setSucesso("");
  }

  function preencherTitulos() {
    setErro("Título Novo!");
    setAtencao("Título Novo!");
    setSucesso("Título Novo!");
  }

  return (
    <div>
     {/*  <Erro titulo={erro} mensagem={"Bom dia!"}></Erro>
      <Atencao titulo={atencao} mensagem={"Boa tarde!"}></Atencao>
      <Sucesso titulo={sucesso} mensagem={"Boa noite!"}></Sucesso>
      <div className="max-w-md mx-auto px-4 py-3 rounded relative">
        <button onClick={esvaziarTitulos} className="mt-5 p-2 bg-red-500 text-white rounded">
        Esvaziar Titulos
      </button>
      <button onClick={preencherTitulos} className="mt-5 p-2 bg-green-500 text-white rounded mx-10">
        Preencher Titulos
      </button>
      </div> EXERCÍCIOS 1, 2 E 3*/}
      {/* <Login></Login>
      <CriarConta></CriarConta> */}
      {/* <Contato contato={contato}></Contato> */}
      {/* <ListaContatos arrayDeContatos={contatos}></ListaContatos> */}
      {/* <Endereco endereco={endereco}></Endereco> */}
      {/* <ObterCep></ObterCep> */}
      {/* <ListaCategorias></ListaCategorias> */}
      
    </div>
  )
}
