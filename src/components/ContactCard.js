import React from 'react';
import user from "../images/user.png";

const ContactCard = (props) => { {/*//we will receive props from contactlist component*/}
    const {id,name,email} = props.contact; {/*//this is destructuring that will reduce the count and it will loop, with this you can directly use {email} instead of  {contact.email}*/}
    return (
        <div className="item">
            <img className="ui avatar image" src={user} alt="user" />
          <div className="content">
             <div className="header"> {name}</div> {/*//this is like a getter that gets value from props */}
             <div>{email}</div>
          </div>
          <i className="trash alternate outline icon"
          style={{color:"red", marginTop:"7px"}} onClick={() => props.clickHandler(id)}  ></i> {/*///This is inline styling for that you have to use {}*/}
          {/*here we using clickHandler, when the person hits that icon we passing the id using props
           ****Important concept:Here we passing from smallest child -> child -> Parent like ContactCard -> ContactList -> App.js, we passing id data from small child to parent*/} 
        </div>
    );
};

export default ContactCard;