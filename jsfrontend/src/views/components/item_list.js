import React from 'react';
import ItemRow from './item_row.js'

 const ItemList = props => (<div>
      <table>
      <tbody>
        {props.list.map(item => <ItemRow key={item.id} item={item}/>)}
      </tbody>
      </table>

    </div>)
export default ItemList
