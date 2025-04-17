import React from 'react';
import '../css/Presentation.css';

const features = [
  {
    icon: '🐕',
    title: 'Explora Razas',
    description: 'Conoce las características, cuidados y curiosidades de cada raza de perro.',
  },
  {
    icon: '🏠',
    title: 'Adopciones Responsables',
    description: 'Consulta los perritos disponibles para adopción y agenda una visita al centro.',
  },
  {
    icon: '📸',
    title: 'Galerías de imágenes',
    description: 'Disfruta de fotos organizadas por raza para conocer mejor a cada una.',
  },
  {
    icon: '❓',
    title: 'Preguntas Frecuentes',
    description: 'Resuelve tus dudas sobre el cuidado y bienestar de tu mascota.',
  },
  {
    icon: '📬',
    title: 'Buzón de Dudas',
    description: 'Escríbenos si necesitas ayuda o quieres saber más. ¡Te escuchamos!',
  },
  {
    icon: '📅',
    title: 'Eventos y Actividades',
    description: 'Infórmate sobre eventos y actividades relacionadas con el mundo canino.',
 },
    {
    icon: '🛍️',
    title: 'Tienda de Productos',
    description: 'Encuentra productos recomendados para el cuidado de tu perro.',
    },
    {
    icon: '📝',
    title: 'Artículos y Consejos',
    description: 'Lee artículos sobre entrenamiento, salud y bienestar canino.',
    },
    {
    icon: '👩‍⚕️',
    title: 'Consulta Veterinaria',
    description: 'Accede a información sobre salud y cuidados veterinarios.',
    },    
    {
    icon: '📚',
    title: 'Recursos Educativos',
    description: 'Accede a guías y recursos para aprender más sobre el cuidado de perros.',
    },
    {
    icon: '🧑‍🤝‍🧑',
    title: 'Comunidad Canina',
    description: 'Únete a nuestra comunidad de amantes de los perros y comparte experiencias.',
    },
    {
    icon: '🎉',
    title: 'Concursos y Sorteos',
    description: 'Participa en concursos y sorteos para ganar premios relacionados con perros.',
    },

];

const FeatureCard = ({ feature }) => {
  return (
    <div className="feature-card">
      <span className="feature-icon">{feature.icon}</span>
      <h3 className="feature-title">{feature.title}</h3>
      <p className="feature-description">{feature.description}</p>
    </div>
  );
};

const Presentation = ({ user = 'Invitado', lastName = '' }) => {
  return (
    <div className="presentation">
     <h2>🐶 Bienvenidos a <span className="highlight">Mundo Perruno</span> 🐾</h2>
      <p className="intro">
        Hola, <strong>{user} {lastName}</strong>. Todo lo que necesitas saber sobre nuestros fieles amigos, en un solo lugar.
      </p>
      <div className="features">
        {features.map((feature, index) => (
          <FeatureCard key={index} feature={feature}/>
        ))}
      </div>
    </div>
  );
};

export default Presentation;