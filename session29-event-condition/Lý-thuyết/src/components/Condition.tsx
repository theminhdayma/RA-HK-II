import React, { useState } from 'react'
import Modal from './Modal';


export default function Condition() {

    const [active, setActive] = useState<boolean>(false)
    const handleClick = () => {
        console.log("Ấn vào hàm !!");
        setActive(!active)
    }
  return (
    <div>
        Condition (Điều kiện để render)
        {active ? <Modal></Modal>: ""}
        <br /><br /><br />
        <button onClick={handleClick}>Click</button>
    </div>
  )
}
