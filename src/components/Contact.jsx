import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../css/Contact.css'; // Importa los estilos

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
  };

  return (
    <div className="contact-container">
      <h1>Contáctanos</h1>
      {submitted ? (
        <div className="confirmation-message">
          <p>Gracias por tu mensaje. Nos pondremos en contacto contigo a la mayor brevedad posible.</p>
        </div>
      ) : (
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Nombre</label>
                <Field type="text" id="name" name="name" />
                <ErrorMessage name="name" component="div" className="error-message" />
              </div>

              <div className="form-group">
                <label htmlFor="email">Correo electrónico</label>
                <Field type="email" id="email" name="email" />
                <ErrorMessage name="email" component="div" className="error-message" />
              </div>

              <div className="form-group">
                <label htmlFor="message">Mensaje</label>
                <Field as="textarea" id="message" name="message" rows="5" />
                <ErrorMessage name="message" component="div" className="error-message" />
              </div>

              <button type="submit" className="submit-button">Enviar</button>
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
};

export default Contact;