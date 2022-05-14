import React from "react";

const InputComponent = (props) => {
  return (
    <div>
      <input
        type="text"
        value={props.value}
        placeholder={props.placeholder}
        onChange={(e) => {
          props.handlerInput(e);
        }}
      />
      {props.showButton && (
        <label onClick={props.handlerButton}>{props.buttonText}</label>
      )}
    </div>
  );
};

export default InputComponent;
