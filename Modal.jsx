import { useState, useRef } from "react";
import MoveDiv from "../comonents/MoveDiv";

const Modal = () => {
  const [canMove, setCanMove] = useState(false);
  const [coords, setCoords] = useState({});
  const modalRef = useRef();

  const toggle = (status) => {
    setCanMove(status);
  };

  const handleMouseMove = (event) => {
    console.log(
      "🚀 ~ file: Modal.jsx ~ line 15 ~ handleMouseMove ~ canMove",
      canMove,
      modalRef.current.offsetHeight,
      modalRef.current.offsetTop
    );

    if (!canMove) {
      return;
    }
    const left = event.pageX - 30;
    const top = event.pageY - 30;
    setCoords({
      left,
      top,
      margin: 0,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="modal"
      style={{ display: "block" }}
    >
      <div
        className="modal-dialog"
        role="document"
        style={{ margin: coords.margin, height: 100 }}
      >
        <div className="modal-content" ref={modalRef} style={coords}>
          <div className="modal-header">
            <h5
              className="modal-title"
              onMouseDown={() => toggle(true)}
              onMouseUp={() => toggle(false)}
              style={{
                userSelect: "none",
                cursor: canMove ? "grabbing" : "grab",
              }}
            >
              Modal title
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>Modal body text goes here.</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
