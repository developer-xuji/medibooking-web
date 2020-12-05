import React from "react";
import "./scss/MoreButton.scss";

function MoreButton(props) {
  return (
    <div className="MoreButtonContainer">
      <button className="MoreButton" onClick={() => props.onMoreButtonClick()}>
        More
      </button>
    </div>
  );
}

export default MoreButton;
