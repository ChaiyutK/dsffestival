import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import Nav from './Nav';

const VaccinePage = ()=>{

    const [namelist1,setNamelist1] = useState([]);
    const [namelist2,setNamelist2] = useState([]);
    const [namelist3,setNamelist3] = useState([]);
    const [namelist4,setNamelist4] = useState([]);
    const [namelist5,setNamelist5] = useState([]);
    const [namelist6,setNamelist6] = useState([]);
    const [topic,setTopic] = useState("");
    const [selects,setSelects] = useState(0);
    const [showNamelist,setShowNamelist] = useState([]);

  useEffect(()=>{
    setTopic("18 พฤศจิกายน 2566 สาขาสำนักงานใหญ่")

    axios.get("https://script.google.com/macros/s/AKfycbxnr_0_QH5-qoegD943Ouke3QZpDd8IwLBi30iPHCME9P2S0A3hfOk9Ji8rLO6rGBgkSg/exec?action=getUsers")
    .then(function (response) {
      setNamelist1(response.data)
      setShowNamelist(response.data.map((val,i)=>{
        return(
          <div className="divTableRow" key={i}>
                <div className="divTableCell"><p>{i+1}</p></div>
                <div className="divTableCell"><p>{val.Name}</p></div>
                <div className="divTableCell"><p>{val.nickName}</p></div>
                <div className="divTableCell"><p>{val.Phone}</p></div>
                <div className="divTableCell"><p>{val.Email}</p></div>
                <div className="divTableCell"><p>{val.testrow4}</p></div>
          </div>
        )}))
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })



    axios.get("https://script.google.com/macros/s/AKfycbxUrhIinTDKOXXLS9VmyAR_a1JDR85iApwUxWS_GPZGu4O3ICE4S4-iHXrTcaFp98Qv/exec?action=getUsers")
    .then(function (response) {
      setNamelist2(response.data)

    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })

    axios.get("https://script.google.com/macros/s/AKfycbz7YWLCzVyTspFBy_Wqhe3cHoLoUFbfxxCAlOqLKv0MehDOfsyF-zwKsXSvMO9XrwKyEQ/exec?action=getUsers")
    .then(function (response) {
      setNamelist3(response.data)

    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })

    axios.get("https://script.google.com/macros/s/AKfycbw0kkc4qJyVwoBdBzSkBUh3Gqrz_SLZ_E6DCpFLPlUIiedRpv3F1nG5Mm32cQtkOR4A_Q/exec?action=getUsers")
    .then(function (response) {
      setNamelist4(response.data)

    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })

    axios.get("https://script.google.com/macros/s/AKfycbwsTkiCxlGv9jVV9Wqxuz-Je1dIkURPgYD8G33u-1K-HJn2cwjzOPtHm8mlHHEG4S6Bsg/exec?action=getUsers")
    .then(function (response) {
      setNamelist5(response.data)

    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })

    axios.get("https://script.google.com/macros/s/AKfycbzQOvwftNfX6tdvis-wXaGJva2nWeLMU7gUd9E7kVtObrKEhe3S1J-KKVDflbrhXjqEfA/exec?action=getUsers")
    .then(function (response) {
      setNamelist6(response.data)

    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })

    
   
  },[])

 
  
  

  const showList = ()=>{
    console.log(selects)
    if(selects === "0")
    {
      setTopic("18 พฤศจิกายน 2566 สาขาสำนักงานใหญ่")
      setShowNamelist(namelist1.map((val,i)=>{
        return(
          <div className="divTableRow" key={i}>
                <div className="divTableCell"><p>{i+1}</p></div>
                <div className="divTableCell"><p>{val.Name}</p></div>
                <div className="divTableCell"><p>{val.nickName}</p></div>
                <div className="divTableCell"><p>{val.Phone}</p></div>
                <div className="divTableCell"><p>{val.Email}</p></div>
                <div className="divTableCell"><p>{val.testrow4}</p></div>
          </div>
        )}))
    }
    else if(selects === "1")
    {
      setTopic("19 พฤศจิกายน 2566 สาขาสำนักงานใหญ่")
      setShowNamelist(namelist2.map((val,i)=>{
        return(
          <div className="divTableRow" key={i}>
                <div className="divTableCell"><p>{i+1}</p></div>
                <div className="divTableCell"><p>{val.Name}</p></div>
                <div className="divTableCell"><p>{val.nickName}</p></div>
                <div className="divTableCell"><p>{val.Phone}</p></div>
                <div className="divTableCell"><p>{val.Email}</p></div>
                <div className="divTableCell"><p>{val.testrow4}</p></div>
          </div>
        )}))
    }
    else if(selects === "2")
    {
      setTopic("18 พฤศจิกายน 2566 สาขาศิครินทร์")
      setShowNamelist(namelist3.map((val,i)=>{
        return(
          <div className="divTableRow" key={i}>
                <div className="divTableCell"><p>{i+1}</p></div>
                <div className="divTableCell"><p>{val.Name}</p></div>
                <div className="divTableCell"><p>{val.nickName}</p></div>
                <div className="divTableCell"><p>{val.Phone}</p></div>
                <div className="divTableCell"><p>{val.Email}</p></div>
                <div className="divTableCell"><p>{val.testrow4}</p></div>
          </div>
        )}))
    }
    else if(selects === "3")
    {
      setTopic("19 พฤศจิกายน 2566 สาขาศิครินทร์")
      setShowNamelist(namelist4.map((val,i)=>{
        return(
          <div className="divTableRow" key={i}>
                <div className="divTableCell"><p>{i+1}</p></div>
                <div className="divTableCell"><p>{val.Name}</p></div>
                <div className="divTableCell"><p>{val.nickName}</p></div>
                <div className="divTableCell"><p>{val.Phone}</p></div>
                <div className="divTableCell"><p>{val.Email}</p></div>
                <div className="divTableCell"><p>{val.testrow4}</p></div>
          </div>
        )}))
    }
    else if(selects === "4")
    {
      setTopic("18 พฤศจิกายน 2566 สาขาสะเดา")
      setShowNamelist(namelist5.map((val,i)=>{
        return(
          <div className="divTableRow" key={i}>
                <div className="divTableCell"><p>{i+1}</p></div>
                <div className="divTableCell"><p>{val.Name}</p></div>
                <div className="divTableCell"><p>{val.nickName}</p></div>
                <div className="divTableCell"><p>{val.Phone}</p></div>
                <div className="divTableCell"><p>{val.Email}</p></div>
                <div className="divTableCell"><p>{val.testrow4}</p></div>
          </div>
        )}))
    }
    else if(selects === "5")
    {
      setTopic("19 พฤศจิกายน 2566 สาขาสะเดา")
      setShowNamelist(namelist6.map((val,i)=>{
        return(
          <div className="divTableRow" key={i}>
                <div className="divTableCell"><p>{i+1}</p></div>
                <div className="divTableCell"><p>{val.Name}</p></div>
                <div className="divTableCell"><p>{val.nickName}</p></div>
                <div className="divTableCell"><p>{val.Phone}</p></div>
                <div className="divTableCell"><p>{val.Email}</p></div>
                <div className="divTableCell"><p>{val.testrow4}</p></div>
          </div>
        )}))
    }
  
    
  
  }
  
  return (
    <div className="App">
        <Nav/>
      <h1>ลงทะเบียนฉีดวัคซีนฟรีฉลองครบรอบ 17 ปีโรงพยาบาลสัตว์หมอสุรศักดิ์และเพื่อน {topic}</h1>
      <label className='labelBranch'>เลือกวันที่ต้องการดูและสาขา:</label>
        <select value={selects} onChange={e=>setSelects(e.target.value)} name="vaccine" id="vaccine">
          <option value="0">18 พฤศจิกายน 2566 สาขาสำนักงานใหญ่</option>
          <option value="1">19 พฤศจิกายน 2566 สาขาสำนักงานใหญ่</option>
          <option value="2">18 พฤศจิกายน 2566 สาขาศิครินทร์</option>
          <option value="3">19 พฤศจิกายน 2566 สาขาศิครินทร์</option>
          <option value="4">18 พฤศจิกายน 2566 สาขาสะเดา</option>
          <option value="5">19 พฤศจิกายน 2566 สาขาสะเดา</option>
        </select>
      <button className='button-4' onClick={showList}>ค้นหา</button>

      <div className="divTable">
        <div className="divTableBody">
        <div className="divTableRow">
            <div className="divTableCell"><p>ลำดับ</p></div>
            <div className="divTableCell"><p>วันเวลาที่ลงทะเบียน</p></div>
            <div className="divTableCell"><p>ชื่อ-นามสกุล เจ้าของสัตว์เลี้ยง</p></div>
            <div className="divTableCell"><p>ชื่อสัตว์เลี้ยง</p></div>
            <div className="divTableCell"><p>ประเภทของสัตว์เลี้ยง</p></div>
            <div className="divTableCell"><p>เบอร์โทรติดต่อ</p></div>
        </div>
          {showNamelist}
        </div>
      </div>
      
      
    </div>
  );

}

export default VaccinePage