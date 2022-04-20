import React,{ Fragment, useState } from "react";
import "../styles/main.css"

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  
  const [isVisible, setIsVisible] = useState(false);
 
  return (
    <div class="row">
        <div class="col-sm-8">{contact.fullName}  {contact.email}
        </div>
        <div class="col-sm-4"><button
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(contact.id)}>
          Delete
        </button>
        <button type="button" onClick={()=>setIsVisible(!isVisible)}>details</button>
        </div>
    {isVisible?
    <tr>
         <p>Phone Number: {contact.phoneNumber}</p>
    </tr>:null}
    </div>
  );
};

export default ReadOnlyRow;
