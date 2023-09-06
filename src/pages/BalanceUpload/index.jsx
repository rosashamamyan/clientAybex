import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from "react-redux"
import * as XLSX from "xlsx";
import {BiSolidDownload} from 'react-icons/bi'
import { getStrategiesData, selectStrategies } from '../../features/strategy/strategySlice'
import { createAccountData } from '../../features/account/accountSlice';
import Swal from 'sweetalert2'
import './style.css'

const BalanceUpload = () => {
  const dispatch = useDispatch()
  const strategiesData = useSelector(selectStrategies)
  const allowedExtensions = ["csv", "xlsx", "xls"];
  const [fileName, setFileName] = useState("")
  const [formData, setFormData] = useState({
    strategy_id: "",
    fileName: "",
    date: new Date(),
    fileData: []
  })

  const handleFileUpload = (e) => {
    const reader = new FileReader();
    const file = e.target?.files[0]
    const fName = e.target.files[0].name

    reader.readAsBinaryString(file);
    setFileName(fName)

    reader.onload = (e) => {
      const data = e.target.result;
      const workbook = XLSX.read(data, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const parsedData = XLSX.utils.sheet_to_json(sheet);
      setFormData({
        ...formData,
        fileName: fName,
        fileData: parsedData
      });
    };
  }

  const handleSubmit = (formData) => {
    dispatch(createAccountData(formData))
  }
  
  useEffect(() => {
     dispatch(getStrategiesData())
  }, [])

  return (
    <div className="balance-upload">
      <div className="bu-container">
        <div className="bu-header">
          Upload monthly & quarterly account balances
        </div>
        <div className="bu-content">
          <div className="file-uploading">
            <div className="upload-file">
              <form className="upload-form" onSubmit={() => handleSubmit(formData)}>
                <div className="select-strategy">
                  <div className="circle-num">1</div>
                  <select
                    defaultValue="hidden"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        strategy_id: e.target.value,
                      })
                    }
                  >
                    <option value="hidden" disabled>
                      Choose Strategy Name
                    </option>
                    {strategiesData.map((elm) => {
                      const { id, strategy_name } = elm;
                      return (
                        <option value={id} key={id}>
                          {strategy_name}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="upload-template">
                  <div className="circle-num">2</div>
                  <div className="upload">
                    <div>Download balance upload template</div>
                    <div className="upload-input">
                      <input
                        id="icon-button"
                        type="file"
                        style={{ display: "none" }}
                      />
                      <label htmlFor="icon-button">
                        <BiSolidDownload />
                      </label>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="circle-num">3</div>
                  <div>Populate data in balance upload template</div>
                </div>
                <div className="data-file">
                  <div className="circle-num">4</div>
                  <div className="attach-file">
                    <div>Attach Data File</div>
                    <div className="up-datafile">
                      <input
                        type="text"
                        placeholder="File name"
                        defaultValue={fileName}
                        readOnly
                      />
                      <div>
                        <div className="upload-input">
                          <input
                            id="icon-button-file"
                            type="file"
                            accept=".xlsx, .xls, .csv"
                            onChange={handleFileUpload}
                            style={{ display: "none" }}
                          />
                          <button type="button">
                            <label htmlFor="icon-button-file">
                              Choose File
                            </label>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="submit">
                  <div className="circle-num">5</div>
                  <div className="submit-upload">
                    <div>Upload File</div>
                    <button type="submit" className="purple-button">
                      upload
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <div>
              <div>
                <small>Upload Summary</small>
                <small></small>
              </div>
              <div>
                <small>
                  <b>Last Uploaded Date and Time</b>
                </small>
              </div>
              <div>
                <small>
                  <b>File Name</b>
                </small>
              </div>
              <div>
                <small>
                  <b>Strategy Type</b>
                </small>
              </div>
              <div>
                <small>
                  <b>Total Accounts Loaded</b>
                </small>
              </div>
              <div>
                <small>
                  <b>New Accounts</b>
                </small>
              </div>
              <div>
                <small>
                  <b>Period</b>
                </small>
              </div>
              <div>
                <small>
                  <b>Status</b>
                </small>
              </div>
            </div>
          </div>
          <div>table</div>
        </div>
      </div>
    </div>
  );
}

export default BalanceUpload