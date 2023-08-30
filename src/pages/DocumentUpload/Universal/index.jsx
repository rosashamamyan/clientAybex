import React, { useRef, useState } from 'react'
import Papa from "papaparse";
import { BsFillPlusCircleFill } from 'react-icons/bs';
import Swal from 'sweetalert2';
import './style.css'

const Universal = () => {
  const allowedExtensions = ["csv"];
  const [data, setData] = useState([]);
  const [file, setFile] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const inputRef = useRef(null);

  const handleDrag = function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave" || e.type === "drop") {
      setDragActive(false);
    }
  };

  const handleDrop = function (e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = function (e) {
    e.preventDefault();

    if (e.target.files[0]) {
      const inputFile = e.target.files[0];
      const fileExtension = inputFile?.type.split("/")[1];

      if (!allowedExtensions.includes(fileExtension)) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: "Please upload a CSV file",
        })
        return;
      }

      setFile(inputFile);
      Swal.fire({
        icon: 'success',
        title: 'Done',
        text: "File uploaded successfully",
        timer: 2000
      })
    }
  };

  const handleParse = () => {
    if (!file) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Enter a valid file",
      });
      return;
    }

    const reader = new FileReader();

    reader.onload = async ({ target }) => {
      const csv = Papa.parse(target.result, { header: true });
      const parsedData = csv?.data;
      // const columns = Object.keys(parsedData[0]);
      setData(parsedData);
    };
    
    reader.readAsText(file);
  };
  
  console.log(data);
  
  const onButtonClick = () => {
    inputRef.current.click();
  };

  return (
    <div className="documentUpload-item">
      <div className="header">
        <h2>Universal</h2>
        <small>  
          All users, regardless of strategy or sub-fund, can view these
          documents.
        </small>
      </div>
      <div className="content">
        <div>Documents List: </div>
        <div className="doc-input">    
          <div
            className="form-doc-upload"
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <input
              type="file"
              ref={inputRef}
              id="doc-file-upload"
              onChange={handleChange}
            />
            <label
              id="label-doc-upload"
              htmlFor="input-file-upload"
              className={dragActive ? "drag-active" : ""}
            >
              <div>
                <button
                  className="upload-button"
                  type="button"
                  onClick={onButtonClick}
                >
                  <BsFillPlusCircleFill />
                </button>
                <p className="upload-text">
                  Drag and drop file here or change icon image
                </p>
              </div>
            </label>
          </div>
        </div>
        <div className='button'>
          <button className="purple-button" onClick={handleParse}>upload file</button>
        </div>
      </div>
    </div>
  );
}

export default Universal