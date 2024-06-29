import { useState } from "react";
import Modal from "./modal";
import "./modal.css";

export default function ModalTest() {
  const [showModalPopup, setShowModalPopup] = useState(false);

  function handleModalTogglePopup() {
    setShowModalPopup(!showModalPopup);
  }

  function onClose() {
    setShowModalPopup(false);
  }

  return (
    <div>
      <button onClick={handleModalTogglePopup}>Open Modal Component</button>
      {showModalPopup && (
        <Modal
          onClose={onClose}
          header={<h2>Customized Header</h2>}
          footer={<h2>Customized Footer</h2>}
          body={
            <div>
              <p>Customized body</p>
            </div>
          }
        />
      )}
    </div>
  );
}
