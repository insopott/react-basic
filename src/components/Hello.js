import React from 'react';
import Nav from './Nav';
import Button from "./ButtonComponent";
class Home extends React.Component {
    render () {
      return (
          <div className="container-fluid">
              <Nav/>
            <br/>
              <Button/>
          </div>
      );
    }
}

export default Home;
