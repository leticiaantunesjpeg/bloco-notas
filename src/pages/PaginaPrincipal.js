import React, { useState, useEffect } from "react";
import Nota from "./../components/nota/Nota";
import "./PaginaPrincipal.css";

const PaginaPrincipal = () => {
  const [notas, setNotas] = useState([]);
  const [novaNota, setNovaNota] = useState("");
  const [notaEditada, setNotaEditada] = useState(null);

  useEffect(() => {
    const notasSalvas = localStorage.getItem("notas");
    if (notasSalvas) {
      const notasParseadas = JSON.parse(notasSalvas);
      setNotas(notasParseadas);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notas", JSON.stringify(notas));
  }, [notas]);

  const handleAdicionarNota = () => {
    const trimmedNota = novaNota.trim();

    if (trimmedNota !== "") {
      if (notaEditada !== null) {
        const notaEditadaIndex = notas.findIndex(
          (nota) => nota === notaEditada
        );
        const novoArrayNotas = [...notas];
        novoArrayNotas.splice(notaEditadaIndex, 1, {
          ...notaEditada,
          texto: trimmedNota,
        });
        setNotas(novoArrayNotas);
        setNotaEditada(null);
      } else {
        const novaNotaObj = {
          texto: trimmedNota,
          data: new Date().toISOString(),
        };
        const novoArrayNotas = [...notas, novaNotaObj];
        setNotas(novoArrayNotas);
      }

      setNovaNota("");
    }
  };

  const handleEditarNota = (nota) => {
    setNotaEditada(nota);
    setNovaNota(nota.texto);
  };

  const handleChangeNovaNota = (event) => {
    setNovaNota(event.target.value);
  };

  const handleExcluirNota = (index) => {
    const novoArrayNotas = [...notas];
    novoArrayNotas.splice(index, 1);
    setNotas(novoArrayNotas);
  };

  return (
    <div className="pagina-principal">
      <h1 className="titulo">Minhas Notas</h1>
      <p className="descricao">
        Bem vindo!! Aqui você pode ver suas notas, adicionar e exclui-las.
      </p>
      <div className="nota-input">
        <textarea
          type="text"
          value={novaNota}
          onChange={handleChangeNovaNota}
          placeholder="Adicione sua nota"
        />
        <button onClick={handleAdicionarNota}>
          <i className="fas fa-plus"></i> Adicionar Nota
        </button>
      </div>
      <div className="notas-container">
        {notas.map((nota, index) => (
          <Nota
            key={index}
            texto={nota.texto}
            data={nota.data}
            onExcluirNota={() => handleExcluirNota(index)}
            onEditarNota={() => handleEditarNota(nota)}
          />
        ))}
      </div>
    </div>
  );
};

export default PaginaPrincipal;
