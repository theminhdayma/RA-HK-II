import React, { Component } from 'react';

interface User {
    id: number;
    name: string;
    address: string;
    email: string;
}

interface Props {
    users: User[];
}

export default class Children01 extends Component<Props> {
  render() {
    const { users } = this.props;
    return (
      <div>
        <h3>Danh sách User</h3>
        {users.map((user, index) => (
            <ul key={index}>
                <li>ID: {user.id}</li>
                <li>Name: {user.name}</li>
                <li>Address: {user.address}</li>
                <li>Email: {user.email}</li>
            </ul>
        ))}
      </div>
    )
  }
}
