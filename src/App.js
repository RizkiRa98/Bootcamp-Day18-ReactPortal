import React, { useState } from "react";
import InputForm from "./Modal";

const BUTTON_WRAPPER_STYLES = {
  position: "relative",
  zIndex: 1,
};

const OTHER_CONTENT_STYLES = {
  position: "relative",
  zIndex: 2,
  backgroundColor: "red",
  padding: "10px",
};

export default function App() {
  const [isOpen, setIsOpen] = useState();
  return (
    <div>
      <div style={BUTTON_WRAPPER_STYLES} onClick={() => console.log("Clicked")}>
        <button
          onClick={() => setIsOpen(true)}
          className="btn btn-success mb-2 mt-2 ms-2"
        >
          <h3>Open Modal</h3>
        </button>

        <InputForm open={isOpen} onClose={() => setIsOpen(false)}>
          <br />
          Fancy Modal
        </InputForm>
      </div>
      <div style={OTHER_CONTENT_STYLES}></div>
    </div>
  );
}
