import React, { Component } from 'react';


class Resume extends Component {
  render() {
    if(this.props.data){
      var education = this.props.data.education.map(function(edu){
        return <div key={edu.school} className="row item">
           <div className="twelve columns">
              <h3>{edu.school}</h3>
              <p className="info">{edu.degree}</p>
              <p>
                {edu.description}
              </p>
           </div>
        </div>
      });

      var work = this.props.data.work.map(function(job){
        return <div key={job.company} className="row item">
           <div className="twelve columns">
              <h3><a href={job.companyLink} className="companylink" target="_blank" rel="noopener noreferrer">{job.company}</a></h3>
              <p className="info">{job.title}</p>
              <p>From {job.from} to {job.to}</p>
              <p>{job.description}</p>
           </div>
        </div>
      });

      var skills = this.props.data.skills.map(function(skill){
        var className = 'bar-expand '+skill.name.toLowerCase();
        return <li key={skill.name}><span style={{width:skill.level}} className={className}></span><em>{skill.name}</em></li>
      });
    }
    return (
      <section id="resume">
      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            {education}
         </div>
      </div>

      <div className="row work">
         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
         </div>
      </div>

      <div className="row skill">
         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>
         <div className="nine columns main-col">
            <p>Self-learning skills :-
            </p>
				<div className="bars">
				   <ul className="skills">
					  {skills}
					</ul>
				</div>
			</div>
      </div>
   </section>
    );
  }
}

export default Resume;
