import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
//import data from "./mock-data.json";
import ReadOnlyRow from "../components/ReadOnlyRow";
import EditableRow from "../components/EditableRow";
import Button from '@mui/material/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const EmployeeList = () => {
  const [contacts, setContacts] = useState([]);
  const [searchRow, setSearchRow] = useState('');
  const [isAdd, setIsAdd] = useState(false);


  const [addFormData, setAddFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  const [editFormData, setEditFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  
  const handleSearchFormChange = (event) => {
    event.preventDefault();

    const fieldValue = event.target.value;
    setSearchRow(fieldValue);

  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    console.log(event.target.getAttribute("name"))

    const newContact = {
      id: nanoid(),
      fullName: addFormData.fullName,
      address: addFormData.address,
      phoneNumber: addFormData.phoneNumber,
      email: addFormData.email,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
    setIsAdd(false);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      fullName: editFormData.fullName,
      address: editFormData.address,
      phoneNumber: editFormData.phoneNumber,
      email: editFormData.email,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      fullName: contact.fullName,
      address: contact.address,
      phoneNumber: contact.phoneNumber,
      email: contact.email,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  return (
    <>
    <div className="container" >
        <div className="row align-items-start">
          <div className="col" style={{padding: "25px"}}>
            <input 
                className="form-control"
                id="outlined-basic" 
                label="Outlined"
                type =  "text"
                name="searchbar"
                placeholder="Search ..."
                onChange={handleSearchFormChange}
                />
                </div>
                <div className="col" style={{padding: "25px"}}>
                  <Button variant="contained" size="small" onClick={(e)=>{
                      e.preventDefault();
                      setIsAdd(!isAdd);
                  }}>{!isAdd ? "Add":"Cancel"}</Button>
                </div>
        </div>
      </div>

      <div className="container" >
      {isAdd && 
      <div style={{backgroundColor: "white", padding: "15px"}}>
      <div style={{fontWeight: 'bold'}} >Add the Employee</div>
            {/* <button type="submit" >Add</button> */}
            <div className="row" style={{padding: "15px"}}>
              <div className="col-sm-4">
              Name:
                  <input
                    className="form-control"
                    id="outlined-basic" 
                    label="Outlined"
                    type="text"
                    name="fullName"
                    required="required"
                    placeholder="Enter a name..."
                    onChange={handleAddFormChange}
                  />
              </div>
            <div className="col-sm-4">
            Address:
                <input
                  className="form-control"
                  id="outlined-basic" 
                  label="Outlined"
                  type="text"
                  name="address"
                  required="required"
                  placeholder="Enter an addres..."
                  onChange={handleAddFormChange}
                />
              </div>
              <div className="col-sm-4">
              Phone Number:
                <input
                  className="form-control"
                  id="outlined-basic" 
                  label="Outlined"
                  type="text"
                  name="phoneNumber"
                  required="required"
                  placeholder="Enter a phone number..."
                  onChange={handleAddFormChange}
                />
            </div>
            </div>

            <div className="row" style={{padding: "15px"}}>
              <div className="col-sm-4">
              Email ID:
                <input
                  className="form-control"
                  id="outlined-basic" 
                  label="Outlined"
                  type="email"
                  name="email"
                  required="required"
                  placeholder="Enter an email..."
                  onChange={handleAddFormChange}
                />
            </div>
            <div className="col-sm-4">
                <Button variant="contained" size="small" onClick={handleAddFormSubmit}>Add</Button>
            </div>
            </div>
          </div>
          }
      </div>
      
      <div className="container" >
      <div id='show-form'>
            {
            contacts.filter(person=>person.fullName.toLowerCase().includes(searchRow.toLowerCase())).map((contact) => (
              <div style={{backgroundColor: "white", padding: "15px", margin: "10px"}}>
                {editContactId === contact.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                    handleEditFormSubmit={handleEditFormSubmit}
                  />
                ) : (
                  <ReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </div>
            ))}
      </div>
      </div>
    </>
  );
};

export default EmployeeList;