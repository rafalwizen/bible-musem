import React from 'react';
import './GalleryWithModal.css';

const ImageModal = ({ image, onClose }) => {
    return (
        <div className="new-modal-overlay" onClick={onClose}>
            <div className="new-modal-content" onClick={(e) => e.stopPropagation()}>
                <img src={image.src} alt="Pełny obraz" className="new-modal-image" />
                <p className="new-modal-description">{image.description}</p>
                <button className="new-modal-close" onClick={onClose}>Zamknij</button>
            </div>
        </div>
    );
};

export default ImageModal;
