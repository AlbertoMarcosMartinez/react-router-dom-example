import React, { useEffect, useState } from "react";
import data from "./MailList.json";
import "../css/MailBox.css"; 
import { Button } from "@mui/material";


function MailBox() {
  const [mails, setMails] = useState([]);

  useEffect(() => {
    setMails(data);
  }, []);

  return (
    <div className="mailbox-container">
      <h2 className="mailbox-title"> MailBox</h2>
      {mails.map((item) => (
        <div key={item.id} className="mail-card">
          <div className="mail-category">{item.categoria}</div>
            <div className="mail-question">{item.pregunta}</div>
                <ul className="mail-answers">
                    {item.respuestas.map((respuesta, index) => (
                    <li key={index}>{respuesta}</li>
                    ))}
                </ul>
                <Button variant="contained" color="primary" className="mail-button">
                    Responder
                </Button>
        </div>
    ))}
    <Button variant="contained" color="secondary" className="mail-button">
        Crear nuevo hilo de conversación
    </Button>
           
        <div className="mailbox-footer">
            <p>© 2025 MailBox. Todos los derechos reservados.</p>
        </div>
    </div>
  );
}

export default MailBox;
