import React from 'react';

const ItemImage = props => <img src={`http://localhost:4000${props.item.attributes.image_url}`} className={props.clsname} alt={`${props.item.id}`}/>

export default ItemImage
