import React, {Component} from 'react';
import DisplayTitle from '../components/title.js'
import ItemList from '../components/item_list.js'
import {connect} from 'react-redux'




class Cart extends Component {


  render(){
    return(<div>
      <DisplayTitle title={"Your Cart"} />
      <ItemList list={this.props.items}/>
      </div>)
  }
}

const mapStateToProps = state => {
  return {
    items: state.items,
    price: state.price
  }
}

export default connect(mapStateToProps)(Cart)
