import React from 'react'
// import './Chart.css'
import './ChartBar'
import ChartBar from './ChartBar'
import { styled } from 'styled-components'

const Chart = ({items}) => {
    const maximumPrice = 1000
    const months = [
        {
            label: 'Jan',
            currentPrice: 0,
        },
        {
            label: 'Feb',
            currentPrice: 0,
        },
        {
            label: 'Mar',
            currentPrice: 0,
        },
        {
            label: 'Apr',
            currentPrice: 0,
        },
        {
            label: 'МаY',
            currentPrice: 0,
        },
        {
            label: 'Jun',
            currentPrice: 0,
        },
        {
            label: 'Jul',
            currentPrice: 0,
        },
        {
            label: 'Aug',
            currentPrice: 0,
        },
        {
            label: 'Sep',
            currentPrice: 0,
        },
        {
            label: 'Оct',
            currentPrice: 0,
        },
        {
            label: 'Nov',
            currentPrice: 0,
        },
        {
            label: 'Dеc',
            currentPrice: 0,
        },
    ]

    // items?.forEach((item) => {
    //     const MonthNumber = item.date.getMonth()  
    //     months[MonthNumber].currentPrice += item.amount
    // });

    items.forEach(item => {
        const monthNumber = item.date.getMonth()
        months[monthNumber].currentPrice += item.amount
    });



  return (
    <StyledChart className='chart'>
        {months.map((item) => {
            return (
                <ChartBar key={item.label} label={item.label} currentPrice={item.currentPrice} maximumPrice={maximumPrice}/>
            )
        })}
    </StyledChart>
  )
}

const StyledChart = styled('div')`
  width: 750px;
    margin-left: 20px;
    padding: 1rem;
    border-radius: 12px;
    background-color: #f8dfff;
    text-align: center;
    display: flex;
    justify-content: space-around;
    height: 10rem;
`

export default Chart