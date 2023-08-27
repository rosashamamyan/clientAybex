import React, { useState } from "react";
import { TextField } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs'
import SaveChanges from "../SaveChanges";
import { useDispatch } from "react-redux";
import { addUser } from "../../../features/users/userSlice";
import "./style.css";

const AddUser = ({ toggleForm }) => {
  const dispatch = useDispatch()
  const [isShow, setIsShow] = useState(true);
  const [isSaveOpen, setIsSaveOpen] = useState(false)
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    state: "",
    country: "",
    phone: "",
    city: "",
    postal_code: "",
    dob: "",
    account_number: "",
    status: ""
  });
  const {
    firstName,
    lastName,
    email,
    address,
    state,
    country,
    phone,
    city,
    postal_code,
    dob,
    account_number,
    status
  } = form;

  console.log(form);

  const handleShow = () => {
    setIsShow(!isShow);
  };

  const toggleSaveModal = () => {
     setIsSaveOpen(!isSaveOpen)
  }

  const handleOk = async() => {
    toggleSaveModal()
    toggleForm()
  } 

  const handleSubmit = () => {
    dispatch(addUser(form))
    toggleForm()
  }

  return (
    <div className="addUser">
      <div className="addUser__container">
        <div className="addUser__container-header">
          <div>Add New User</div>
          <div className="cancel-icon">
            <ClearIcon onClick={toggleSaveModal} />
          </div>
        </div>
        <div className="addUser__container-numbers">
          <div className="addUser__container_tabs">
            <div className={`num-container ${isShow ? "activeTab" : ""}`}>
              1
            </div>
            <div className="line"></div>
            <div className={`num-container ${isShow ? "" : "activeTab"}`}>
              2
            </div>
          </div>
          <form onSubmit={handleSubmit} className="addUser__forms">
            {isShow ? (
              <>
                <div className="addUser__form">
                  <div className="form">
                    <TextField
                      label="First Name*"
                      sx={{ m: "0 0 30px 0" }}
                      value={firstName}
                      onChange={(e) =>
                        setForm({ ...form, firstName: e.target.value })
                      }
                    />
                    <TextField
                      label="Email"
                      sx={{ m: "0 0 30px 0" }}
                      value={email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                    />
                    <TextField
                      label="Street Address"
                      sx={{ m: "0 0 30px 0" }}
                      value={address}
                      onChange={(e) =>
                        setForm({ ...form, address: e.target.value })
                      }
                    />
                    <TextField
                      label="State/Region"
                      sx={{ m: "0 0 30px 0" }}
                      value={state}
                      onChange={(e) =>
                        setForm({ ...form, state: e.target.value })
                      }
                    />
                    <TextField
                      label="Country"
                      value={country}
                      onChange={(e) =>
                        setForm({ ...form, country: e.target.value })
                      }
                    />
                  </div>
                  <div className="form">
                    <TextField
                      label="Last Name*"
                      sx={{ m: "0 0 30px 0" }}
                      value={lastName}
                      onChange={(e) =>
                        setForm({ ...form, lastName: e.target.value })
                      }
                    />
                    <TextField
                      label="Phone Number"
                      sx={{ m: "0 0 30px 0" }}
                      value={phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                    />
                    <TextField
                      label="City"
                      sx={{ m: "0 0 30px 0" }}
                      value={city}
                      onChange={(e) =>
                        setForm({ ...form, city: e.target.value })
                      }
                    />
                    <TextField
                      label="Postal Code"
                      sx={{ m: "0 0 30px 0" }}
                      value={postal_code}
                      onChange={(e) =>
                        setForm({ ...form, postal_code: e.target.value })
                      }
                    />
                    {/* <input
                      type="date"
                      className="dateInput"
                      value={dob}
                      onChange={(e) => {
                        setForm({ ...form, dob: e.target.value });
                      }}
                    /> */}
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        inputFormat="DD.MM.YYYY"
                        label="DOB"
                        value={dob ? dayjs(dob, 'YYYY-MM-DD').toDate() : ""}
                        onChange={(newValue) => setForm({ ...form, dob: newValue ? dayjs(newValue).format('YYYY-MM-DD') : "" })}
                      />
                    </LocalizationProvider>
                  </div>
                </div>
                <div className="tabs-buttons">
                  <button onClick={handleShow} className="purple-button">
                    continue
                  </button>
                </div>
              </>
            ) : (
              <div className="addAcount__form">
                <div className="form__inputs">
                  <TextField
                    label="Account Number"
                    sx={{ m: "0 30px 0 0" }}
                    value={account_number}
                    onChange={(e) =>
                      setForm({ ...form, account_number: e.target.value })
                    }
                  />
                  <select
                    className="status-input"
                    value={status}
                    onChange={(e) =>
                      setForm({ ...form, status: e.target.value })
                    }
                  >
                    <option value={0}>deactivted</option>
                    <option value={1}>activated</option>
                  </select>
                </div>
                <div className="tabs-buttons">
                  <button className="purple-button" type="submit">
                    save
                  </button>
                  <button onClick={handleShow} className="white-button">
                    back
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
        {isSaveOpen && (
          <SaveChanges toggleSaveModal={toggleSaveModal} handleOk={handleOk} />
        )}
      </div>
    </div>
  );
};
export default AddUser;