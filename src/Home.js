import {React, useState, useEffect} from 'react'
import {Containerr} from './styledComponents';
import Header from './Header';
import ThemeContext from './context/ThemeContext';
import Table from './Table';

export default function Home() {
    const [data,setData] = useState([])
    useEffect(() => {
      const fetchingData = async () => {
        const url = "https://quadb-backend-2-kf1a.onrender/";
        const options = {
            method:'GET',
            "Content-Type":"application/json"
        }
        const response = await fetch(url,options);
        const fetchedData = await response.json()
        setData(fetchedData);
      }
      fetchingData();
    },[])
    return (
            <ThemeContext.Consumer>
                {value => {
                    const {isBlueTheme} = value
                    return (
                        <Containerr isBlueTheme={isBlueTheme}>
                          <Header/>
                          <Table dataa={data}/>
                       </Containerr>
                    )
                }}
            </ThemeContext.Consumer>
    )
}
