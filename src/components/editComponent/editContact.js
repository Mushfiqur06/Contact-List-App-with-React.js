import React, { Component } from 'react';

class EditContact extends Component{

    nameHandler = (event) => {

    }

    phoneHandler = (event) => {

    }

    emailHandler = (event) => {

    }

    favouriteHandler = (event) => {
        event.preventDefaults()
    }
    render(){
        return(
            <div>
                <form>
                    <input 
                        type="text" 
                        placeholder="Enter You Name" 
                        value={this.props.contact.value} 
                        onChange={this.nameHandler}
                    />

                    <input 
                        type="text"
                        placeholder="Enter Your Phone"
                        value={this.props.contact.phone}
                        onChange={this.phoneHandler}
                    />

                    <input 
                        type="email"
                        placeholder="Enter Your Email"
                        value={this.props.contact.email}
                        onChange={this.emailHandler}
                    />

                    <input 
                        type="text"
                        checked={this.props.contact.isFavourite}
                        onChange={this.favouriteHandler}
                        value={this.props.contact.isFavourite}
                    />

                </form>
            </div>
            
        )
    }
}

export default EditContact;