import React from 'react';
import { users } from 'data/users';
import UsersListItem from 'components/UsersListItem/UsersListItem';

const UsersList = () => (
  <div>
    <ul>
      {/* {users.map(({ name, average, attendance }) => ( */}
      {/* <UsersListItem name={name} average={average} attendance={attendance} /> */}
      {users.map((userData) => (
        <UsersListItem userData={userData} />
      ))}
    </ul>
  </div>
);

export default UsersList;
