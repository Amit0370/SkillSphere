import React from 'react'

function About() {
  
  return (
    <> 
    <div>About Us  <br />
      <section id="team" class="team">

<h1 class="heading"><br/> Our Team</h1>

<div class="row">

<div class="card">
  <div class="image">
    <img src={require("../about/Amit.jpg")}/>
  </div>
  <div class="info">
    <h4> </h4>
    <h4>Amit Tapase</h4>
   
  </div>
</div>

<div class="card">
  <div class="image">
    <img  src={require("../about/ganesh.jpg")}/>
  </div>
  <div class="info">
    <h4> </h4>
    <h4>Ganesh Varkhede</h4>
    
  </div>
</div>

<div class="card">
  <div class="image">
    <img src={require("../about/mubeen.jpg")} alt=""/>
  </div>
  <div class="info">
    <h4> </h4>
    <h4>Mubeen Shaikh</h4>
    
  </div>
</div>
{ <div class="card">
  <div class="image">
    <img src={require("../about/prathamesh.jpg")} alt=""/>
  </div>
  <div class="info">
    <h4> </h4>
    <h4>Prathamesh Barad</h4>
    
  </div>
</div>}
{/* <div class="card">
  <div class="image">
    <img src={require("../about/sandeep.jpeg")} alt=""/>
  </div>
  <div class="info">
    <h4></h4>
    <h4></h4>
    
  </div>
</div> */}
</div>
</section>

    </div>
    </>
  )
}

export default About