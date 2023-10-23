import React, { useState } from "react";

const Modal = ({
  isActiveModal,
  closeModal,
  children,
  customDarkBackgroundColor,
  customHoverBackgroundColor,
}) => {
  const [isHoveredCloseButton, setIsHoveredCloseButton] = useState(false);

  const handleMouseEnterCloseButton = () => {
    setIsHoveredCloseButton(true);
  };

  const handleMouseLeaveCloseButton = () => {
    setIsHoveredCloseButton(false);
  };
  return (
    <div className={`modal ${isActiveModal ? "active" : ""}`}>
      <div className="modal-content">
        <div className="children-content">{children}</div>
        <div className="close-modal-button">
          <button
            onClick={closeModal}
            style={{
              backgroundColor: isHoveredCloseButton
                ? customHoverBackgroundColor
                : customDarkBackgroundColor,
            }}
            onMouseEnter={handleMouseEnterCloseButton}
            onMouseLeave={handleMouseLeaveCloseButton}
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
