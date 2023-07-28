import React from 'react'
import { styled } from 'styled-components'
// import './ChartBar.css'
const ChartBar = ({maximumPrice, currentPrice, label}) => {

    const fillHeight = (100 * currentPrice) / maximumPrice 

    // added
  return (
    <StyledChartBar className='chart-bar'>
        <StyledChartInner className='chart-bar__inner'>
            <StyledChartFill className='chart-bar__fill' style={{height: `${fillHeight}%`}}></StyledChartFill>
        </StyledChartInner>
        <StyledChartLabel className='chart-bar__label'>{label}</StyledChartLabel>
    </StyledChartBar>
  )
}

const StyledChartBar = styled('div')`
     height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const StyledChartInner = styled('div')`
      height: 100%;
    width: 1rem;
    border: 1px solid #313131;
    border-radius: 12px;
    background-color: #c3b4f3;
    overflow: hidden;   
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`
const StyledChartFill = styled('div')`
     background-color: #4826b9;
    width: 100%;
    transition: all 0.3s ease-out;
`
const StyledChartLabel = styled('p')`
font-weight: bold;
font-size: 0.5rem;
text-align: center;
`


export default ChartBar