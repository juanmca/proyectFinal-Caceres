import React from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
 import ItemCount from "../ItemCount/ItemCount"; 
 import "./ItemDetailContainer.css";

const ItemDetailContainer = ({ productData }) => {
  const [stock, setStock] = React.useState(10);
  const [onAdd, setOnAdd] = React.useState(false);

  const buttonStyles = {
    backgroundColor: "blue",
  };

  const buttonStylesOnAdd = {
    backgroundColor: "green",
  };

  return (
    
    
    <div className="cardContainer" >
    <Card style={{ width: "18rem"  }}>
      <Card.Img variant="top" src={productData.thumbnail} />
      <Card.Body>
        <Card.Title style={{fontSize:"1"}}>{productData.title}</Card.Title>
        {/* <Card.Text> <strong style={{color: "green", fontWeight: "bold"}}>"{productData.description}"</strong> </Card.Text> */}
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Precio: <strong>{productData.price}$ </strong> </ListGroup.Item>
        <ListGroup.Item>Stock: <strong>{productData.stock} unidades</strong></ListGroup.Item>
      </ListGroup>
      <Card.Body>
         <ItemCount />
        {stock >= 5 ? (
          <strong>Ultimas unidades disponibles</strong>
        ) : (
          <strong></strong>
        )} 
     
      </Card.Body>
    </Card>
    </div>
  );
};

export default ItemDetailContainer;