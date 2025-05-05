import React, { useEffect, useState } from "react";
import data from "./MailList.json";
import Paginador from "./common/Paginador";
import "../css/MailBox.css"; 
import { Button } from "@mui/material";


function MailBox() {
    const [preguntas, setPreguntas] = useState([]);
    const [paginaActual, setPaginaActual] = useState(1);
    const preguntasPorPagina = 10; 
  
    useEffect(() => {
      setPreguntas(data);
    }, []);
  
    // Calcular índices para paginación
    const indexInicio = (paginaActual - 1) * preguntasPorPagina;
    const indexFinal = indexInicio + preguntasPorPagina;
    const preguntasPagina = preguntas.slice(indexInicio, indexFinal);
  
    const totalPaginas = Math.ceil(preguntas.length / preguntasPorPagina);
  
    const cambiarPagina = (nuevaPagina) => {
      if (nuevaPagina >= 1 && nuevaPagina <= totalPaginas) {
        setPaginaActual(nuevaPagina);
      }
    };

    return (
      <div className="mailbox-container">
        <h2 className="mailbox-title">Hilo perruno</h2>
        <Button variant="contained" color="primary" size="small" className="mailbox-button">Crear Pregunta</Button>
        {preguntasPagina.map((item) => (
          <div key={item.id} className="mail-card">
            <div className="mail-category">{item.categoria}</div>
                <div className="mail-question">{item.pregunta}</div>
                    <ul className="mail-answers">
                    {item.respuestas.map((respuesta, index) => (
                        <li key={index}>{respuesta}</li>
                    ))}
                    </ul>
                <div className="mail-date">{item.fecha}</div>
                <div className="mail-actions" id="mail-actions" style={{ display: "flex", justifyContent: "space-between", alignItems: "end" }}>  
                    <Button variant="contained" color="primary" size="small">Responder</Button>
                    {/* <Button variant="outlined" color="secondary" size="small">Eliminar</Button> */}
                </div> 
        </div>
        ))}
  
        <Paginador
          paginaActual={paginaActual}
          totalPaginas={totalPaginas}
          onPageChange={cambiarPagina}
        />
      </div>
    );
  }
  
  export default MailBox;

