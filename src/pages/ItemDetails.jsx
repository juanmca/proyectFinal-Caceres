import { useParams } from "react-router-dom"
import { useItemCollection } from "../hooks/useItemCollection"
import LoaderComponent from "../component/LoaderComponent/LoaderComponent"
import ItemDetailContainer from "../component/ItemDetailContainer/ItemDetailContainer"



LoaderComponent
const ItemDetails = () => {
  
    const {itemId} = useParams();

    const { data, loading } = useItemCollection("products", itemId)
  
  
    return loading ? <LoaderComponent /> : <ItemDetailContainer productData={data} />
}

export default ItemDetails