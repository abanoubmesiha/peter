import React, { Component } from 'react';


class Footer extends Component {
  render() {
    return (
      <footer>

      <div className="row">

         <div className="twelve columns">


            <ul className="copyright">
               <li>&copy; Copyright 2021 Peter Nagy </li>
               <li>Design by <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/abanoub-ayoub-025890b7/">Peter Nagy</a></li>
            </ul>

         </div>

         <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>

      </div>

   </footer>
    );
  }
}

export default Footer;
