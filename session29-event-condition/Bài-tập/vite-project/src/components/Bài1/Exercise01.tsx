import React from 'react'

export default function Exercise01() {
    const click = () => {
        console.log("Clicked");       
    }
  return (
    <div>
        <button onClick={click}>Click me</button>
    </div>
  )
}
