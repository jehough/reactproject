import React, {Component} from 'react';
import CategoryList from '../components/category_list.js';
import DisplayTitle from '../components/title.js'




class Categories extends Component {
  constructor(){
    super()
    this.state = {
      fishList: [],
      eqList: []
    }
  }

  divideLists = (json) => {
    const fishList = json.data.filter(obj => obj.attributes.division === "Fish and Marine Life")
    const eqList = json.data.filter(obj => obj.attributes.division === "Equipment")
    this.setState({fishList: fishList, eqList: eqList})
  }
  componentDidMount(){
   fetch(`http://localhost:4000/categories`)
     .then(resp=> resp.json())
     .then(json => this.divideLists(json))
 }
  render(){
    return(<div>
      <DisplayTitle title={"Fish and Marine Life"} />
      <CategoryList list={this.state.fishList}/>
      <DisplayTitle title={"Equipment"} />
      <CategoryList list={this.state.eqList} />

      </div>)
  }
}
export default Categories
