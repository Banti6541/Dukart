import { Fragment } from "react";
import { BackDrop } from "./Loader";
import ReactDom from "react-dom";

const Modal = ({ onClose, children }) => {
    return (
            ReactDom.createPortal(
            <Fragment>
                <BackDrop onClose={onClose}/>
                <div className="modal">
                    <button type="close" onClick={ onClose }>X</button>
                    <div className="content">{children}</div>
                </div>
            </Fragment>,
            document.getElementById("modal-root")
        )
    )
}

export default Modal