import React, { useEffect, useRef, useState } from 'react'
import {BsFillPlusCircleFill} from "react-icons/bs"
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createStrategyData, editStrategyData, getStrategiesData, getStrategyData, getStrategyTypesData, selectStrategies, selectStrategy, selectStrategyTypes } from '../../../features/strategy/strategySlice';
import { useForm } from "react-hook-form";
import { TextField } from "@mui/material";
import Textarea from '@mui/joy/Textarea';
import SaveChanges from '../../../components/Modals/SaveChanges';
import Swal from 'sweetalert2';
import './style.css'

const StrategyOverView = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation();
  const params = useParams()
  const strategyTypesData = useSelector(selectStrategyTypes)
  const strategiesData = useSelector(selectStrategies)
  const [isCancelOpen, setIsCancelOpen] = useState(false)
  const [dragActive, setDragActive] = useState(false);
  const [file, setFile] = useState(null)
  const inputRef = useRef(null);

  const {state} = location

  const toggleSaveModal = () => {
    setIsCancelOpen(!isCancelOpen)
  }

  const handleOk = () => {
    navigate(-1)
  }

  const onSubmit = (formData) => {
    if(!params.id) {
      dispatch(createStrategyData({...formData, icon: "file"}))
    } else {
      dispatch(
        editStrategyData({
          ...formData,
          icon: "file",
          exisedSequence: state.sequence,
          id: params.id,
        })
      );
    }
    Swal.fire({
      icon: "success",
      title: "Done",
      text: "Strategy created successfully",
    });
    reset()
  }

  // const onSubmit = (formData) => {
  //   const formDataToSend = new FormData();

  //   formDataToSend.append("icon", file);
  //   for (const key in formData) {
  //     formDataToSend.append(key, formData[key]);
  //   }
  //   if (!params.id) {
  //     dispatch(createStrategyData(formDataToSend));
  //   } else {
  //     formDataToSend.append("exisedSequence", strategyData.sequence);
  //     formDataToSend.append("id", params.id);

  //     dispatch(editStrategyData(formDataToSend));
  //   }

  //   Swal.fire({
  //     icon: "success",
  //     title: "Done",
  //     text: "Strategy created successfully",
  //   });
  //   reset();
  // };

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
    formState: { errors, isDirty },
    reset,
  } = useForm({
    defaultValues: params.id
      ? {
          strategy_name: state?.strategy_name,
          icon: state?.icon,
          status: state?.status,
          open_closed: state?.open_closed,
          sequence: state?.sequence,
          video: state?.video,
          primary_color: state?.primary_color,
          secondary_color: state?.secondary_color,
          strategy_type: state?.strategy_type,
          short_desc_web: state?.short_desc_web,
          short_desc_mobile: state?.short_desc_mobile,
          desc_web_mob: state?.desc_web_mob,
          long_desc: state?.long_desc,
        }
      : {},
  });

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
                    <button className="upload-button" type='button' onClick={onButtonClick}>
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
              <button className="purple-button" type="submit" disabled={!isDirty}>
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
                error={errors?.strategy_name ? true : false}
              />
              <select
                className="select-input"
                defaultValue="hidden"
                {...register("strategy_type", { required: true })}
              >
                <option value="hidden" disabled>Strategy Type</option>
                {strategyTypesData?.map((elm) => {
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
                error={errors?.short_desc_web ? true : false}
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
                error={errors?.short_desc_mobile ? true : false}
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
                <option value={1}>open</option>
                <option value={0}>closed</option>
              </select>
              <select className="select-input" defaultValue="hidden" {...register("sequence", { required: true })}>
                <option value="hidden" disabled>
                  Sequence*
                </option>
                {
                    strategiesData?.map((e, i) => {
                        return <option key={e.id}>{i + 1}</option>
                    })
                }
              </select>
            </div>
            <div>
              <TextField
                label="Description of Strategy for Mobile & Web*"
                {...register("desc_web_mob", { required: true })}
                error={errors?.desc_web_mob ? true : false}
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
                {...register("primary_color", { required: true, pattern: /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/ })}
                error={errors?.primary_color ? true : false}

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
                {...register("secondary_color", { required: true, pattern: /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/ })}
                error={errors?.secondary_color ? true : false}
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
                error={errors?.video ? true : false}

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
                error={errors?.long_desc ? true : false}
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
      {isCancelOpen && <SaveChanges toggleSaveModal={toggleSaveModal} handleOk={handleOk}/>}
    </div>
  );
}

export default StrategyOverView