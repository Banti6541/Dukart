import Modal from "./Modal";
import OrderSuccessImage from "../../assets/icons/order_success.svg"

const OrderSuccessModal = ({ onClose }) => {
    return (
        <Modal onClose={onClose} >
            <div className="order-container" >
                <div className="order-container--success" >
                    <img className="img-fluid" src={OrderSuccessImage} alt="success" ></img>
                    <div className="message" >
                        <h1>Your order is placed</h1>
                        <span>Order ID : 10002342</span>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default OrderSuccessModal