const meuArrayBolado = [
  {
    id: 1,
    concluido: false || true,
    descricao: "Estudar react",
    selecionado: false || true,
  },
  {
    id: 2,
    concluido: false || true,
    descricao: "Estudar react",
    selecionado: false || true,
  },
];

function excluirItem(id) {
  const meuArrayFiltrado = meuArrayBolado.filter((item) => {
    if (item.id === id) return false;
    return true;
  });
  setMeuArrayBolado(meuArrayFiltrado);
}

const [itensSelecionados, setItensSelecionados] = useState([]);

[3, 2, 1, 4, 10];

const novoMeuArrayBolado = [...meuArrayBolado, { id: 3, concluido: false, descricao: "qualquer", selecionado: true }];

setMeuArrayBolado(novoMeuArrayBolado);

return (
  <div>
    {meuArrayBolado.map(function (item) {
      return <ItemDaLista descricao={item.descricao} concluido={item.concluido} checked={item.selecionado} id={item.id} excluir={excluirItem} />;
    })}
  </div>
);

// Adicionar um item
// Excluir um item
// Marcar como concluído
// Buscar por um item pelo nome
// EXTRA: Permitir selecionar multiplos itens para exclusão e/ou conclusão.
