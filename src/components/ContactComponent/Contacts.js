import React, { Component } from 'react';
import Contact from './Contact';

class Contacts extends Component{
    render(){
        if(this.props.contact.length === 0){
            return <p>There is no Contact Aviable</p>
        }

        return <div className='row'>
            {this.props.contact.map((contact, index) => {
                return <Contact contact={contact} key={index} />
            })}
        </div>
        
        
    }
}

export default Contacts;