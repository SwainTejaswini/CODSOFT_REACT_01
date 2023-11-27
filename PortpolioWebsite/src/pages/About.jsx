import React from 'react';
import { useState } from 'react';
const About = () => {
  const [activeTab, setActiveTab] = useState('skills');

  const opentab = (tabname) => {
    setActiveTab(tabname);
  };
  return (<>
    <div id="about">
    <h1 className="sub-title">About Me</h1>
    <p className='p'>Hello, I'm Tejaswini swain, a passionate and detail-oriented 
        junior full stack Java developer.With a strong foundation in Java programming,I am dedicated to creating efficient and scalable solutionsthat seamlessly integrate front-end and back-end technologies.
        I have hands-on experience in building responsive and user-friendly  
    interfaces using HTML, CSS, and JavaScript with React-js coupled with a 
        solid understanding of server-side development using Java(j2se+j2ee).</p>
    <div className="container">
        <div className="row">
            <div className="about-col-1">
        </div>
                <div className="about-col-2">
        
        <div className="tab-titles">
        <p className={`tab-links ${activeTab === 'skills' ? 'active-link' : ''}`} onClick={() => opentab('skills')}>Skills</p>
      <p className={`tab-links ${activeTab === 'experience' ? 'active-link' : ''}`} onClick={() => opentab('experience')}>Experience</p>
      <p className={`tab-links ${activeTab === 'education' ? 'active-link' : ''}`} onClick={() => opentab('education')}>Education</p>
         </div>
         <div className="tab-contents active-tab">
  {activeTab === 'skills' && (
    <>
      <div>Skills Content Goes Here</div>
      <ul>
        <li><span>Programming languages</span><br />Java (J2SE, J2EE) JavaScript (ES6+)</li>
        <li><span>Front end development</span><br />HTML5, CSS3 React.js and other CSS frameworks</li>
        <li><span>Back end development</span><br />Spring Boot</li>
        <li><span>Database technologies</span><br />SQL (MySQL, Oracle) NoSQL databases (MongoDB)</li>
      </ul>
    </>
  )}
</div>

<div className="tab-contents active-tab" >
  {activeTab === 'experience' && (
    <ul>
      <li><span>Programming languages</span><br />Java (J2SE, J2EE) JavaScript (ES6+)</li>
      <li><span>Front end development</span><br />HTML5, CSS3 React.js, Bootstrap or other CSS frameworks</li>
      <li><span>Back end development</span><br />Spring Framework (Spring Boot)</li>
    </ul>
  )}
</div>

<div className="tab-contents active-tab">
  {activeTab === 'education' && (
    <>
      <div>Education Content Goes Here</div>
      <ul>
        <li><span>2021-2023</span><br />Post graduation MCA from KIIT institute</li>
        <li><span>2018-2021</span><br />Graduation from KK college </li>
        <li><span>2016-2018</span><br />Intermediate from Talent's college</li>
      </ul>
    </>
  )}
</div>

    </div>
   </div>
   </div>
  </div>
  
    </>
  );
};

export default About;
