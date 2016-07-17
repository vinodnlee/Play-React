import React from 'react';

export default class ListItems extends React.Component{

	constructor(props){
		super(props);
		this.renderList = this.renderList.bind(this);
	}

    renderList(){
    	console.log("rendering li");
    	console.log(this.props.items);
    	var listitem = [];
    	this.props.items.map(function(itemText,index) { 
    						listitem.push(<li key={index}>{itemText.name}</li>,<li>{itemText.value}</li>) 
    					})
    	return (listitem)
    }
	render(){
		console.log("rendering list");
		return (<ul>{this.renderList()}</ul>);
	}
}