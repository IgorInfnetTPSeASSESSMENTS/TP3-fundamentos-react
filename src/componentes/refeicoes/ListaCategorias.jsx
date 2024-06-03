import React, { useEffect, useState } from "react";

function ListaCategorias() {
  const [categorias, setCategorias] = useState([]);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    const url = "https://www.themealdb.com/api/json/v1/1/categories.php";

    fetch(url)
      .then(response => response.json())
      .then(data => {
        const categorias = data.categories.map(categoria => ({
          id: categoria.idCategory,
          nome: categoria.strCategory,
          descricao: categoria.strCategoryDescription,
          imagem: categoria.strCategoryThumb
        }));
        setCategorias(categorias);
      })
      .catch(error => {
        console.error('Erro ao chamar API', error);
        setErro('Erro ao carregar categorias');
      });
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {categorias.map(categoria => (
        <div key={categoria.id} className="max-w-sm mx-2 my-4 bg-white rounded-lg shadow-md overflow-hidden">
          <img src={categoria.imagem} alt={categoria.nome} className="w-full h-40 object-cover" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{categoria.nome}</div>
            <p className="text-gray-700 text-base">{categoria.descricao}</p>
          </div>
        </div>
      ))}
      {erro && <p className="text-red-500">{erro}</p>}
    </div>
  );
}

export default ListaCategorias;
