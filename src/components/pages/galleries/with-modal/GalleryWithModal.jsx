import { useState } from 'react';
import ImageThumbnail from './ImageThumbnail.jsx';
import ImageModal from './ImageModal.jsx';
import './GalleryWithModal.css';

const GalleryWithModal = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const images = [
        { id: 1, src: '/images/img1.jpg', description: 'Opis obrazka 1' },
        { id: 2, src: '/images/img2.jpg', description: 'Opis obrazka 2' },
        { id: 3, src: '/images/img3.jpg', description: 'Opis obrazka 3' },
    ];

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
    };

    return (
        <div className="new-gallery-container">
            <div className="new-thumbnail-grid">
                {images.map((image) => (
                    <ImageThumbnail
                        key={image.id}
                        image={image}
                        onClick={() => handleImageClick(image)}
                    />
                ))}
            </div>
            {selectedImage && (
                <ImageModal
                    image={selectedImage}
                    onClose={handleCloseModal}
                />
            )}
        </div>
    );
};

export default GalleryWithModal;
