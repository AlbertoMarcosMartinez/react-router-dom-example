import React from "react";
import PropTypes from "prop-types"; // Importa PropTypes para validar las props

const FeatureCard = ({ title, description, imageUrl }) => {
    return (
        <div className="feature-card">
        <img src={imageUrl} alt={title} className="feature-image" />
        <h3>{title}</h3>
        <p>{description}</p>
        </div>
    );
    }   

FeatureCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
};

export default FeatureCard;


