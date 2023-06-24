import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";
import { fetchUsers } from "./userSlice";

const UserView = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    useEffect(() => {
        dispatch(fetchUsers())
    },[])
  return (
    <Div>
      <h2>List Of Users</h2>
      {user.loading && <div>Loading...</div>}
      {!user.loading && user.error && <div>{user.error}</div>}
      {!user.loading && user.users.length &&
        <ul>
            {
                user.users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))
            }
        </ul>
      
      }


    </Div>
  );
};

const Div = styled.div`
  margin-top: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ul{
    list-style-type: none;
  }
`;

export default UserView;
