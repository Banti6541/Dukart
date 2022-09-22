import { Fragment } from "react";
import { BackDrop } from "./Loader";
import ReactDom from "react-dom";

const Modal = () => {
    return (
            ReactDom.createPortal(
            <Fragment>
                <BackDrop/>
                <div className="modal">
                    Modal is Here...
                </div>
            </Fragment>,
            document.getElementById("modal-root")
        )
    )
}

export default Modal