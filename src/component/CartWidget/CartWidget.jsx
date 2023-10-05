import { faCartShopping, faFontAwesome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./CartWidget.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";






const CartWidget = () => {

const {cartItems} = useContext (CartContext)
    
  return (
    <div className="cartContainer">
        <FontAwesomeIcon icon={faCartShopping} />
        <em className="numeroEstilo">{cartItems}</em>
    </div>
  )
}




export default CartWidget;