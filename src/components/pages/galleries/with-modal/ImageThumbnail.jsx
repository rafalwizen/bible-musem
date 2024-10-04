import React from 'react';
import './GalleryWithModal.css';

const ImageThumbnail = ({ image, onClick }) => {
    return (
        <div className="new-thumbnail" onClick={onClick}>
            <img src={image.src} alt="Miniatura" />
        </div>
    );
};

export default ImageThumbnail;
