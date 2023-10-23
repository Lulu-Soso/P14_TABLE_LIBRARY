import React, { useState } from "react";

const DeleteItem = ({
  customDeleteItemMessage,
  handleDelete,
  item,
  customTextYesDeleteItem,
  setSelectedAction,
  customTextNoDeleteItem,
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
          {customTextYesDeleteItem}
        </button>
        <button onClick={() => setSelectedAction(null)} style={{
            backgroundColor: isHoveredNo
              ? customHoverBackgroundColor
              : customDarkBackgroundColor
          }}
          onMouseEnter={handleMouseEnterNo}
          onMouseLeave={handleMouseLeaveNo}>
          {customTextNoDeleteItem}
        </button>
      </div>
    </div>
  );
};

export default DeleteItem;
