import React, { Component } from 'react';

interface User {
  firstName: string;
  lastName: string;
}

interface Format {
  user: User;
}

export default class Bai6 extends Component<Format> {
  formatName(user: User): string {
    return `${user.lastName} ${user.firstName}`;
  }

  user = {
    firstName: 'Văn Nam',
    lastName: 'Nguyễn',
  };

  render() {
    return (
      <div>
        Bài 6
        <br />
        <h4>Họ và tên: {this.formatName(this.user)}</h4>
      </div>
    );
  }
}