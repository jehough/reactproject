import React, {Component} from 'react';
import ItemRow from './item_row.js'

 const ItemList = props => (<div>
      <table>
      <tbody>
        {props.list.map(item => <ItemRow item={item}/>)}
      </tbody>
      </table>

    </div>)
export default ItemList
