import React, { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux"
import {BiSolidDownload} from 'react-icons/bi'
import { getStrategiesData, selectStrategies } from '../../features/strategy/strategySlice'
import './style.css'

const BalanceUpload = () => {
  const dispatch = useDispatch()
  const strategiesData = useSelector(selectStrategies)

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
              <div>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
              </div>
              <form>
                <select></select>
                <div>
                  <div>Download balance upload template</div>
                  <button type='button'>
                    <BiSolidDownload />
                  </button>
                </div>
                <div>Populate data in balance upload template</div>
                <div>
                  <div>Attach Data File</div>
                  <div>
                    <input type="file" />
                    <button type='button'>choose file</button>
                  </div>
                </div>
                <div>
                   <div>Upload File</div>
                   <button type='submit'>upload</button>
                </div>
              </form>
            </div>
            <div>see file</div>
          </div>
          <div>table</div>
        </div>
      </div>
    </div>
  );
}

export default BalanceUpload