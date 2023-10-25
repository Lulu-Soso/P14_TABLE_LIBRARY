import React, { useState } from "react";

const DeleteItem = ({
  customDeleteItemMessage,
  handleDelete,
  item,
  customTextYesDeleteItemBtn,
  setSelectedAction,
  customTextNoDeleteItemBtn,
  customDarkBackgroundColor,
  customHoverBackgroundColor,
}) => {
    const [isHoveredYes, setIsHoveredYes] = useState(false);
  const [isHoveredNo, setIsHoveredNo] = useState(false);

  const handleMouseEnterYes = () => {
    setIsHoveredYes(true);
  };

  const handleMouseLeaveYes = () => {
    setIsHoveredYes(false);
  };

  const handleMouseEnterNo = () => {
    setIsHoveredNo(true);
  };

  const handleMouseLeaveNo = () => {
    setIsHoveredNo(false);
  };

  return (
    <div className="delete-item">
      <p>{customDeleteItemMessage}</p>
      <div className="delete-btn">
        <button onClick={() => handleDelete(item)} style={{
            backgroundColor: isHoveredYes
              ? customHoverBackgroundColor
              : customDarkBackgroundColor
          }}
          onMouseEnter={handleMouseEnterYes}
          onMouseLeave={handleMouseLeaveYes}>
          {customTextYesDeleteItemBtn}
        </button>
        <button onClick={() => setSelectedAction(null)} style={{
            backgroundColor: isHoveredNo
              ? customHoverBackgroundColor
              : customDarkBackgroundColor
          }}
          onMouseEnter={handleMouseEnterNo}
          onMouseLeave={handleMouseLeaveNo}>
          {customTextNoDeleteItemBtn}
        </button>
      </div>
    </div>
  );
};

export default DeleteItem;
