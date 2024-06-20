import React, { useEffect, useState } from "react";
import Index from "./components/Index";
import "./style/bootstrap.min.css"
import "./style/style.css"

export default function App() {
  // const [dateMuon, setDateMuon] = useState<string>("");
  // const [dateTra, setDateTra] = useState<string>("");
  // const [minDate, setMinDate] = useState<string>("");
  // useEffect(() => {
  //   let newDate = new Date().toISOString().split("T")[0];
  //   setMinDate(newDate);
  // }, []);

  // useEffect(()=> {
    
  // })
  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setDateMuon(e.target.value)
  // };
  return (
    <div>
      <Index />
      {/* <label htmlFor="">Ngày mượn</label>
      <input onChange={handleChange} min={minDate} type="date" />
      <br />
      <label htmlFor="">Ngày trả</label>
      <input onChange={handleChange} min={minDate} type="date" /> */}
    </div>
  );
}
