import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
<div style={{color:'white'}}>
 <h2 style={{color:'white'}} className="mb-4">Contact Us</h2>
<form>
  <div className="form-group">
    <label htmlFor="name">Name</label>
    <input type="text" className="form-control" id="name" placeholder="Enter Name"/>
  </div>
  <div className="form-group">
    <label htmlFor="email">Email</label>
    <input type="email" className="form-control" id="email" placeholder="Enter Email"/>
  </div>
  <div className="form-group">
    <label htmlFor="message">Message</label>
    <textarea className="form-control" rows={5} id="message" placeholder="Enter Message"/>
  </div>
  <button type="submit" className="btn btn-dark">Send</button>
</form>
    </div>      
    )
}
}