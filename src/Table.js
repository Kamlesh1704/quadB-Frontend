import './Table.css'

import React from 'react'
import { FaRupeeSign } from "react-icons/fa";
import ThemeContext from './context/ThemeContext';
import { CustomRow } from './styledComponents';

const Table = props => {
    const {dataa} = props
    
    return(
    <ThemeContext>
        {value => {
            const {isBlueTheme} = value
            return (
                <table>
                <tr className='tablehead'>
                  <th className='f'>#</th>
                  <th>Platform</th>
                  <th>Last Traded Price</th>
                  <th>Buy / Sell Price</th>
                  <th>Name</th>
                  <th>Volume</th>
                </tr>
                <br/>
                {dataa.map((each) => (
                    <>
                    <CustomRow isBlueTheme={isBlueTheme} className='tablerows'>
                        <td className='td'>{each.id}</td>
                        <td>{each.base_unit}</td>
                        <td><FaRupeeSign/> {each.lastt}</td>
                        <td><FaRupeeSign /> {each.buy}/<FaRupeeSign/> {each.sell}</td>
                        <td>{each.name}</td>
                        <td className='tdd'>{each.volume}</td>
                    </CustomRow>
                    <br/>
                    </>
                ))}
                <br/>
            </table>
            )
        }}
    </ThemeContext>
    )
}
export default Table