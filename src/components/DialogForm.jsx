import React, { useState } from 'react';
import { 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  DialogActions, 
  TextField, 
  Button 
} from '@mui/material';

const DialogForm = ({ 
  open, 
  onClose, 
  title,
  originalContent,
  onSubmit,
  submitButtonText = "Enviar",
  placeholder = "Escribe aquí..."
}) => {
  const [content, setContent] = useState('');

  const handleSubmit = () => {
    if (content.trim()) {
      onSubmit(content);
      setContent('');
      onClose();
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        {originalContent && (
          <div className="original-content" style={{ marginBottom: '20px', padding: '10px', backgroundColor: '#f5f5f5' }}>
            <h4>Pregunta original:</h4>
            <p>{originalContent}</p>
          </div>
        )}
        <TextField
          autoFocus
          margin="dense"
          label={placeholder}
          type="text"
          fullWidth
          multiline
          rows={4}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancelar
        </Button>
        <Button onClick={handleSubmit} color="primary" variant="contained">
          {submitButtonText}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogForm;