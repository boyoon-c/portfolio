import React, { Component } from "react";

class Contact extends Component {

  render() {

    
    if (this.props.sharedBasicInfo) {
      var contacts = this.props.sharedBasicInfo.contacts.map((contact)=>{
        return(
          <div>
            {contact.name}: {contact.body}
          </div>
        )
      })
      
    }
    return(
      <section id="portfolio">
      <div className="col-md-12">
        <div className="col-md-12">
          <h1 className="section-title">
            <span className="text-dark">Contacts</span>
          </h1>
        </div>
        <div className="contact-info">
          <a href="mailto: boyoonchang@gmail.com">Send Email Here</a> 
          {contacts}
        </div>
      </div>
    </section>
);
  }
}

export default Contact;
