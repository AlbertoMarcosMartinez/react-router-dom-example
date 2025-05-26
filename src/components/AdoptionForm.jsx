import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Grid,
  Alert,
  Slide
} from '@mui/material';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';

const validationSchema = Yup.object({
  fullName: Yup.string()
    .required('El nombre completo es requerido')
    .min(3, 'El nombre debe tener al menos 3 caracteres'),
  email: Yup.string()
    .email('Email inválido')
    .required('El email es requerido'),
  phone: Yup.string()
    .required('El teléfono es requerido')
    .matches(/^\d{9}$/, 'Debe ser un número de 9 dígitos'),
  housingType: Yup.string()
    .required('Selecciona el tipo de vivienda'),
  workSituation: Yup.string()
    .required('Selecciona tu situación laboral'),
  livingWith: Yup.string()
    .required('Selecciona con quién vives'),
  experience: Yup.string()
    .required('Cuéntanos tu experiencia con mascotas')
});

const AdoptionForm = ({ open, onClose, dog }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (values, { setSubmitting }) => {
    // Aquí iría la lógica para enviar los datos al backend
    console.log('Formulario enviado:', values);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitting(false);
      onClose();
    }, 3000);
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>
        Solicitud de adopción para {dog?.name}
      </DialogTitle>
      <DialogContent>
        {submitted ? (
          <Slide direction="up" in={submitted}>
            <Alert severity="success" sx={{ mt: 2 }}>
              ¡Gracias por tu solicitud! Revisaremos tu información y nos pondremos en contacto contigo pronto.
            </Alert>
          </Slide>
        ) : (
          <Formik
            initialValues={{
              fullName: '',
              email: '',
              phone: '',
              housingType: '',
              workSituation: '',
              livingWith: '',
              experience: ''
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ values, errors, touched, handleChange, handleBlur }) => (
              <Form>
                <Grid container spacing={3} sx={{ mt: 1 }}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      name="fullName"
                      label="Nombre completo"
                      value={values.fullName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.fullName && Boolean(errors.fullName)}
                      helperText={touched.fullName && errors.fullName}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      name="email"
                      label="Email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.email && Boolean(errors.email)}
                      helperText={touched.email && errors.email}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      name="phone"
                      label="Teléfono"
                      value={values.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.phone && Boolean(errors.phone)}
                      helperText={touched.phone && errors.phone}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl component="fieldset">
                      <FormLabel>Tipo de vivienda</FormLabel>
                      <RadioGroup
                        name="housingType"
                        value={values.housingType}
                        onChange={handleChange}
                      >
                        <FormControlLabel value="piso" control={<Radio />} label="Piso" />
                        <FormControlLabel value="chalet" control={<Radio />} label="Chalet" />
                        <FormControlLabel value="casa" control={<Radio />} label="Casa con jardín" />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl component="fieldset">
                      <FormLabel>Situación laboral</FormLabel>
                      <RadioGroup
                        name="workSituation"
                        value={values.workSituation}
                        onChange={handleChange}
                      >
                        <FormControlLabel value="presencial" control={<Radio />} label="Trabajo presencial" />
                        <FormControlLabel value="teletrabajo" control={<Radio />} label="Teletrabajo" />
                        <FormControlLabel value="mixto" control={<Radio />} label="Híbrido" />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      multiline
                      rows={4}
                      name="experience"
                      label="Cuéntanos tu experiencia con mascotas"
                      value={values.experience}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.experience && Boolean(errors.experience)}
                      helperText={touched.experience && errors.experience}
                    />
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancelar</Button>
        <Button type="submit" variant="contained" color="primary">
          Enviar solicitud
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AdoptionForm;