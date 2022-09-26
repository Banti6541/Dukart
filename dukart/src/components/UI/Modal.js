import { Fragment } from "react"
import ReactDom from "react-dom"
import { Backdrop } from "./Loader"

const Modal = ({ onClose }) => {
    return (
        <Fragment>
            {
                ReactDom.createPortal(
                    <>
                        <Backdrop onClose={onClose} />
                        <div className="modal">
                            Modal is here!
                            <button onClick={onClose}>X</button>
                        </div>
                    </>
                    ,
                    document.getElementById("modal-root")
                )
            }
        </Fragment>
    )
}

export default Modal