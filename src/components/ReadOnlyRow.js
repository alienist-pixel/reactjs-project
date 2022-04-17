import React,{ Fragment, useState } from "react";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  
  const [isVisible, setIsVisible] = useState(false);
 
  return (
    <Fragment>
    <tr>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(contact.id)}>
          Delete
        </button>
        <button type="button" onClick={()=>setIsVisible(!isVisible)}>details</button>
      </td>

      <td>{contact.fullName}</td>
      <td>{contact.address}</td>
      <td>{contact.phoneNumber}</td>
      <td>{contact.email}</td>
      
    </tr>
    {isVisible?
    <tr>
         <p>Hiiiiiii</p>
    </tr>:null}
    </Fragment>
    
    
  );
};

export default ReadOnlyRow;
