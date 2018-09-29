import React, { Component } from 'react';
import css from './Contact.css'

class Contact extends Component{
    render(){
        return (
            <div className='col-sm-4'>
                <div className='singleContactWrapper'>
                    <div className='contactPersonImg text-center'>
                        <i class="fas fa-user-tie"></i>
                    </div>
                    <div className='contactPersonInfo text-center'>
                        <h2>{this.props.contact.name}</h2>
                        <p><i class="fas fa-map-marker-alt"></i> Kisko, Finland</p>
                        <h3><i class="far fa-envelope"></i> <a>{this.props.contact.email}</a></h3>
                        <h3 className='phone'><i class="fas fa-phone-volume"></i> {this.props.contact.phone}</h3>
                    </div>
                    <div className='contactUtility text-center'>
                        <div className='moreInfo'>
                            <p>More Info</p>
                            <i class="fas fa-long-arrow-alt-right"></i>
                        </div>
                        <div className='editInfo'>
                            <i class="far fa-edit" title='For Edit'></i>
                        </div>
                        <div className='deleteInfo'>
                            <i class="far fa-trash-alt" title='For Delete'></i>
                        </div>
                        <div className='likeInfo'>
                            {this.props.contact.isFavorite ? <i class="fas fa-thumbs-up" title='For Unfavorite'></i> : <i class="far fa-thumbs-up" title='For Fovrite'></i>}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;