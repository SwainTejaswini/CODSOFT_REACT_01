import React from 'react';

function Project() {
  return (
    <>
    
    <div id="portfolio">
    <div class="container">
        <h1 class="sub-title">My work</h1> 
        <h3>Book Management System</h3>
        <div class="work-list">
            <div class="work">
                <img src=".\src\l1.jpg"></img>
                <div class="layer">
                    <h3>Book Management</h3>
                </div>
            </div>
            <h3>HealthCare Management</h3>
            <div class="work">
                <img src=".\src\h1.jpg"></img>
                <div class="layer">
                    <h3>HealthCare</h3>
                </div>
            </div>
            <h3>Banking App</h3>
            <div class="work">
                <img src=".\src\b1.jpg"></img>
                <div class="layer">
                    <h3>Banking</h3>
                </div>
            </div>
        </div>
        <a href="#" class="btn">see more</a>
    </div>
</div>
    </>
)}

export default Project;
