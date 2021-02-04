import React, { Component } from 'react';
require ('../resumeData.json');

class About extends Component {
  render() {
    if(this.props.data){
        var name = this.props.data.name;
        var image = 'images/'+this.props.data.image;
        var bio = this.props.data.bio;
      //   var street = this.props.data.address.street;
      //   var city = this.props.data.address.city;
        var state = this.props.data.address.state;
      //   var zip = this.props.data.address.zip;
        var phone = this.props.data.phone;
        var email = this.props.data.email;
        var resumeDownload = this.props.data.resumedownload;
    }
    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={image} alt="" />
         </div>
         <div className="nine columns main-col">
            <h2>Current Qualifications</h2>
            <ul>
               {bio.map((point, i)=>(<li key={i}>{point}</li>))}
               <li>
               Worked in online marketing before joining Novartis and it helped me to own a group of social Facebook pages with a total followers reach more than 6 million followers. 
                  <ol>
                     <li><a href="https://www.facebook.com/Connect4.Online" rel="noreferrer">https://www.facebook.com/Connect4.Online</a></li>
                     <li><a href="https://www.facebook.com/Sharek.Br2yak" rel="noreferrer">https://www.facebook.com/Sharek.Br2yak</a></li>
                     <li><a href="https://www.facebook.com/A3gbny.Like" rel="noreferrer">https://www.facebook.com/A3gbny.Like</a></li>
                     <li><a href="https://www.facebook.com/Ed7ak.Nokat.Page" rel="noreferrer">https://www.facebook.com/Ed7ak.Nokat.Page</a></li>
                     <li><a href="https://www.facebook.com/Ekteb.Nokta" rel="noreferrer">https://www.facebook.com/Ekteb.Nokta</a></li>
                     <li><a href="https://www.facebook.com/7ob.Romancya" rel="noreferrer">https://www.facebook.com/7ob.Romancya</a></li>
                     <li><a href="https://www.facebook.com/M3louma.Themk" rel="noreferrer">https://www.facebook.com/M3louma.Themk</a></li>
                     <li><a href="https://www.facebook.com/Love.7ob.Page" rel="noreferrer">https://www.facebook.com/Love.7ob.Page</a></li>
                     <li><a href="https://www.facebook.com/Carcter" rel="noreferrer">https://www.facebook.com/Carcter</a></li>
                     <li><a href="https://www.facebook.com/A7laaa.kalam" rel="noreferrer">https://www.facebook.com/A7laaa.kalam</a></li>
                     <li><a href="https://www.facebook.com/2020Egypt" rel="noreferrer">https://www.facebook.com/2020Egypt</a></li>
                  </ol>
               </li>
            </ul>
            <h2>My Objective</h2>
            <p>Following a developmental plan to empower my technical qualifications with the important academic knowledge of Digital Marketing Principles and Requirements to help me join Novartis Digital Marketing Team.</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2 style={{marginBottom: '5px'}}>Contact Details</h2>
                  <p className="address">
						   {/* <span>{name}</span><br /> */}
						   {state} 
                     <br />
						   <span>{phone}</span><br />
                     <span>{email}</span>
					   </p>
               </div>
               {/* <div className="columns download">
                  <p>
                     <a href={resumeDownload} target="_blank" rel="noopener noreferrer" className="button"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div> */}
            </div>
         </div>
      </div>
   </section>
    );
  }
}

export default About;
