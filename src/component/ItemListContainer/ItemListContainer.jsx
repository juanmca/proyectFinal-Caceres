import React from 'react'

import { useNavigate } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import  "./ItemListContainer.css";

const ItemListContainer = ({ productsData }) => {
  
  const navigate = useNavigate();

  return (
    <div className="productContainer">
      {productsData.map((product) => {
        return (
          <Card style={{ width: "16rem" }} key={product.id} className="zoomCard">
            <Card.Img variant="top" src={product.thumbnail} />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>{product.descripcion}</Card.Text>
              <div className="botonDetalles">
              <Button
                variant="primary" 
                onClick={() => navigate(`/item/${product.id}`)} 
              >
                Detalles
              </Button>
              </div>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default ItemListContainer;