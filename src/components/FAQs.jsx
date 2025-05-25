import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container,
  Box,
  Paper,
  Divider
} from '@mui/material';
import {
  ExpandMore as ExpandMoreIcon,
  Pets as PetsIcon,
  QuestionAnswer as QuestionIcon
} from '@mui/icons-material';

const FAQs = () => {
  const faqs = [
    {
      question: '¿Cómo puedo adoptar un perro?',
      answer: 'Para adoptar un perro, primero debes registrarte en nuestra plataforma, verificar tu identidad y completar un formulario de adopción. Después, podrás contactar con los refugios o propietarios directamente.'
    },
    {
      question: '¿Qué documentación necesito para adoptar?',
      answer: 'Necesitarás tu documento de identidad, comprobante de domicilio, referencias personales y, en algunos casos, una visita domiciliaria para asegurar el bienestar del animal.'
    },
    {
      question: '¿Cuál es el proceso de adopción?',
      answer: 'El proceso incluye: 1) Registro en la plataforma, 2) Selección del perro, 3) Contacto con el refugio, 4) Entrevista inicial, 5) Visita al perro, 6) Verificación de hogar, 7) Firma del contrato de adopción.'
    },
    {
      question: '¿Hay algún costo asociado?',
      answer: 'La mayoría de los refugios tienen una cuota de adopción que cubre vacunas, desparasitación y esterilización. Los costos varían según el refugio y la edad del perro.'
    },
    {
      question: '¿Puedo devolver al perro si no nos adaptamos?',
      answer: 'Aunque no recomendamos la devolución, entendemos que pueden surgir situaciones excepcionales. Los refugios tienen un período de adaptación durante el cual puedes devolver al perro si surge algún problema serio.'
    },
    {
      question: '¿Cómo puedo saber qué raza de perro se adapta mejor a mi estilo de vida?',
      answer: 'Considera factores como el espacio disponible en tu hogar, tiempo para ejercicio, experiencia con perros y presupuesto. También puedes usar nuestra herramienta de "Match Perfect" que te ayuda a encontrar razas compatibles según tus respuestas a un cuestionario personalizado.'
    },
    {
      question: '¿Qué debo hacer si mi perro muestra signos de agresividad?',
      answer: 'Lo primero es consultar con un veterinario para descartar problemas médicos. Luego, considera trabajar con un adiestrador profesional certificado. La agresividad puede tener múltiples causas como miedo, ansiedad o experiencias pasadas, y requiere un manejo profesional.'
    },
    {
      question: '¿Con qué frecuencia debo vacunar a mi perro?',
      answer: 'El calendario de vacunación varía según la edad y el entorno del perro. Los cachorros necesitan una serie de vacunas entre las 6 y 16 semanas. Los adultos requieren refuerzos anuales o trienales, según la vacuna. Consulta con tu veterinario para un calendario personalizado.'
    },
    {
      question: '¿Cómo puedo entrenar a mi perro para que haga sus necesidades fuera de casa?',
      answer: 'El entrenamiento requiere paciencia y consistencia. Establece horarios regulares, premia el comportamiento correcto, mantén una rutina de salidas y usa comandos específicos. Los cachorros suelen aprender en 4-6 semanas, pero cada perro tiene su ritmo.'
    },
    {
      question: '¿Qué beneficios tiene contratar un seguro para mi perro?',
      answer: 'Un seguro para mascotas puede cubrir gastos veterinarios inesperados, tratamientos por accidentes, enfermedades crónicas y, en algunos casos, medicina preventiva. También puede incluir cobertura por responsabilidad civil en caso de que tu perro cause daños a terceros.'
    }
  ];

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
            <PetsIcon sx={{ fontSize: 40, color: 'primary.main', mr: 2 }} />
            <Typography variant="h4" component="h1" color="primary.main">
              Preguntas Frecuentes
            </Typography>
          </Box>

          <Divider sx={{ mb: 4 }} />

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {faqs.map((faq, index) => (
              <Accordion 
                key={index}
                sx={{
                  '&:before': { display: 'none' },
                  boxShadow: 1,
                  '&:hover': {
                    boxShadow: 2,
                  }
                }}
              >
                <AccordionSummary 
                  expandIcon={<ExpandMoreIcon />}
                  sx={{
                    '&:hover': {
                      backgroundColor: 'rgba(0, 0, 0, 0.04)',
                    }
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <QuestionIcon sx={{ mr: 2, color: 'primary.main' }} />
                    <Typography variant="h6">{faq.question}</Typography>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={{ pl: 5 }}>
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default FAQs;