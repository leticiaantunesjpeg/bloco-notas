import React from "react";
import { format } from "date-fns";
import "./Nota.css";

const Nota = ({ texto, data, onExcluirNota, onEditarNota }) => {
  const dataFormatada = format(new Date(data), "dd/MM/yyyy HH:mm");

  const handleExcluir = () => {
    onExcluirNota();
  };

  const handleEditar = () => {
    onEditarNota();
  };

  return (
    <div className="nota-card">
      <p className="nota-texto">{texto}</p>
      <p className="nota-data">{dataFormatada}</p>
      <button className="button-nota editar-button" onClick={handleEditar}>
        Editar
      </button>
      <button className="button-nota excluir-button" onClick={handleExcluir}>
        Excluir
      </button>
    </div>
  );
};

export default Nota;
