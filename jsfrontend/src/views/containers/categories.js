import React, {Component} from 'react';
import CategoryList from '../components/category_list.js';
import DisplayTitle from '../components/title.js';



class Categories extends Component {
  constructor(){
    super()
    this.state = {
      input: '',
      fishList: [],
      eqList: []
    }
  }

  divideLists = (json) => {
    const fishList = json.data.filter(obj => obj.attributes.division === "Fish and Marine Life")
    const eqList = json.data.filter(obj => obj.attributes.division === "Equipment")
    this.setState({fishList, eqList})
  }

  handleChange = (e) => {
    const input = e.target.value
    this.setState({input})

  }
  componentDidMount(){

   fetch(`http://localhost:4000/categories`)
     .then(resp=> resp.json())
     .then(json =>
       this.divideLists(json)
     )

    }
  render(){
    return(<div>
      <DisplayTitle title={"Fish and Marine Life"} />
      <input type="text" onChange={this.handleChange} />
      <CategoryList list={this.state.fishList} input={this.state.input}/>
      <DisplayTitle title={"Equipment"} />
      <CategoryList list={this.state.eqList} input={this.state.input} />
      </div>)
  }
}
export default Categories
