import React from "react";
import Modal from "react-modal";
import { useState } from "react";
function VdeoAbout() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="ABout-modal-section">
      <button className="about-modal-btn" onClick={openModal}>Watch Video</button>
      <Modal isOpen={isModalOpen} onRequestClose={closeModal} className="acilmismodal" style={{backroundColor:"rgb(0,0,0,0.73)"}}>
        < button className="modalBtn" onClick={closeModal}>X</button>
        <iframe
          width="800"
          height="500"
          style={{display: 'flex', justifyContent: 'center',alignItems:"center",margin:"70px auto"}}
          autoCapitalize=""
          src="https://www.youtube.com/embed/W4UAXoQ7dR4"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </Modal>
    </div>
  );
}

export default VdeoAbout;
