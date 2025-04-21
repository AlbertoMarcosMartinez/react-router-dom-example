
import React ,{useContext, useEffect}from "react"; 
import AuthContext from '../contexts/AuthContext';

const Modal = ({closeModal}) => {
    const { setIsAuthenticated , setIsSidebarDisabled} = useContext(AuthContext); 

    useEffect(() => {
        setIsSidebarDisabled(true);
            // Habilitar los botones de la SideBar al cerrar el modal
        return () => setIsSidebarDisabled(false);
      }, [setIsSidebarDisabled]);

    const handleLogout = () => {    
        console.log("Cerrar sesión"); 
        window.location.href = '/'; 
        setIsAuthenticated(false);
    }
   
  return (
    <div>
      <div>
        <button onClick={() => closeModal(false)}>X</button>
        <h1>¿Está seguro que quiere salir de esta app.?</h1>
        <p>Si sale de esta app, perderá toda la información que haya ingresado.</p>
        <div>
          <button color="primary" onClick={handleLogout}>
            Sí
          </button>
          <button color="secondary" onClick={() => closeModal(false)}>
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;