import ListItem from "./ListItems/ListItem";
import { useState } from "react";

const Products = () => {

    const [items, setItems] = useState([
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
        },
        {
            id: 3,
            dicountedPrice: 220,
            price: 400,
            title: "Title of the Item",
            thumbnail: "placeholder.png"
        }
    ])
    

    return (
        <div className="product-list">
            <div className="product-list--wrapper">
                {
                    items.map(item => {
                        return (<ListItem key={item.id} data = {item}/>)
                    })
                }
            </div>
        </div>
    )
}

export default Products;