import {React, useState, useEffect} from 'react'
import ThemeContext from './context/ThemeContext'
import {CustomHeader,CustomButton} from './styledComponents'
import { IoMdArrowDropdown } from "react-icons/io";
import { MdOutlineToggleOn } from "react-icons/md";
import { RiToggleLine } from "react-icons/ri";

import './Header.css'
export default function Header(props) {
  const [counter, setCounter] = useState(60);

  useEffect(() => {
    const counterId = setInterval(() => {
      setCounter(prevCounter => 
        prevCounter === 0 ? 60 : prevCounter - 1
      );
    }, 1000);

    return () => clearInterval(counterId);
  }, []);
  

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isBlueTheme,toggle} = value
        return (
        <CustomHeader isBlueTheme={isBlueTheme} className='flex'>
            <h1 className='heading'>HODLINFO</h1>
            <div className='flex'> 
            <CustomButton isBlueTheme={isBlueTheme} className='flex'>
              <p>INR</p>
              <IoMdArrowDropdown/>
            </CustomButton>
            <CustomButton isBlueTheme={isBlueTheme} className='flex'>
              <p>BTC</p>
              <IoMdArrowDropdown/>
            </CustomButton>
            <CustomButton isBlueTheme={isBlueTheme}>
              <p>BUY BTC</p>
            </CustomButton>
            </div>
            <div className='flex'>
              <p className='counter'>{counter}</p>
              <button className='telegram'>
                Connect Telegram
              </button>
              {isBlueTheme ? (<MdOutlineToggleOn className='butt butt-white' onClick={() => {toggle()}}/>):(<RiToggleLine className='butt-blue butt' onClick={() => {toggle()}}/>)}
            </div>
        </CustomHeader>
        )
      }}
    </ThemeContext.Consumer>
  )
}
