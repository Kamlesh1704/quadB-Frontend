import {React, useState, useEffect} from 'react'
import {Containerr} from './styledComponents';
import Header from './Header';
import ThemeContext from './context/ThemeContext';
import Table from './Table';

export default function Home() {
    const [data,setData] = useState([])

    useEffect(() => {
      const fetchingData = async () => {
        const url = "/api/v2/tickers/";
        const options = {
            method:'GET',
        }
        const response = await fetch(url,options);
        const fetchedData = await response.json()
       const sortedData = Object.values(fetchedData).sort((a, b) => b.volume - a.volume);
       const topTenData = sortedData.slice(0, 10);
       setData(topTenData);
      }
      fetchingData();
    },[])

      useEffect(() => {
        const storeDatainDB = async () => {
          const url = "https://quadb-backend-2-kf1a.onrender.com//storedata"
          const options ={
            method: 'POST',
            headers: {
              "Content-Type": 'application/json',
            },
            body: JSON.stringify(data)
          }
          await fetch(url, options);
        }
        storeDatainDB()
      },[])

    return (
            <ThemeContext.Consumer>
                {value => {
                    const {isBlueTheme} = value
                    return (
                        <Containerr isBlueTheme={isBlueTheme}>
                          <Header />
                          <Table />
                       </Containerr>
                    )
                }}
            </ThemeContext.Consumer>
    )
}
