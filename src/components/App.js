import React, { Component } from "react";
import faker from "faker";
import uuid from "uuid/v1";
import "./App.css";
import Contacts from "./ContactComponent/Contacts";
import EditContact from "./editComponent/editContact";
import Form from "./Form/Form";
import { data } from "./data";
class App extends Component {
  state = {
    isModal: false,
    contacts: [
      //   {
      //     id: uuid(),
      //     name: faker.name.findName(),
      //     email: faker.internet.email(),
      //     phone: faker.phone.phoneNumber(),
      //     location: "Kisko, Finland, 123",
      //     isFavorite: false,
      //   },
      //   {
      //     id: uuid(),
      //     name: faker.name.findName(),
      //     email: faker.internet.email(),
      //     phone: faker.phone.phoneNumber(),
      //     location: "Kisko, Finland, 123",
      //     isFavorite: false,
      //   },
      //   {
      //     id: uuid(),
      //     name: faker.name.findName(),
      //     email: faker.internet.email(),
      //     phone: faker.phone.phoneNumber(),
      //     location: "Kisko, Finland, 123",
      //     isFavorite: false,
      //   },
      //   {
      //     id: uuid(),
      //     name: faker.name.findName(),
      //     email: faker.internet.email(),
      //     phone: faker.phone.phoneNumber(),
      //     location: "Kisko, Finland, 123",
      //     isFavorite: false,
      //   },
      //   {
      //     id: uuid(),
      //     name: faker.name.findName(),
      //     email: faker.internet.email(),
      //     phone: faker.phone.phoneNumber(),
      //     location: "Kisko, Finland, 123",
      //     isFavorite: false,
      //   },
      //   {
      //     id: uuid(),
      //     name: faker.name.findName(),
      //     email: faker.internet.email(),
      //     phone: faker.phone.phoneNumber(),
      //     location: "Kisko, Finland, 123",
      //     isFavorite: false,
      //   },
    ],

    alertDialogSlideOpen: false,
    selectedContact: {},
  };

  componentDidMount() {
    const fetchData = async () => {
      const res = await data;
      this.setState({
        contacts: res,
      });
    };
    fetchData();
  }
  reload = () => {
    const fetchData = async () => {
      const res = await data;
      this.setState({
        contacts: res,
      });
    };
    fetchData();
  };

  editehandleOpen = () => {
    this.setState({
      alertDialogSlideOpen: true,
    });
  };

  editehandleClose = () => {
    this.setState({
      alertDialogSlideOpen: false,
    });
  };

  //Like and unlike Icon Handler
  changeFavoritehandle = (contact) => {
    let index = this.state.contacts.findIndex((ct) => ct.id === contact.id);
    let contacts = [...this.state.contacts];
    contacts[index].isFavorite = !contacts[index].isFavorite;
    this.setState({
      contacts,
    });
  };

  //Delete Icon hanlder
  deletehandler = (contact) => {
    let index = this.state.contacts.findIndex((ct) => ct.id === contact.id);
    let contacts = [...this.state.contacts];

    contacts.splice(index, 1);
    this.setState({
      contacts,
    });
    console.log(this.state);
  };

  //Change Name Handler
  changeNameHandler = (contact) => {
    let index = this.state.contacts.findIndex((ct) => ct.id === contact.id);
    let contacts = [...this.state.contacts];

    contacts[index].name = contact.name;

    this.setState({
      contacts,
    });
  };

  //Change Phone Handler
  changeNameHandler = (contact) => {
    let index = this.state.contacts.findIndex((ct) => ct.id === contact.id);
    let contacts = [...this.state.contacts];

    contacts[index].phone = contact.phone;

    this.setState({
      contacts,
    });
  };

  //Change Phone Handler
  changeNameHandler = (contact) => {
    let index = this.state.contacts.findIndex((ct) => ct.id === contact.id);
    let contacts = [...this.state.contacts];

    contacts[index].email = contact.email;

    this.setState({
      contacts,
    });
  };

  //Edit COntact Handler
  editConctactHandler = (contact) => {
    this.setState({
      selectedContact: contact,
    });
  };

  //Remove Selected Contact
  removeSelectedContact = () => {
    this.setState({
      selectedContact: null,
    });
  };
  isModalHandler = () => {
    this.setState({ isModal: !this.state.isModal });
  };

  render() {
    return (
      <div className="contactAppWrapper">
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <button
                type="button"
                className="btn btn-success"
                onClick={this.isModalHandler}
              >
                Create New Contact
              </button>
              {this.state.isModal ? (
                <Form reload={this.reload} isModal={this.isModalHandler} />
              ) : null}
            </div>
          </div>

          <h1>Contact List Single Page Application</h1>
          <Contacts
            editehandleOpen={this.editehandleOpen.bind(this)}
            deletehandler={this.deletehandler.bind(this)}
            favouriteHandler={this.changeFavoritehandle.bind(this)}
            contact={this.state.contacts}
          />
        </div>
      </div>
    );
  }
}

export default App;
