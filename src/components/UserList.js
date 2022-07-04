import React from "react";
import { useSelector } from "react-redux";

function UserList() {
  const usersList = useSelector((state) => state.userList.usersList);

  return (
    <div>
      <table class="table table-hover table-striped table-bordered vh-100" >
        <thead>
          <tr>
            <th>Name</th>
            <th>ID</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {usersList.map((item) => (
            <tr>
              <td className="text-white" scope="row">{item.id}</td>
              <td className="text-white">{item.name}</td>
              <td className="text-white">{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
