import React from "react"
import Alert from "./MessageAlertComponent";
class ButtonComponent extends React.Component{
  constructor(){
    super();
    this.state={
      message:"Hello"
    };
  }
  changeText(event){
    console.log(event.target.value);
    this.setState({
        message:event.target.value
    });
  }
  render(){
      return (
        <div className="row">
            <div className="col m3">
                <button className="btn btn-warning">Click Me</button>
            </div>
            <div className="col m3 ">
                <input id="text" value={this.state.message}  onChange={this.changeText.bind(this)} className="form-control"/>
            </div>
            <div className="col m6 right">
                <Alert message={this.state.message}/>
            </div>

        </div>
      );
  }
}
export default ButtonComponent;
