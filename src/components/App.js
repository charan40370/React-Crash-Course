import React,{ useState,useEffect } from "react";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {v4 as uuid_v4} from "uuid";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";


function App() {
  
  const LOCAL_STORAGE_KEY = "contacts";
  const[contacts, setContacts] = useState([]);//instead of using static contact list, now we using useState to make it dynamic
  //now we going to AddContact to add the contacts

  const addContactHandler = (contact) => {//This is going to get contact from AddContact.js file
    console.log(contact);//by this step, we are getting contacts from the AddContact page to this handler, we have set them to the setContacts, you can do that in the below step
    setContacts([...contacts, {id: uuid_v4(),...contact}]);//this way we can set the state, here we assigning to the setContacts, as this is array, we have used []
    //we have added uuid by doing this change: setContacts([...contacts, contact]);  {id: uuid(),...contact}]), this way we can add id to the contact, next using this id, we going to delete contact
  };

 useEffect(() => {//this useEffect will set into your local storage and you can use even after you refresh and you can use it untill you close your browser
   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
 },[contacts]);

 useEffect(() => {//this is to retrieve data from local storage, which we have assigned in the above step
  const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  if(retriveContacts) setContacts(retriveContacts);
},[]);

 const removeContactHandler = (id) => {//this is for delete function that deletes the contact. 
   const newContactList = contacts.filter((contact) => {//here we creating copy of contact list and filtering the contact based on id
     return contact.id !== id;
   });
   setContacts(newContactList);//finally we will pass this updated contact list to the ContactList component, see down in getContactId
 };

 
  return (
    <div className="ui container">

    <Router>
    {/*<Header/>//I am not adding this in any Route path as I want this in all pages as common header as a heading*/}

    <Switch>
    <Route path="/" exact 
     render ={(props) => (<ContactList
      {...props}
      contacts={contacts} getContactId={removeContactHandler} /> )} /> {/*added this render instead of below line}
    {/* component= {() => ( <ContactList contacts={contacts} getContactId={removeContactHandler} /> )} //using render instead of anonyous block which impacts see notes */}
     />
    <Route path="/add"    component= {() => ( <AddContact addContactHandler={addContactHandler} /> )} />
    
    </Switch>

     {/* <AddContact addContactHandler={addContactHandler}/>
    <ContactList contacts={contacts} getContactId={removeContactHandler}/>*/} {/*//when ever person hit*/}

    </Router>
  </div>
  );
}

export default App;    
