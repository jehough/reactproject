import React from 'react';
import ItemImage from './image.js';
import Button from 'react-bootstrap/Button';


const   DisplayCard = props => (
    <div>
    <ItemImage item={props.item} clsname="showImage" />
    <p><strong>Description: </strong>{props.item.attributes.description}</p>
    <p className="price">{`$${props.item.attributes.price}`}</p>
    <Button variant="info">Add to Cart</Button>
    </div>
  )


export default DisplayCard
