import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { getStrategiesData, getStrategyTypesData, selectStrategies, selectStrategyTypes } from '../../features/strategy/strategySlice'
import StrategyTable from '../../components/Strategy/StrategyTable';
import StrategyTypesDropDown from '../../components/Strategy/StrategyTypesMenu';
import './style.css'

const StrategyManagment = () => {
  const strategiesData = useSelector(selectStrategies)
  const strategyTypesData = useSelector(selectStrategyTypes)
  const dispatch = useDispatch()

  useEffect(() => {
     dispatch(getStrategiesData())
     dispatch(getStrategyTypesData())
  }, [])

  return (
    <div className="container">
      <div className='sm-container'>
        <div className="sm-header">
          <div className="text">
            View details, make changes and create new strategies.
          </div>
          <div className="button">
            <StrategyTypesDropDown strategyTypesData={strategyTypesData}/>
          </div>
        </div>
        <div className="sm-table">
          <StrategyTable strategiesData={strategiesData}/>
        </div>
      </div>
    </div>
  );
}

export default StrategyManagment