export default function Erro({titulo, mensagem}) {
  return (
    <div>
      <div >
      {titulo == "" &&
        <div className="max-w-md mx-auto bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">ERRO</div>
      }
      </div>

      {titulo &&
        <div className="max-w-md mx-auto bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
          <h1 className="font-bold">{titulo}</h1>
          <p>{mensagem}</p>
        </div>
      }
    </div>
  )
}