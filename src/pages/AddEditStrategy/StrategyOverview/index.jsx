import React, { useEffect, useRef, useState } from 'react'
import {BsFillPlusCircleFill} from "react-icons/bs"
import { useDispatch, useSelector } from 'react-redux';
import { createStrategyData, getStrategiesData, getStrategyTypesData, selectStrategies, selectStrategyTypes } from '../../../features/strategy/strategySlice';
import { useForm } from "react-hook-form";
import { TextField } from "@mui/material";
import Textarea from '@mui/joy/Textarea';
import SaveChanges from '../../../components/Modals/SaveChanges';
import Swal from 'sweetalert2';
import './style.css'

const StrategyOverView = () => {
  const dispatch = useDispatch()
  const strategyTypesData = useSelector(selectStrategyTypes)
  const strategiesData = useSelector(selectStrategies)
  const [isCancelOpen, setIsCancelOpen] = useState(false)
  const [dragActive, setDragActive] = useState(false);
  const [file, setFile] = useState(null)
  const inputRef = useRef(null);

  const toggleSaveModal = () => {
    setIsCancelOpen(!isCancelOpen)
  }

  const onSubmit = (formData) => {
    console.log({...formData, icon: file});
    dispatch(createStrategyData({...formData, icon: "file"}))
    Swal.fire({
        icon: 'success',
        title: 'Done',
        text: 'Strategy created successfully',
      })
    reset()
  }

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

  const handleChange = function(e) {
    e.preventDefault();
    if (e.target.files[0]) {
        setFile(e.target.files[0])
    }
  };

  const onButtonClick = () => {
    inputRef.current.click();
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    reset,
  } = useForm();

  
  useEffect(() => {
    dispatch(getStrategyTypesData())
    dispatch(getStrategiesData())
  }, [])

  return (
    <div className="strategyOverview">
      <div className="strategyOverview-item">
        <form className="stForm" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-buttons">
            <div className="file-input">
              <small>Strategy Icon</small>
              <div
                className="form-file-upload"
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <input
                  type="file"
                  ref={inputRef}
                  id="input-file-upload"
                  onChange={handleChange}
                />
                <label
                  id="label-file-upload"
                  htmlFor="input-file-upload"
                  className={dragActive ? "drag-active" : ""}
                >
                  <div>
                    <button className="upload-button" onClick={onButtonClick}>
                      <BsFillPlusCircleFill />
                    </button>
                    <p className="upload-text">
                      Drag and drop file here or change icon image
                    </p>
                  </div>
                </label>
              </div>
            </div>
            <div className="buttons">
              <button
                className="white-button"
                onClick={toggleSaveModal}
                type="button"
              >
                cancel
              </button>
              <button className="purple-button" type="submit">
                save
              </button>
            </div>
          </div>
          <div className="form-inputs">
            <div>
              <TextField
                label="Strategy Name*"
                sx={{
                  m: "0 0 20px 0",
                  border: "none",
                  borderBottom: "2px solid",
                  borderColor: "#8E8E8EFF",
                  borderRadius: 0,
                  backgroundColor: "#F5F5F5FF",
                }}
                {...register("strategy_name", { required: true })}
              />
              <select
                className="select-input"
                defaultValue="hidden"
                {...register("strategy_type", { required: true })}
              >
                <option value="hidden" disabled>Strategy Type</option>
                {strategyTypesData.map((elm) => {
                  const { id, name } = elm;
                  return (
                    <option key={id} value={id}>
                      {name}
                    </option>
                  );
                })}
              </select>
              <Textarea
                minRows={4}
                placeholder="Short Description Web*"
                {...register("short_desc_web", { required: true })}
                variant="soft"
                sx={{
                  m: "0 0 20px 0",
                  borderBottom: "2px solid",
                  borderColor: "#8E8E8EFF",
                  borderRadius: 0,
                  backgroundColor: "#F5F5F5FF",
                  paddingTop: "50px",
                  boxSizing: "border-box",
                  "&::before": {
                    border: "1px solid #AE8BFFFF",
                    transform: "scaleX(0)",
                    left: 0,
                    right: 0,
                    bottom: "-2px",
                    top: "unset",
                    transition: "transform .15s cubic-bezier(0.1,0.9,0.2,1)",
                    borderRadius: 0,
                  },
                  "&:focus-within::before": {
                    transform: "scaleX(1)",
                  },
                }}
              />
              <Textarea
                minRows={4}
                placeholder="Short Description Mobile*"
                {...register("short_desc_mobile", { required: true })}
                variant="soft"
                sx={{
                  m: "0 0 20px 0",
                  borderBottom: "2px solid",
                  borderColor: "#8E8E8EFF",
                  borderRadius: 0,
                  backgroundColor: "#F5F5F5FF",
                  paddingTop: "50px",
                  boxSizing: "border-box",
                  "&::before": {
                    border: "1px solid #AE8BFFFF",
                    transform: "scaleX(0)",
                    left: 0,
                    right: 0,
                    bottom: "-2px",
                    top: "unset",
                    transition: "transform .15s cubic-bezier(0.1,0.9,0.2,1)",
                    borderRadius: 0,
                  },
                  "&:focus-within::before": {
                    transform: "scaleX(1)",
                  },
                }}
              />
              <select className="select-input" defaultValue="hidden" {...register("open_closed", { required: true })}>
                <option value="hidden" disabled>
                  Open/Closed*
                </option>
                <option value={true}>open</option>
                <option value={false}>closed</option>
              </select>
              <select className="select-input" defaultValue="hidden" {...register("sequence", { required: true })}>
                <option value="hidden" disabled>
                  Sequence*
                </option>
                {
                    strategiesData.map((e, i) => {
                        return <option key={e.id}>{i + 1}</option>
                    })
                }
              </select>
            </div>
            <div>
              <TextField
                label="Description of Strategy for Mobile & Web*"
                {...register("desc_web_mob", { required: true })}
                sx={{
                  m: "0 0 20px 0",
                  border: "none",
                  borderBottom: "2px solid",
                  borderColor: "#8E8E8EFF",
                  borderRadius: 0,
                  backgroundColor: "#F5F5F5FF",
                }}
              />
              <TextField
                label="Primary Color(a hex value of the color)*"
                {...register("primary_color", { required: true })}
                sx={{
                  m: "0 0 20px 0",
                  border: "none",
                  borderBottom: "2px solid",
                  borderColor: "#8E8E8EFF",
                  borderRadius: 0,
                  backgroundColor: "#F5F5F5FF",
                }}
              />
              <TextField
                label="Secondary Color(a hex value of the color)*"
                {...register("secondary_color", { required: true })}
                sx={{
                  m: "0 0 20px 0",
                  border: "none",
                  borderBottom: "2px solid",
                  borderColor: "#8E8E8EFF",
                  borderRadius: 0,
                  backgroundColor: "#F5F5F5FF",
                }}
              />
              <select
                className="select-input"
                defaultValue="hidden"
                {...register("status", { required: true })}
              >
                <option value="hidden" disabled>
                  Status
                </option>
                <option value={1}>active</option>
                <option value={2}>inactive</option>
              </select>
              <TextField
                label="Video Link"
                {...register("video", { required: true })}
                sx={{
                  m: "0 0 20px 0",
                  border: "none",
                  borderBottom: "2px solid",
                  borderColor: "#8E8E8EFF",
                  borderRadius: 0,
                  backgroundColor: "#F5F5F5FF",
                }}
              />
              <Textarea
                minRows={4}
                placeholder="Long Description*"
                {...register("long_desc", { required: true })}
                variant="soft"
                sx={{
                  m: "0 0 20px 0",
                  borderBottom: "2px solid",
                  borderColor: "#8E8E8EFF",
                  borderRadius: 0,
                  backgroundColor: "#F5F5F5FF",
                  paddingTop: "50px",
                  boxSizing: "border-box",
                  "&::before": {
                    border: "1px solid #AE8BFFFF",
                    transform: "scaleX(0)",
                    left: 0,
                    right: 0,
                    bottom: "-2px",
                    top: "unset",
                    transition: "transform .15s cubic-bezier(0.1,0.9,0.2,1)",
                    borderRadius: 0,
                  },
                  "&:focus-within::before": {
                    transform: "scaleX(1)",
                  },
                }}
              />
            </div>
          </div>
        </form>
      </div>
      {isCancelOpen && <SaveChanges toggleSaveModal={toggleSaveModal} />}
    </div>
  );
}

export default StrategyOverView