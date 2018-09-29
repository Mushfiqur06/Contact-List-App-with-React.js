import React, { Component } from 'react';
import faker from 'faker'
import uuid from 'uuid/v1'
import CSS from './App.css'
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

    changeFavoritehandle = (contact) => {
        
    }
    render(){
        return ( 
            <div className='contactAppWrapper'>
                <h1>Contact List Single Page Application</h1>
                <div className='container'>
                
                    
                    <Contacts contact={this.state.contactList} />
                </div>
            </div>
        ) 
    }
}

export default App;