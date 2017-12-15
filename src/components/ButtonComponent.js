import React from "react"
import Alert from "./MessageAlertComponent";
class ButtonComponent extends React.Component{
  constructor(){
    super();
    this.state={
      message:"Hello"
    };
  }
  changeText(){
    this.setState({
      message:"Something",
    });
  }
  render(){
      return (
        <div className="row">
            <div className="col-md-3">
                <button className="btn btn-warning">Click Me</button>
            </div>
            <div className="col-md-3">
                <input id="text"  onBlur={()=>this.changeText()}className="form-control"/>
            </div>
            <div className="col-md-6">
                <Alert message={this.state.message}/>
            </div>

        </div>
      );
  }
}
export default ButtonComponent;
