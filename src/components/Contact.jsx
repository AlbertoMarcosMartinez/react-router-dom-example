import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { 
  TextField, 
  Button, 
  Paper, 
  Typography, 
  Container, 
  Box,
  Alert,
  Slide,
  IconButton
} from '@mui/material';
import { 
  Email as EmailIcon, 
  Message as MessageIcon,
  Person as PersonIcon,
  Send as SendIcon
} from '@mui/icons-material';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const initialValues = {
    name: '',
    email: '',
    message: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .required('El nombre es obligatorio')
      .min(2, 'El nombre debe tener al menos 2 caracteres'),
    email: Yup.string()
      .email('Debe ser un correo válido')
      .required('El correo es obligatorio'),
    message: Yup.string()
      .required('El mensaje es obligatorio')
      .min(10, 'El mensaje debe tener al menos 10 caracteres'),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log('Formulario enviado:', values);
    setSubmitted(true);
    resetForm();
    setTimeout(() => setSubmitted(false), 5000); // Oculta el mensaje después de 5 segundos
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
          <Typography variant="h4" component="h2" gutterBottom align="center" 
            sx={{ color: 'primary.main', fontWeight: 'medium', mb: 4 }}>
            Contáctanos
          </Typography>

          {submitted && (
            <Slide direction="down" in={submitted}>
              <Alert 
                severity="success" 
                sx={{ mb: 3 }}
                onClose={() => setSubmitted(false)}
              >
                Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.
              </Alert>
            </Slide>
          )}

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched, handleChange, handleBlur, values }) => (
              <Form>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  <TextField
                    fullWidth
                    name="name"
                    label="Nombre"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.name && Boolean(errors.name)}
                    helperText={touched.name && errors.name}
                    InputProps={{
                      startAdornment: <PersonIcon sx={{ mr: 1, color: 'text.secondary' }} />
                    }}
                  />

                  <TextField
                    fullWidth
                    name="email"
                    label="Correo electrónico"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                    InputProps={{
                      startAdornment: <EmailIcon sx={{ mr: 1, color: 'text.secondary' }} />
                    }}
                  />

                  <TextField
                    fullWidth
                    multiline
                    rows={5}
                    name="message"
                    label="Mensaje"
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.message && Boolean(errors.message)}
                    helperText={touched.message && errors.message}
                    InputProps={{
                      startAdornment: <MessageIcon sx={{ mr: 1, color: 'text.secondary', alignSelf: 'flex-start', mt: 1 }} />
                    }}
                  />

                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    endIcon={<SendIcon />}
                    sx={{ 
                      mt: 2,
                      py: 1.5,
                      alignSelf: 'flex-end',
                      minWidth: 200
                    }}
                  >
                    Enviar mensaje
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
        </Paper>
      </Box>
    </Container>
  );
};

export default Contact;