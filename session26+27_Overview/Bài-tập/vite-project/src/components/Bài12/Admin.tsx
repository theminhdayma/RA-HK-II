import React from 'react'
import "./Admin.css"

import InfoStudent from './InfoStudent'
import TableStudent from './TableStudent'
export default function Admin() {
  return (
    <div className='backgound02'>
        <TableStudent></TableStudent>
        <InfoStudent></InfoStudent>
    </div>
  )
}
