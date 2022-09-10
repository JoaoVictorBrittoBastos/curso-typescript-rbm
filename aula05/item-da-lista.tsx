export default function ItemDaLista(props) {
  function handleExcluir() {
    excluir(props.id);
  }
  return (
    <div>
      <input type="checkbox" checked={props.checked} />
      <Lixeirinha onClick={handleExcluir} />
    </div>
  );
}
