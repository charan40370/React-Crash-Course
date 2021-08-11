import React from 'react';

const Header = () => {//This is functional component
    return (
        <div className="ui fixed menu"> {/* //class vs className, you cannot use class a selector, in js Class is classes for  the oop */}
          <div className="ui container center">
            <h5>Contact Manager</h5> 
          </div>
        </div>  
        );
};


export default Header;