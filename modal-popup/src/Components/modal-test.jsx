import { useState } from "react";
import Modal from "./modal";
import "./modal.css";

export default function ModalTest() {
  const [toggleModal, setToggleModal] = useState(false);

  function handleToggle() {
    setToggleModal(!toggleModal);
  }

  function onClose() {
    setToggleModal(false);
  }

  return (
    <div className="container">
      <button className="button" onClick={handleToggle}>
        Toggle Popup
      </button>

      {toggleModal && (
        <Modal onClose={onClose} body={<div>Customized Body</div>} />
      )}
    </div>
  );
}
