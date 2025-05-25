import React, { useState } from 'react';
import { 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  DialogActions, 
  TextField, 
  Button 
} from '@mui/material';

const ResponderModal = ({ open, onClose, pregunta, onResponder }) => {
  const [respuesta, setRespuesta] = useState('');

  const handleSubmit = () => {
    if (respuesta.trim()) {
      onResponder(respuesta);
      setRespuesta('');
      onClose();
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>Responder Pregunta</DialogTitle>
      <DialogContent>
        <div className="pregunta-original" style={{ marginBottom: '20px', padding: '10px', backgroundColor: '#f5f5f5' }}>
          <h4>Pregunta:</h4>
          <p>{pregunta?.pregunta}</p>
        </div>
        <TextField
          autoFocus
          margin="dense"
          label="Tu respuesta"
          type="text"
          fullWidth
          multiline
          rows={4}
          value={respuesta}
          onChange={(e) => setRespuesta(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancelar
        </Button>
        <Button onClick={handleSubmit} color="primary" variant="contained">
          Enviar Respuesta
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ResponderModal;