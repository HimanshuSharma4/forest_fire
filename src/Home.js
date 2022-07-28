import React, { useEffect, useState } from 'react';
import './Home.css';
import Card from './Card';
import humidity from './assets/humidity.gif';
import sunny from './assets/BS.gif';
import cloudy from './assets/cloudsONLY.gif';
import sc from './assets/SwC.gif';
import firebase from './firebase';
import ForestSection from './ForestSection'

function Home() {

    var d = new Date();
    var n = d.getHours();
  
    const [gas1, setGas] = useState(0);
    const [frame1, setFrame] = useState(0);
    const [SensorsAlerting, setSensorsAlerting] =  useState([])
    // useEffect(()=> {
    //     if(gas1===1){
    //       SensorsAlerting.push("gas1")
    //     }
    //     if(frame1===1){
    //       SensorsAlerting.push("frame1")
    //     }
    //     else 

    // },[gas1,frame1])


    useEffect(() => {
      const myitemsH = firebase.database().ref("Gas");
        myitemsH.on("value", (snapshot) => {
        let value = snapshot.val();
        setGas("value2",value)
      });

      const myitemsT = firebase.database().ref("Flame");
      myitemsT.on("value", (snapshot) => {
        let value = snapshot.val();
        setFrame("value1", value)
      });

      const Item = firebase.database().ref()
      Item.on("value", (snapshot) => {
        let value = snapshot.val();
        console.log(value)
      });

      const NewItem = firebase.database().ref("Sensors");
      NewItem.on("value", (snapshot) => {
        let value = snapshot.val();
        setSensorsAlerting(Object.keys(value).filter(items => {
          return value[items] > 0;
        }))
      });


    }, []);

    return (
        <div className = 'home'>
            <div className="Data_Overiew">
                { /*<Card Status__Pic={humidity}  Value={StatusH}  Unit = "%" title="Humidity" />
                  <div className="Current__Environment">
                      {n>= 6 && n<20 ? <img src={day} alt=""/> : <img src={night} alt=""/> }
                      <h3><ApiHome /></h3>
                      <p style={{color : "#000", "font-weight" : "bold" }}>New Delhi</p>
                  </div> */}
                <div className="Current__Environment">
                  <ForestSection  ection SensorsAlerting={SensorsAlerting} />
                </div>

                {/* <Card Status__Pic={
                    StatusH >=0 && StatusH <=35 ? cloudy
                    : StatusH >35 && StatusH <= 50?
                    sc
                    : StatusH >50 && StatusH <=100?
                    sunny
                    :false
                  }
                  
                Value={StatusT} 
                Unit = "℃"
                title="Temperature" /> */}

            </div>
          
        </div>
    )
}

export default Home
