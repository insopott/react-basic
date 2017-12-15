import React from "react";

class MessageAlertComponent extends React.Component {

  render(){
    return (
      <div className="alert alert-success">
        <h2>{this.props.message}</h2>
      </div>
    );
  }
}
export default MessageAlertComponent;
