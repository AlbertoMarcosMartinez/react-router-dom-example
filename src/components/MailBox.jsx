import React, { useEffect, useState } from "react";
import data from "./MailList.json";
import Paginador from "./common/Paginador";
import DialogForm from "./DialogForm";
import "../css/MailBox.css"; 
import { Button } from "@mui/material";


function MailBox() {
    const [preguntas, setPreguntas] = useState([]);
    const [paginaActual, setPaginaActual] = useState(1);
    const preguntasPorPagina = 10; 
    const [modalOpen, setModalOpen] = useState(false);
    const [preguntaSeleccionada, setPreguntaSeleccionada] = useState(null);
    const [isNewQuestion, setIsNewQuestion] = useState(false);

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

    const handleResponder = (pregunta) => {
      setPreguntaSeleccionada(pregunta);
      setModalOpen(true);
    };

    const handleEnviarRespuesta = (nuevaRespuesta) => {
      const preguntasActualizadas = preguntas.map(pregunta => {
        if (pregunta.id === preguntaSeleccionada.id) {
          return {
            ...pregunta,
            respuestas: [...pregunta.respuestas, nuevaRespuesta]
          };
        }
        return pregunta;
      });
      
      setPreguntas(preguntasActualizadas);
      setModalOpen(false);
      setPreguntaSeleccionada(null);
    };

    const handleNuevaPregunta = (contenido) => {
      const nuevaPregunta = {
        id: preguntas.length + 1,
        categoria: "General",
        pregunta: contenido,
        respuestas: [],
        fecha: new Date().toLocaleDateString()
      };
      
      setPreguntas([nuevaPregunta, ...preguntas]);
    };

    return (
      <div className="mailbox-container">
        <h2 className="mailbox-title">Hilo perruno</h2>
        <Button 
          variant="contained" 
          color="primary" 
          size="small" 
          className="mailbox-button"
          onClick={() => setIsNewQuestion(true)}
        >
          Crear Pregunta
        </Button>
        
        {preguntasPagina.map((item) => (
          <div key={item.id} className="mail-card">
            <div className="mail-category">{item.categoria}</div>
            <div className="mail-question">{item.pregunta}</div>
            {item.respuestas.length > 0 ? (
              <ul className="mail-answers">
                {item.respuestas.map((respuesta, index) => (
                  <li key={index}>{respuesta}</li>
                ))}
              </ul>
            ) : (
              <p className="no-answers">En este momento aún no hay respuestas para este hilo.</p>
            )}
            <div className="mail-date">{item.fecha}</div>
            <div className="mail-actions">
              <Button 
                variant="contained" 
                color="primary" 
                size="small"
                onClick={() => handleResponder(item)}
              >
                Responder
              </Button>
            </div>
          </div>
        ))}
  
        <Paginador
          paginaActual={paginaActual}
          totalPaginas={totalPaginas}
          onPageChange={cambiarPagina}
        />

        <DialogForm
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          title="Responder Pregunta"
          originalContent={preguntaSeleccionada?.pregunta}
          onSubmit={handleEnviarRespuesta}
          submitButtonText="Enviar Respuesta"
          placeholder="Escribe tu respuesta..."
        />

        <DialogForm
          open={isNewQuestion}
          onClose={() => setIsNewQuestion(false)}
          title="Nueva Pregunta"
          onSubmit={handleNuevaPregunta}
          submitButtonText="Crear Pregunta"
          placeholder="Escribe tu pregunta..."
        />
      </div>
    );
  }
  
  export default MailBox;

