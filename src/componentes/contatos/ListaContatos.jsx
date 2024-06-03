import Contato from "./Contato"

export default function ListaContatos({arrayDeContatos}) {
  return(
    <div>
      {arrayDeContatos.map((contato, index) => (
        <Contato key={index} contato={contato}></Contato>
      ))}
    </div>
  )
}