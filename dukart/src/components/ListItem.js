import AddToCartIcon from "../assets/icons/add_cart.svg"

const ListItem = () => {

    const data = {
        dicountedPrice: 340,
        price: 450,
        title: "Title of the Item",
        thumbnail: "placeholder.png"
    }

    return (
        <div className={"item-card"}>
            <img className={"img-fluid"} src={`/assets/${data.thumbnail}`} alt="Some Title"></img>
            
            <div className={"item-card__information"}>
                <div className={"pricing"}>
                    <span>₹{data.dicountedPrice}</span>
                    <small>
                        <strike>{data.price}</strike>
                    </small>
                </div>
                <div className={"title"}>
                    <h3>{data.title}</h3>
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