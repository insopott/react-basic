import React from 'react';
import Nav from './Nav';
import Button from "./ButtonComponent";
import Footer from "./FooterComponent";
import Clock from "./Clock";
import ListContainer from "./ListContainer";
class Home extends React.Component {
    render () {
      return (
        <div className="flax">
          <header>
            <div className="container-fluid">
                <Nav/>

            </div>
          </header>
        <br/>
          <main>
            <div className="container">
                <Button/>
                <Clock/>
                <br/>
                <div className="row">
                  <div className="col m4">
                    <ListContainer initialList={[]}/>
                  </div>
                  <div className="col m4">
                    <ListContainer initialList={[]}/>
                  </div>
                  <div className="col m4">
                    <ListContainer initialList={[]}/>
                  </div>
                </div>
            </div>
          </main>
          <Footer/>
        </div>

      );
    }
}

export default Home;
