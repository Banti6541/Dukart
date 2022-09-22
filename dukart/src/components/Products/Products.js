import ListItem from "./ListItems/ListItem";
import Loader from "../UI/Loader";
import { useState, useEffect } from "react";
import axios from "axios";

const Products = () => {

    const [items, setItems] = useState([])
    const [loader, setLoader] = useState(true)

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

return (
    <>
    <div className="product-list">
        <div className="product-list--wrapper">
            {
                items.map(item => {
                    return (<ListItem key={item.id} data={item} />)
                })
            }
        </div>
    </div>
    { loader && <Loader/> }
    </>
)
}

export default Products;