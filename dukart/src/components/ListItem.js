import AddToCartIcon from "../assets/icons/add_cart.svg"

const ListItem = () => {
    return (
        <div className={"item-card"}>
            <img className={"img-fluid"} src="/assets/placeholder.png" alt="Some Title"></img>
            
            <div className={"item-card__information"}>
                <div className={"pricing"}>
                    <span>₹340</span>
                    <small>
                        <strike>450</strike>
                    </small>
                </div>
                <div className={"title"}>
                    <h3>Title of the Item</h3>
                </div>
            </div>

            <button className={"cart-add"}>
                <span>Add to Cart</span>
                <img src={AddToCartIcon} alt="Cart Icon"></img>
            </button>
        </div>
    )
}

export default ListItem;