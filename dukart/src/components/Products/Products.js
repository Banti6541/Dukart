import ListItem from "./ListItems/ListItem";

const items = [
    {
        id: 0,
        dicountedPrice: 340,
        price: 450,
        title: "Title of the Item",
        thumbnail: "placeholder.png"
    },
    {
        id: 1,
        dicountedPrice: 500,
        price: 650,
        title: "Title of the Item",
        thumbnail: "placeholder.png"
    },
    {
        id: 2,
        dicountedPrice: 80,
        price: 100,
        title: "Title of the Item",
        thumbnail: "placeholder.png"
    }
]

const Products = () => {
    return (
        <div className="product-list">
            <div className="product-list--wrapper">
                <ListItem data = {items[0]}></ListItem>
                <ListItem data = {items[1]}></ListItem>
                <ListItem data = {items[2]}></ListItem>
            </div>
        </div>
    )
}

export default Products;