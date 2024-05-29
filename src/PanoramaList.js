import React from 'react';
import { Modal } from 'react-bootstrap';
import "./style.css"

const PanoramaList = ({ show, onHide, onSelectPanorama, panoramaGallery }) => {
  const handleCloseModal = () => {
    onHide();
  };

  const selectedImages = Object.keys(panoramaGallery)
    .filter((sceneKey) => panoramaGallery[sceneKey].displayInPreview)
    .map((sceneKey) => ({ sceneKey, ...panoramaGallery[sceneKey] }));

  const handlePanoramaSelect = (sceneKey) => {
    onSelectPanorama(sceneKey);
    onHide();
  };


  return (
     <Modal show={show} onHide={onHide} centered style={{margin: '0 auto', width: '100%'}}>
      <Modal.Header closeButton>
        <Modal.Title style={{fontSize: "1rem"}}>Daftar Panorama</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="panorama-list">
          {selectedImages.map((scene) => (
            <div key={scene.sceneKey} className="panorama-preview">
              <img
                src={scene.image} // Assuming 'image' is the property containing the image URL
                alt={scene.text || scene.sceneKey}
                onClick={() => handlePanoramaSelect(scene.sceneKey)} // You may need to define this function
              />
              <p style={{fontSize: "0.8rem", textAlign: "center"}}>{scene.text || scene.sceneKey}</p>
            </div>
          ))}
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default PanoramaList;
