import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import Nav from './Nav';

const Samana = ()=>{
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
    setTopic("18 พฤศจิกายน 2566 ช่วงเช้า 10.00 - 11.00 น. บริษัท Idexx ให้ความรู้เกี่ยวกับเครื่องมือตรวจเลือดเพื่อการวินิจฉัยโรค")

    axios.get("https://script.google.com/macros/s/AKfycbzf593oh6z5FW9FIGZrIlueclxhzQB4Tonh-9fM2OTF-fHg3ASeU1vEPIWtFVb5uVjb/exec?action=getUsers")
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
                <div className="divTableCell"><p>{val.testrow5}</p></div>
          </div>
        )}))
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })



    axios.get("https://script.google.com/macros/s/AKfycbzRj7-vNOMRNx4anXeYj904V8ZEP9TDlPjHm9IRrQOZn6BlgfKa43bk9f4OEutX7Bnx/exec?action=getUsers")
    .then(function (response) {
      setNamelist2(response.data)

    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })

    axios.get("https://script.google.com/macros/s/AKfycbwqnq3NiamS4Kc1bWfAn0Pj_voJEF2Q2nBN5ciP5SxiT0rhlOSc8yMhVJZvMto3-B52/exec?action=getUsers")
    .then(function (response) {
      setNamelist3(response.data)

    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })

    axios.get("https://script.google.com/macros/s/AKfycbwFvIdvpEhFcLqA1qN0nucQuKkD9UWeUZt56WJano4NXeAxrUQE4rPOOVFKIAVJkvLesw/exec?action=getUsers")
    .then(function (response) {
      setNamelist4(response.data)

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
      setTopic("18 พฤศจิกายน 2566 ช่วงเช้า 10.00 - 11.00 น. บริษัท Idexx ให้ความรู้เกี่ยวกับเครื่องมือตรวจเลือดเพื่อการวินิจฉัยโรค")
      setShowNamelist(namelist1.map((val,i)=>{
        return(
          <div className="divTableRow" key={i}>
                <div className="divTableCell"><p>{i+1}</p></div>
                <div className="divTableCell"><p>{val.Name}</p></div>
                <div className="divTableCell"><p>{val.nickName}</p></div>
                <div className="divTableCell"><p>{val.Phone}</p></div>
                <div className="divTableCell"><p>{val.Email}</p></div>
                <div className="divTableCell"><p>{val.testrow4}</p></div>
                <div className="divTableCell"><p>{val.testrow5}</p></div>
          </div>
        )}))
    }
    else if(selects === "1")
    {
      setTopic("18 พฤศจิกายน 2566 ช่วงบ่าย 13.00 - 14.00 น. บริษัท Beringer ให้ความรู้เกี่ยวกับนวัตกรรมใหม่ของวัคซีนแมวและความสำคัญของการฉีดวัคซีน")
      setShowNamelist(namelist2.map((val,i)=>{
        return(
          <div className="divTableRow" key={i}>
                <div className="divTableCell"><p>{i+1}</p></div>
                <div className="divTableCell"><p>{val.Name}</p></div>
                <div className="divTableCell"><p>{val.nickName}</p></div>
                <div className="divTableCell"><p>{val.Phone}</p></div>
                <div className="divTableCell"><p>{val.Email}</p></div>
                <div className="divTableCell"><p>{val.testrow4}</p></div>
                <div className="divTableCell"><p>{val.testrow5}</p></div>
          </div>
        )}))
    }
    else if(selects === "2")
    {
      setTopic("19 พฤศจิกายน 2566 ช่วงเช้า 10.00 - 11.00 น. บริษัท DKSH ให้ความรู้เกี่ยวกับเครื่องมือในการตรวจตา")
      setShowNamelist(namelist3.map((val,i)=>{
        return(
          <div className="divTableRow" key={i}>
                <div className="divTableCell"><p>{i+1}</p></div>
                <div className="divTableCell"><p>{val.Name}</p></div>
                <div className="divTableCell"><p>{val.nickName}</p></div>
                <div className="divTableCell"><p>{val.Phone}</p></div>
                <div className="divTableCell"><p>{val.Email}</p></div>
                <div className="divTableCell"><p>{val.testrow4}</p></div>
                <div className="divTableCell"><p>{val.testrow5}</p></div>
          </div>
        )}))
    }
    else if(selects === "3")
    {
      setTopic("19 พฤศจิกายน 2566 ช่วงบ่าย 13.00 - 14.00 น. บริษัท Doctor Nok ให้ความรู้เกี่ยวกับโภชนาการบำบัดสำหรับน้องสุนัขและน้องแมวโรคอ้วน")
      setShowNamelist(namelist4.map((val,i)=>{
        return(
          <div className="divTableRow" key={i}>
                <div className="divTableCell"><p>{i+1}</p></div>
                <div className="divTableCell"><p>{val.Name}</p></div>
                <div className="divTableCell"><p>{val.nickName}</p></div>
                <div className="divTableCell"><p>{val.Phone}</p></div>
                <div className="divTableCell"><p>{val.Email}</p></div>
                <div className="divTableCell"><p>{val.testrow4}</p></div>
                <div className="divTableCell"><p>{val.testrow5}</p></div>
          </div>
        )}))
    }
  
    
  
  }
  
  return (
    <div className="App">
        <Nav/>
      <h1 className='headsamana'>ลงทะเบียนงานสัมมนาฉลองครบรอบ 17 ปีโรงพยาบาลสัตว์หมอสุรศักดิ์และเพื่อน {topic}</h1>
      <label className='labelBranch'>เลือกวันที่ต้องการดูและสาขา:</label>
        <select value={selects} onChange={e=>setSelects(e.target.value)} name="vaccine" id="vaccine">
          <option value="0">18 พฤศจิกายน 2566 ช่วงเช้า บริษัท Idexx</option>
          <option value="1">18 พฤศจิกายน 2566 ช่วงบ่าย บริษัท Beringer</option>
          <option value="2">19 พฤศจิกายน 2566 ช่วงเช้า บริษัท DKSH</option>
          <option value="3">19 พฤศจิกายน 2566 ช่วงบ่าย บริษัท Doctor Nok</option>
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
            <div className="divTableCell"><p>อายุสัตว์เลี้ยง</p></div>
            <div className="divTableCell"><p>เบอร์โทรติดต่อ</p></div>
        </div>
          {showNamelist}
        </div>
      </div>
      
      
    </div>
  );

}

export default Samana