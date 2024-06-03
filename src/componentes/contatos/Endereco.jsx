export default function Endereco({endereco}) {
  return(
    <div>
      <div className="mx auto max-w-sm w-full lg:max-w-full lg:flex justify-center my-10">
        <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{backgroundImage: "url('https://www.compass.adm.br/wp-content/uploads/2017/07/endereco-fiscal.png')"}}>
        </div>
        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <p className="text-sm text-gray-600 flex items-center">            
            </p>
            <div className="text-gray-900 font-bold text-xl mb-2">CEP: {endereco.CEP}</div>
            <p className="text-gray-700 text-base">Logradouro: {endereco.logradouro}</p>
            <p className="text-gray-700 text-base">Complemento: {endereco.complemento}</p>
            <p className="text-gray-700 text-base">Bairro: {endereco.bairro}</p>
            <p className="text-gray-700 text-base">Localidade: {endereco.localidade}</p>
            <p className="text-gray-700 text-base">UF: {endereco.UF}</p>
          </div>
          <div className="flex items-center">
            <div className="text-sm">
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}