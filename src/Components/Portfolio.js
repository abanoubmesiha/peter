import React, { Component } from 'react';


function PortfolioCat(props) {
   let result = props.List.map(function(project){        
      var imageUrl = 'images/portfolio/'+ project.image;
      return <div key={project.title} className="columns portfolio-item">
         <div className="item-wrap">
            <a href={project.url} target="_blank" title="">
               <img alt="" src={imageUrl} />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{project.title}</h5>
                     <p>{project.category}</p>
              </div>
               </div>
            </a>
         </div>
    
     </div>
    });
 return result;
   }

class Portfolio extends Component {
  render() {
    if(this.props.data){
       var portfolioAngular = this.props.data.projects.filter(p=>{return p.category.includes('Angular')});

    }
    return (
      <section id="portfolio">
      <div className="row">
         <div className="twelve columns collapsed text-center">
            <h1>Check Out Some of My Works.</h1>
            <h4 style={{color:'#8bc34a'}}>React</h4>
            <div id="portfolio-wrapper" className="bgrid-thirds s-bgrid-thirds cf">
            <PortfolioCat List={portfolioReact} />
            </div>
            <h4 style={{color:'#8bc34a'}}>Angular</h4>
            <div id="portfolio-wrapper" className="bgrid-thirds s-bgrid-thirds cf">
            <PortfolioCat List={portfolioAngular} />
            </div>
         </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;