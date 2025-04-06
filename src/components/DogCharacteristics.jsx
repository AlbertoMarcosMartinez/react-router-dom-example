import React from 'react'
import { useOutletContext, Link } from 'react-router-dom'

const DogCharacteristics = () => {
    const { dog } = useOutletContext();
    
    return (
        <div className="dog-characteristics">
            <div className="characteristics-header">
                <h3>{dog.name} en detalle</h3>
                <Link to={`/dogs/${dog.name}`} className="close-button">✕</Link>
            </div>
            
            <div className="characteristics-grid">
                <div className="full-width">
                    <p><strong>Temperament:</strong> <span>{dog.temperament || 'Not specified'}</span></p>
                </div>
                
                <div className="grid-item">
                    <p><strong>Breed Group:</strong> <span>{dog.breed_group || 'Unknown'}</span></p>
                </div>
                <div className="grid-item">
                    <p><strong>Height:</strong> <span>{dog.height?.metric || 'Unknown'} cm</span></p>
                </div>
                
                <div className="grid-item">
                    <p><strong>Weight:</strong> <span>{dog.weight?.metric || 'Unknown'} kg</span></p>
                </div>
                <div className="grid-item">
                    <p><strong>Life Span:</strong> <span>{dog.life_span || 'Unknown'}</span></p>
                </div>
                <div className="grid-item">
                    <p><strong>Adaptability:</strong> <span>{dog.adaptability || 'Unknown'}</span></p>
                </div>
                <div className="grid-item">     
                    <p><strong>Affection Level:</strong> <span>{dog.affection_level || 'Unknown'}</span></p>
                </div>
                <div className="grid-item">
                    <p><strong>Child Friendly:</strong> <span>{dog.child_friendly || 'Unknown'}</span></p>
                </div>  
                <div className="grid-item">
                    <p><strong>Grooming:</strong> <span>{dog.grooming || 'Unknown'}</span></p>
                </div>
                <div className="grid-item">
                    <p><strong>Intelligence:</strong> <span>{dog.intelligence || 'Unknown'}</span></p>
                </div>                
            </div>
        </div>
    ) 
}

export default DogCharacteristics