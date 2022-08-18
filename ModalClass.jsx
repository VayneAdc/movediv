import React from "react";
class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coords: {},
      canMove: false,
    };
  }

  handleMouseMove = (event) => {
    if (!this.state.canMove) {
      return;
    }
    const left = event.pageX - 30;
    const top = event.pageY - 30;
    this.setState((prevState) => ({
      ...prevState,
      coords: { left, top, margin: 0 },
    }));
  };

  toggleCanMove = (status) => {
    this.setState({ canMove: status });
  };

  render() {
    window.x = this;
    return (
      <div
        onMouseMove={this.handleMouseMove}
        className="modal"
        style={{ display: "block" }}
      >
        <div
          className="modal-dialog"
          role="document"
          style={{ margin: this.state.coords.margin, height: 100 }}
        >
          <div className="modal-content" style={this.state.coords}>
            <div className="modal-header">
              <h5
                className="modal-title"
                onMouseDown={() => this.toggleCanMove(true)}
                onMouseUp={() => this.toggleCanMove(false)}
                style={{
                  userSelect: "none",
                  cursor: this.state.canMove ? "grabbing" : "grab",
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
  }
}

export default Modal;
