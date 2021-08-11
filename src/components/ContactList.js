import React from "react";
import {Link} from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
    console.log(props);

    const deleteContactHandler = (id) => {
        props.getContactId(id);
    };

    

    const renderContactList = props.contacts.map((contact) => {       {/* removing props here and added one default contact above for testing Router concept*/}
        return (<ContactCard contact={contact} clickHandler = {deleteContactHandler} key={contact.id}/>);//{/*here we sending  Contalist  to the  contact card */}  
        {/*here we sending  Contalist  to the  contact card */} {/*For the delete part, we receiving data from child to this class, from here we passing data to the App.js component*/}
    });
    return (<div className="main"> <h2>Contact List
                                    <Link to = "/add">{/*This link will add the "/add" to the URL and will navigate to that page*/}
                                        <button className="ui button blue right">Add Contact</button>
                                    </Link>
                                    </h2>
             <div className="ui celled list"> {renderContactList} </div>
           </div>//{/*Here we using reference variable in Jsx for that we have to use {} braces and here we using render contactList that we created in above step*/} 
    );
    
};

export default ContactList;