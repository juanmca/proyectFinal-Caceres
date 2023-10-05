
import ItemListContainer from "../component/ItemListContainer/ItemListContainer"
import LoaderComponent from "../component/LoaderComponent/LoaderComponent"
import { useCollection } from "../hooks/useCollection"



 const Home = () => {

  const { data, loading } = useCollection("products")

return loading ? <LoaderComponent /> : <ItemListContainer productsData={data} />   
}    

export default Home