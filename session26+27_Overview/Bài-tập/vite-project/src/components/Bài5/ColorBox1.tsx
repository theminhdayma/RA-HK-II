import React from 'react'

export default function ColorBox1() {
  return (
    <>
        <div style={{color: "while", display: "flex", gap: 16}}>
            <div style={{width: 200, height: 200, display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "red"}}>Box</div>
            <div style={{width: 200, height: 200, display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "blue"}}>Box</div>
            <div style={{width: 200, height: 200, display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "green"}}>Box</div>
        </div>    
    </>
  )
}
