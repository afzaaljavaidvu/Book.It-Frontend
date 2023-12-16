import React, { Component } from 'react'

export default class FAQ extends Component {
  render() {
    return (
<div>
 <h2 className="mb-4" style={{color:'white'}}>Frequently Asked Questions</h2>
 <div className="accordion" id="accordionExample">
  <div className="card" style={{backgroundColor:'#2F4049',color:'white'}}>
    <div className="card-header" id="headingOne">
      <h5 className="mb-0">
        <button className="btn" type="button" style={{color:'white'}} data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          How can i add a new book?
        </button>
      </h5>
    </div>

    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
      <div className="card-body">
      Go to the Add Books page and add as many books as you like!  </div>
    </div>
  </div>
  <div className="card" style={{backgroundColor:'#2F4049',color:'white'}}>
    <div className="card-header" id="headingTwo">
      <h5 className="mb-0">
        <button className="btn collapsed" style={{color:'white'}} type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        What information is required to add a new book? </button>
      </h5>
    </div>
    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
      <div className="card-body">
      The book’s ISBN, title, author, genre, and summary is required to add a new book. And, of course, if you have a downloadable link to the book, we’d appreciate you placing it as well!   </div>
    </div>
  </div>
  <div className="card" style={{backgroundColor:'#2F4049',color:'white'}}>
    <div className="card-header" id="headingThree">
      <h5 className="mb-0">
        <button className="btn collapsed" style={{color:'white'}} type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        How do I unhide books? </button>
      </h5>
    </div>
    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
      <div className="card-body">
      You can go to the Hide Books page and click on the eye icon to unhide a book!</div>
    </div>
  </div>
  <div className="card" style={{backgroundColor:'#2F4049',color:'white'}}>
    <div className="card-header" id="headingThree">
      <h5 className="mb-0">
        <button className="btn collapsed" style={{color:'white'}} type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Can I update my profile information?</button>
      </h5>
    </div>
    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
      <div className="card-body">
      For sure! Just go to the My Profile page and change the information you want to, then click Update.</div>
    </div>
  </div>
</div>
    </div>      
    )
}
}