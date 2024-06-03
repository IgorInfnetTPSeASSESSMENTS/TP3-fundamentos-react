export default function Atencao({titulo, mensagem}) {
  return (
    <div>
      <div >
      {titulo == "" &&
        <div className="max-w-md mx-auto bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded relative" role="alert">ATENÇÃO</div>
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
