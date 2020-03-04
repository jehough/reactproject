import React from 'react';
import ItemImage from './image.js';
import AddCartButton from './add_cart_button';



const   DisplayCard = props => (
    <div>
    <ItemImage item={props.item} clsname="showImage" />
    <p><strong>Description: </strong>{props.item.attributes.description}</p>
    <p className="price">{`$${props.item.attributes.price}`}</p>
    <AddCartButton item={props.item}/>
    </div>
  )


export default DisplayCard
