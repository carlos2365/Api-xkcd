function search() {
  window.location.href = "./" + document.getElementById("search").value;
}
function Validador({ num }) {
  return (
    <div className="control">
      <a href={"./" + (num - 1)}>-</a>
      <input type="number" className="redondeado" min="0" max="2000" defaultValue={num} id="search" />
      <button onClick={() => search()} className="btn btn-sm btn-danger">Search</button>
      <a href={"./" + (num - -1)}>+</a>
    </div>
  );
}

export default Validador;
