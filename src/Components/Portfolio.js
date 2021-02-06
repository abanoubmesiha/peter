import React, { Component } from 'react';


function PortfolioCat(props) {
   let result = props.List.map(function(project){        
      var imageUrl = 'images/portfolio/'+ project.image;
            return( 
               
            <div key={project.title} style={{marginBottom:'0.5rem'}} className="columns portfolio-item">
         <div className="item-wrap">
            <a href={project.url} target="_blank" rel="noopener noreferrer" title="">
               <img alt="" src={imageUrl} />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{project.title}</h5>
              </div>
               </div>
            </a>
         </div>
     </div>
     )
    });
    
 return ( result.length === 0)? false :(
   <div id={props.Title +'-wrapper'} className="bgrid-thirds s-bgrid-thirds cf">
   <h4 style={{color:'#8bc34a'}}>{props.Title}</h4>
   {result}
   </div>
 );
   }

class Portfolio extends Component {
  render() {
    if(this.props.data){
       var portfolioWork = this.props.data.projects.filter(p=>{return p.category.includes('Work')});
       var portfolioPersonal = this.props.data.projects.filter(p=>{return p.category.includes('Personal')});
       var portfolioNovartis = this.props.data.projects.filter(p=>{return p.category.includes('Novartis')});
      //  var AllCat = Array.prototype.concat(portfolioPersonal, portfolioNovartis);
    }
    return (
      <section id="portfolio">
          <div className="row">
             <div className="twelve columns collapsed text-center">
                <h1 style={{marginLeft: '2rem', marginRight: '2rem'}}>Check below some of my ideas i have executed in graphic designs and videos either in my work for Novartis or in my personal life.</h1>

                <PortfolioCat Title={'Videos'} List={portfolioNovartis} />
                <PortfolioCat Title={'Work Photo Designs'} List={portfolioWork} />
                <PortfolioCat Title={'Personal Photo Designs'} List={portfolioPersonal} />
                </div>
             </div>
       </section>
    );
  }
}

export default Portfolio;
