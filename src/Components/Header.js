import React, { Component } from 'react';


class Header extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var occupation = this.props.data.occupation;
      var company = this.props.data.company;
      var companyLink = this.props.data.companyLink;
      var description = this.props.data.description;
      // var city = this.props.data.address.city;
      // var networks = this.props.data.social.map(function (network) {
      //   return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      // });
    }
    return (
      <header id="home">
        <nav id="nav-wrap">
          {/* <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a> */}
          <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
            {/* <li><a className="smoothscroll" href="#resume">Resume</a></li> */}
            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
           
          </ul>

        </nav>

        {/*
        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">{name}</h1>
            <h3><span>{occupation}<a href={companyLink} className="companylink" target="_blank" rel="noopener noreferrer">{company}</a></span> {description}</h3>
            <hr />
          </div>
        </div>
        <ul className="above-scrolldown social">
          {networks}
        </ul> */}
        <p className="scrolldown">
          <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
        </p>
      </header>
    );
  }
}

export default Header;
