import React from "react";

export default function ControlButtons(props) {
  const StartButton = (
    <div className="btn btn-one btn-start" onClick={props.handleStart}>
      Start
    </div>
  );
  const ActiveButtons = (
    <div className="btn-grp">
      <div className="btn btn-two" onClick={props.handleReset}>
        Reset
      </div>
      <div className="btn btn-one" onClick={props.handlePauseResume}>
        {props.isPaused ? "Reanudar" : "Pause"}
      </div>
      <div className="btn btn-one" onClick={props.handleDecrement}>
        Decremento
      </div>
      <div className="btn btn-one">
        <input
          type="text"
          id="message"
          name="message"
          placeholder="Numero de Reversa"
          ref={props.inputRef}
        />
      </div>
      <div className="btn btn-one">
        <input
          type="text"
          id="message2"
          name="message2"
          placeholder="Introduzca el Limite"
          ref={props.inputRef2}
        />
      </div>
    </div>
  );

  return (
    <div className="Control-Buttons">
      <div>{props.active ? ActiveButtons : StartButton}</div>
    </div>
  );
}
