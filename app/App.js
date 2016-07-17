import React from 'react';
import ReactDOM from 'react-dom';
import ListItems from './Components/ListItems'


export default class App extends React.Component {
  
  constructor(props){
    super(props);
    this.addItem = this.addItem.bind(this);
    this.state = {
      list: []
    };
  }

  addItem(event){
    console.log(this.refs.itemname.value);
    console.log(this.refs.itemvalue.value);
    var allItems = this.state.list.concat([{"name":this.refs.itemname.value,"value":this.refs.itemvalue.value}]);
    this.setState({list: allItems});
  }
  render(){
    console.log("rendering the react-component");
  	let str = " Grocery List"
    return (
      		<div>
      			<h1>{str}</h1>
            <input type ="text" ref="itemname"/>
            <input type ="text" ref="itemvalue"/>
            <button onClick={this.addItem}>Add Item</button>
            <ListItems items={this.state.list}/>
      		</div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
