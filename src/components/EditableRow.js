import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '@mui/material/Button';
import "../styles/main.css"


const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
  handleEditFormSubmit
}) => {
  return (
    <div style={{backgroundColor: "white"}}>
    <div className="row">
          <div className="col-sm-4">
            <input
              className="form-control"
              id="outlined-basic" 
              label="Outlined"
              type="text"
              required="required"
              placeholder="Enter a name..."
              name="fullName"
              value={editFormData.fullName}
              onChange={handleEditFormChange}
            />
            </div>
            <div className="col-sm-4">
            <input
              className="form-control"
              id="outlined-basic" 
              label="Outlined"
              type="text"
              required="required"
              placeholder="Enter an address..."
              name="address"
              value={editFormData.address}
              onChange={handleEditFormChange}
            />
          </div>
        <div className="col-sm-4">
            <input
              className="form-control"
              id="outlined-basic" 
              label="Outlined"
              type="text"
              required="required"
              placeholder="Enter a phone number..."
              name="phoneNumber"
              value={editFormData.phoneNumber}
              onChange={handleEditFormChange}
            />
          </div>
      </div>
      <div className="row" style={{padding: "15px"}}>
        <div className="col-sm-4">
          <input
            className="form-control"
            id="outlined-basic" 
            label="Outlined"
            type="email"
            required="required"
            placeholder="Enter an email..."
            name="email"
            value={editFormData.email}
            onChange={handleEditFormChange}
          />
        </div>
        <div className="col-sm-4">
        <Button variant="contained" size="small" onClick={handleEditFormSubmit}>Save</Button><Button variant="contained" size="small" onClick={handleCancelClick}>Cancel</Button>
        </div>
    </div>
    </div>
  );
};

export default EditableRow;
