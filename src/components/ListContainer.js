import React from 'react';

export default class ListContainer extends React.Component {

  constructor(props) {
    super();
    this.state={
      list:props.initialList,
      item:"",
    };
  }
  addItem(event){
    var item=this.state.item;
    var list=this.state.list;
    list.push(item);
    this.setState({
      list,
      item:""

    });
  }
  changeItemText(event){
    this.setState({
      item:event.target.value,
    });
  }

  render(){
    return (
      <div className="container">
        <div className="row">
            <div className="input-field col m6">
              <input className="validate" value={this.state.item} onChange={this.changeItemText.bind(this)}
                 type="text" id="item"/>
              <label htmlFor="item" >Add Item</label>
            </div>
            <div className="col m6">
              <button type="button" onClick={this.addItem.bind(this)}className="btn btn blue">Add</button>
            </div>
        </div>
        <div className="row">
          <div className="col m12">
              <ul className="collection">
                {this.state.list.map((item,index)=>
                  <li className="collection-item"key={index}>{item}</li>
                )}
              </ul>
          </div>
        </div>
      </div>
    );
  }
}
