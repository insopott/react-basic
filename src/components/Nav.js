import React from 'react';

class Nav extends React.Component{
  render(){
      return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
              <a className="navbar-brand" href="#">Test Reac Update2t</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse right" id="navbarNavDropdown">
                   <ul className="navbar-nav">
                     <li className="nav-item active">
                       <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                     </li>
                     <li className="nav-item">
                       <a className="nav-link" href="#">Features</a>
                     </li>
                     <li className="nav-item">
                       <a className="nav-link" href="#">Pricing</a>
                     </li>
                     <li className="nav-item dropdown">
                       <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                         Dropdown link
                       </a>
                       <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                         <a className="dropdown-item" href="#">Action</a>
                         <a className="dropdown-item" href="#">Another action</a>
                         <a className="dropdown-item" href="#">Something else here</a>
                       </div>
                     </li>
                   </ul>
              </div>
          </nav>
        </div>

      );
  }
};
export default Nav;
