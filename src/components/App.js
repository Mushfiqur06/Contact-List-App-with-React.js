import React, { Component } from 'react';
import faker from 'faker'
import uuid from 'uuid/v1'
import './App.css'
import Contacts from './ContactComponent/Contacts'

class App extends Component{
    state = {
        contactList: [
            {
                id: uuid(),
                name: faker.name.findName(),
                email: faker.internet.email(),
                phone: faker.phone.phoneNumber(),
                location: 'Kisko, Finland, 123',
                isFavorite: false
            },
            {
                id: uuid(),
                name: faker.name.findName(),
                email: faker.internet.email(),
                phone: faker.phone.phoneNumber(),
                location: 'Kisko, Finland, 123',
                isFavorite: false
            },
            {
                id: uuid(),
                name: faker.name.findName(),
                email: faker.internet.email(),
                phone: faker.phone.phoneNumber(),
                location: 'Kisko, Finland, 123',
                isFavorite: false
            },
            {
                id: uuid(),
                name: faker.name.findName(),
                email: faker.internet.email(),
                phone: faker.phone.phoneNumber(),
                location: 'Kisko, Finland, 123',
                isFavorite: false
            },
            {
                id: uuid(),
                name: faker.name.findName(),
                email: faker.internet.email(),
                phone: faker.phone.phoneNumber(),
                location: 'Kisko, Finland, 123',
                isFavorite: false
            },
            {
                id: uuid(),
                name: faker.name.findName(),
                email: faker.internet.email(),
                phone: faker.phone.phoneNumber(),
                location: 'Kisko, Finland, 123',
                isFavorite: false
            }
        ]
    }

    
    //Like and unlike Icon Handler
    changeFavoritehandle = (contact) => {
        let index = this.state.contactList.findIndex(ct => ct.id === contact.id);
        let contacts = [...this.state.contactList];
        contacts[index].isFavorite = !contacts[index].isFavorite;
        this.setState({
            contacts
        })
    }

    //Delete Icon hanlder
    deletehandler = (contact) => {
        let index = this.state.contactList.findIndex( ct => ct.id === contact.id);
        let contacts = [...this.state.contactList];

        contacts.splice(index, 1);
        this.setState({
            contacts
        })
    }
    render(){
        return ( 
            <div className='contactAppWrapper'>
                <h1>Contact List Single Page Application</h1>
                <div className='container'>
                
                    
                    <Contacts 
                        deletehandler = {this.deletehandler.bind(this)}
                        favouriteHandler={this.changeFavoritehandle.bind(this)} 
                        contact={this.state.contactList} 
                    />
                </div>
            </div>
        ) 
    }
}

export default App;