import React from "react";

class AddContact extends React.Component {
  state = { //we can directly use state, unlike react hook where we have to import useState to use React hook, here we directly used state
    name:"",
    email:"",
  };

   add = (e) => {
    e.preventDefault();// {/*//this will avoid page gets refreshed for the alert or for the function*/}
    if(this.state.name==="" || this.state.email === "") {
      alert("All the fields are mandatory!");
      return;
    }
    this.props.addContactHandler(this.state);//"FUNCTION AS PROP" -> From here we passing the state(which contatains both email and name and will be sent to App.js addContactHandler method)
    this.setState({name:"",email:""});// after setting the state in the above line, in this line we using setState to remove/refresh the boxes for next use
    console.log(this.state);
  }
    render() {
        return(
         <div className="ui main">
           <h2>Add Contact</h2>
           <form className="ui form" onSubmit={this.add}>    {/*///from here we sending form data(which is name & email) to the add function/method that we added above for mandatory fields check/validation*/}
             <div className = "field">
               <label>Name</label>
               <input type = "text" name="name" placeholder="Name"
               value={this.state.name} onChange={ (e) => this.setState({name: e.target.value}) }    />
             </div>
             <div className = "field">
               <label>Email</label>
               <input type = "text" name="name" placeholder="Email" 
               value={this.state.email} onChange={ (e) => this.setState({email: e.target.value}) }  />
             </div>
             <button className="ui button blue">Add</button>
           </form>
         </div>
        );
    }
}

export default AddContact;