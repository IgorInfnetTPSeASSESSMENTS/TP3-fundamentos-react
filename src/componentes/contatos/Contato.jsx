export default function Contato({contato}) {
  return (
    <div>
      <div className="mx auto max-w-sm w-full lg:max-w-full lg:flex justify-center my-10">
        <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{backgroundImage: "url('https://cdn-icons-png.flaticon.com/512/1373/1373255.png')"}}>
        </div>
        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <p className="text-sm text-gray-600 flex items-center">            
            </p>
            <div className="text-gray-900 font-bold text-xl mb-2">{contato.nome}</div>
            <p className="text-gray-700 text-base">{contato.email}</p>
          </div>
          <div className="flex items-center">
            <div className="text-sm">
              <p className="text-gray-900 leading-none">Cel: {contato.telefone}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}