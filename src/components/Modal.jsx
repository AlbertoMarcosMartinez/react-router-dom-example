import React, { useContext, useEffect } from "react";
import AuthContext from "../contexts/AuthContext";
import "../css/Modal.css"; // Asegúrate de tener un archivo CSS para estilos

const Modal = ({ closeModal }) => {
  const { setIsAuthenticated, setIsSidebarDisabled } = useContext(AuthContext);

  useEffect(() => {
    // Deshabilitar la SideBar al abrir el modal
    setIsSidebarDisabled(true);

    // Habilitar la SideBar al cerrar el modal
    return () => setIsSidebarDisabled(false);
  }, [setIsSidebarDisabled]);

  const handleLogout = () => {
    console.log("Cerrar sesión");
    window.location.href = "/";
    setIsAuthenticated(false);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={() => closeModal(false)}>
          ✖
        </button>
        <h1>¿Está seguro que quiere salir de esta app?</h1>
        <p>Si sale de esta app, perderá toda la información que haya ingresado.</p>
        <div className="modal-actions">
          <button className="modal-button primary" onClick={handleLogout}>
            Sí
          </button>
          <button className="modal-button secondary" onClick={() => closeModal(false)}>
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;