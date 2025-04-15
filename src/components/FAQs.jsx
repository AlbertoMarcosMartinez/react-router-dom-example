import React, { useState } from 'react';
import '../css/faq.css'; // Importa los estilos CSS

const faqs = [
  {
    question: "¿Es cierto que todos los dálmatas tienen 101 manchas?",
    answer:
      "No necesariamente, pero los dálmatas son conocidos por sus manchas únicas. ¡Eso sí, 101 dálmatas es mucho trabajo!",
  },
  {
    question: "¿Cómo puedo entrenar a mi perro para que sea tan valiente como Lassie?",
    answer:
      "La clave está en el entrenamiento constante, el refuerzo positivo y, sobre todo, en construir una relación de confianza con tu perro.",
  },
  {
    question: "¿Qué debo hacer si mi perro se comporta como Beethoven (el San Bernardo)?",
    answer:
      "Un San Bernardo puede ser travieso, pero con paciencia y entrenamiento, puedes canalizar su energía de manera positiva.",
  },
  {
    question: "¿Puedo adoptar un perro tan adorable como Bolt?",
    answer:
      "¡Claro que sí! Hay muchos perros esperando un hogar amoroso. Bolt es un recordatorio de que todos los perros tienen un héroe dentro.",
  },
  {
    question: "¿Es cierto que los perros pueden hablar como Dug de Up?",
    answer:
      "Aunque no pueden hablar como Dug, los perros tienen formas increíbles de comunicarse con nosotros a través de su lenguaje corporal y ladridos.",
  },
  {
    question: "¿Qué raza es ideal si quiero un perro tan elegante como Lady (de La dama y el vagabundo)?",
    answer:
      "Un Cocker Spaniel, como Lady, es una excelente opción. Son elegantes, cariñosos y muy leales.",
  },
  {
    question: "¿Cómo puedo evitar que mi perro se comporte como el travieso Max de El Grinch?",
    answer:
      "El entrenamiento temprano y el ejercicio regular pueden ayudar a evitar travesuras. ¡Aunque Max siempre tuvo un gran corazón!",
  },
  {
    question: "¿Es posible que mi perro sea tan leal como Hachiko?",
    answer:
      "Los perros son naturalmente leales. Si les das amor y cuidado, te devolverán esa lealtad incondicional.",
  },
  {
    question: "¿Qué debo hacer si mi perro se comporta como Marley de Marley y yo?",
    answer:
      "Marley nos enseñó que incluso los perros más traviesos pueden ser los más amorosos. La paciencia y el entrenamiento son clave.",
  },
  {
    question: "¿Puedo tener un perro tan valiente como Balto?",
    answer:
      "Balto es un ejemplo de coraje y determinación. Aunque no todos los perros son héroes de trineo, todos tienen su propia valentía.",
  },
  {
    question: "¿Qué debo hacer si mi perro intenta escapar como Chance de Volviendo a casa?",
    answer:
      "Asegúrate de que tu perro tenga suficiente ejercicio y entretenimiento para evitar que intente escapar por aburrimiento.",
  },
  {
    question: "¿Es cierto que los perros pueden ser tan inteligentes como Gromit?",
    answer:
      "Algunos perros son increíblemente inteligentes y pueden aprender muchos trucos y comandos. ¡El entrenamiento es la clave!",
  },
  {
    question: "¿Cómo puedo cuidar a un perro tan grande como Clifford?",
    answer:
      "Aunque Clifford es ficticio, los perros grandes necesitan mucho espacio, ejercicio y una dieta adecuada para mantenerse saludables.",
  },
  {
    question: "¿Qué debo hacer si mi perro se comporta como Scooby-Doo y tiene miedo de todo?",
    answer:
      "La socialización temprana y el refuerzo positivo pueden ayudar a tu perro a superar sus miedos. ¡Y tal vez un par de Scooby-Galletas también ayuden!",
  },
  {
    question: "¿Es posible que mi perro sea tan protector como Shadow de Volviendo a casa?",
    answer:
      "Los perros protectores como Shadow son el resultado de una relación fuerte y amorosa con sus dueños. ¡Dales amor y te protegerán siempre!",
  },
];

function FAQ() {
  return (
    <div className="faq-container">
      <h2 className="faq-title">Preguntas frecuentes</h2>
      <dl className="faq-list">
        {faqs.map((faq, index) => (
          <Accordion key={index} faq={faq} />
        ))}
      </dl>
    </div>
  );
}

function Accordion({ faq }) {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`}>
      <dt>
        <button
          onClick={() => setOpen(!isOpen)}
          className="faq-question"
        >
          <span>{faq.question}</span>
          <span className="faq-icon">{isOpen ? '-' : '+'}</span>
        </button>
      </dt>
      <dd className="faq-answer">
        <p>{faq.answer}</p>
      </dd>
    </div>
  );
}

export default FAQ;