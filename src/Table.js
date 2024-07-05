import './Table.css'

import {React, useState, useEffect} from 'react'
import { FaRupeeSign } from "react-icons/fa";
import ThemeContext from './context/ThemeContext';
import { CustomRow } from './styledComponents';

const Table = () => {
    const [fetchedData, setFetchData] = useState([])

    useEffect(() => {
        const storeDatainDB = async () => {
          const url = "https://quadb-backend-2-kf1a.onrender.com/"
          const options ={
            method: 'GET'
          }
          const response = await fetch(url, options);
          const daata = await response.json()
          setFetchData(daata);
          console.log(daata)
        }
        storeDatainDB()
      },[])

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
                {fetchedData.map((each) => (
                    <>
                    <CustomRow isBlueTheme={isBlueTheme} className='tablerows'>
                        <td className='td'>{fetchedData.indexOf(each) + 1}</td>
                        <td>{each.base_unit}</td>
                        <td><FaRupeeSign/> {each.last}</td>
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