import React from "react";
import "./../App.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setUserName } from "../redux/actions";

function Users() {
  const userName = useSelector((state) => state.user.userName);
  const dispatch = useDispatch();

  return (
    <div className="card" >
      <div className="card-header text-dark">UserComponent</div>
      <div className="card-body">
        <h3 className="text-danger">{userName}</h3>
      <button onClick={()=> dispatch(setUserName('farhad'))} className="btn btn-primary">SetOldName</button>

        <input value={userName} onChange={(event) => dispatch(setUserName(event.target.value))} className="form-control mt-3" />

      </div>

    </div>
  );
}

export default Users;
