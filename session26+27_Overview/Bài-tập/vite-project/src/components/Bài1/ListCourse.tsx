import React, { Component } from 'react'
import "./ListCourse.css"
export default class ListCourse extends Component {
  render() {
    return (
      <div>
        <h3>Danh sách khóa học</h3>
        <ol>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>ReactJS</li>
        </ol>
      </div>
    )
  }
}
