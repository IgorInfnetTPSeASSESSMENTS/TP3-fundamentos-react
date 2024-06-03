export default function Sucesso({titulo, mensagem}) {
  return (
    <div>
      <div >
      {titulo == "" &&
        <div className="max-w-md mx-auto bg-purple-100 border border-purple-400 text-purple-700 px-4 py-3 rounded relative" role="alert">SUCESSO</div>
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