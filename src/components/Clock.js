import React, {Component} from 'react';

export default class Clock extends Component {

  constructor(props) {
      super();
        this.interval=null;
      this.state={
        label:"Start",
        sec:0,
        min:0,
        hour:0,
        btn:"btn btn-default"
      };
  }
  control(event){

    if(event.target.value=="Start"){
      this.setState({
        label:"End",
       btn:"btn btn-warning"
      });

      this.interval=setInterval(()=>{
        let sec=this.state.sec;
        let min=this.state.min;
        let h=this.state.hour;
        if(sec<60){
          sec=sec+1;
        }else{
          if(min<60){
            min++
          }else{
            h++;
            min=0;
          }
          sec=0;
        }
        this.setState({
          sec,
          min,
          hour:h
        });
      },1000);

    }else {
      this.setState({
        label:"Start",
         btn:"btn btn-primary",
      });
      clearInterval(this.interval);

    }

  }
  render(){
    return (
      <div className="row">
          <div className="col m6">
              <button className={this.state.btn} value={this.state.label} onClick={this.control.bind(this)}>{this.state.label}</button>
          </div>
          <div className="col m6">
              {this.state.hour}:{this.state.min}:{this.state.sec}
          </div>
      </div>
    );
  }
}
