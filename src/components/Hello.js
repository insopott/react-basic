import React from 'react';
import Nav from './Nav';
import Button from "./ButtonComponent";
import Footer from "./FooterComponent";
class Home extends React.Component {
    render () {
      return (
        <div>
          <header>
            <div className="container-fluid">
                <Nav/>

            </div>
          </header>
        <br/>
          <main>
            <div className="container">
                <Button/>
            </div>
          </main>
          <Footer/>
        </div>

      );
    }
}

export default Home;
