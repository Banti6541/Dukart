import ListItem from "./ListItems/ListItem";
import Loader from "../UI/Loader";
import { useState, useEffect } from "react";
import axios from "axios";

const Products = ({ onAddItem, onRemoveItem }) => {

    const [items, setItems] = useState([])
    const [loader, setLoader] = useState(true)
    const [presentItems, setPresentItems] = useState([])

    useEffect(() => {
        async function fetchItems() {
            try {
                const response = await axios.get(`https://dukart-db-default-rtdb.firebaseio.com/items.json`)
                const data = response.data
                const transformedData = data.map((item, index) => {
                    return {
                        ...item,
                        id: index
                    }
                })
                setItems(transformedData)
            }
            catch (error) {
                console.log(error)
                alert("Error occured")
            }
            finally {
                setLoader(false)
            }
        }
        fetchItems();
    }, [])

    const handleAddItem = id => {
        if(presentItems.indexOf(id) > -1)
        {
            return;
        }
        setPresentItems([...presentItems, id])
        onAddItem();
    }

    const handleRemoveItem = id => {
        let index = presentItems.indexOf(id)
        if(index > -1)
        {
            let items = [...presentItems]
            items.splice(index, 1)
            setPresentItems([...items])
            onRemoveItem();
        }
    }

    return (
        <>
            <div className="product-list">
                <div className="product-list--wrapper">
                    {
                        items.map(item => {
                            return (<ListItem onAdd={handleAddItem} onRemove={handleRemoveItem} key={item.id} data={item} />)
                        })
                    }
                </div>
            </div>
            {loader && <Loader />}
        </>
    )
}

export default Products;