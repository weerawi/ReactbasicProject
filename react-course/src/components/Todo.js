import {useState} from "react";

import Modal from "./Modal.js";
import Backdrop from "./Backdrop.js";

function Todo(props) {
  // initial state of modal is false
  const [modalIsOpen, setModalIsOpen] = useState(false);
  function deleteHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="action">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
        {/* Not use parantheseis () in after deletehandler bcz it evaluate before function btn click */}

        {modalIsOpen && (
          <Modal onCancel={closeModalHandler} onCancel={closeModalHandler} />
        )}

        {/* {modalIsOpen ? <Modal /> : null} */}

        {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
      </div>
    </div>
  );
}
export default Todo;
