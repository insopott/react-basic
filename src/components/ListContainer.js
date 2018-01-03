import React from 'react';

export default class ListContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      list:props.initialList,
      item:"",
    };
  }
  submitForm(event){
    event.preventDefault();
    console.log(this.refs);
  }
  addItem(event){
  //  value={this.state.item} onChange={this.changeItemText.bind(this)}
    /*var item=this.state.item;
    var list=this.state.list;
    if(item.length>0)
      list.push(item);
    this.setState({
      list,
      item:""

    });*/
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
            <form onSubmit={this.submitForm.bind(this)}>
            <div className="input-field col m6">

              <input className="validate" ref="item" name="item" value={this.state.item} onChange={this.changeItemText.bind(this)}
                 type="text" id="item"/>
              <label htmlFor="item" >Add Item</label>
            </div>
            <div className="col m6">
              <button type="submit" onClick={this.addItem.bind(this)}className="btn btn blue">Add</button>

            </div>
            </form>
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
