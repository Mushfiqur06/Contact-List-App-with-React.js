import React, { Component } from 'react';
import faker from 'faker'
import uuid from 'uuid/v1'
import './App.css'
import Contacts from './ContactComponent/Contacts'

class App extends Component{
    state = {
        contacts: [
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
        ],

        alertDialogSlideOpen: false

    }

    editehandleOpen = () => {
        this.setState({
           alertDialogSlideOpen: true 
        })
    }

    editehandleClose = () => {
        this.setState({
            alertDialogSlideOpen: false
        })
    }

    
    //Like and unlike Icon Handler
    changeFavoritehandle = (contact) => {
        let index = this.state.contacts.findIndex(ct => ct.id === contact.id);
        let contacts = [...this.state.contacts];
        contacts[index].isFavorite = !contacts[index].isFavorite;
        this.setState({
            contacts
        })
    }

    //Delete Icon hanlder
    deletehandler = (contact) => {
        let index = this.state.contacts.findIndex( ct => ct.id === contact.id);
        let contacts = [...this.state.contacts];

        contacts.splice(index, 1);
        this.setState({
            contacts
        })
        console.log(this.state)
    }

    //Change Name Handler
    changeNameHandler = (contact) => {
        let index = this.state.contacts.findIndex( ct => ct.id === contact.id);
        let contacts = [...this.state.contacts];

        contacts[index].name = contact.name;

        this.setState({
            contacts
        })
    }

    //Change Phone Handler
    changeNameHandler = (contact) => {
        let index = this.state.contacts.findIndex( ct => ct.id === contact.id);
        let contacts = [...this.state.contacts];

        contacts[index].phone = contact.phone;

        this.setState({
            contacts
        })
    }

    //Change Phone Handler
    changeNameHandler = (contact) => {
        let index = this.state.contacts.findIndex( ct => ct.id === contact.id);
        let contacts = [...this.state.contacts];

        contacts[index].email = contact.email;

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
                        editehandleOpen = {this.editehandleOpen.bind(this)}
                        deletehandler = {this.deletehandler.bind(this)}
                        favouriteHandler={this.changeFavoritehandle.bind(this)} 
                        contact={this.state.contacts} 
                    />
                </div>
            </div>
        ) 
    }
}

export default App;