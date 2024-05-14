import React, { useState } from "react"

export default function SelectOption() {
    const [select, setSelect] = useState<string>("")
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelect(e.target.value)
    }
  return (
    <div>
        <select onChange={handleChange} name="" id="">
            <option selected value="Nam">Nam</option>
            <option value="Nữ">Nữ</option>
            <option value="Khác">Khác</option>
        </select>
    </div>
  )
}
