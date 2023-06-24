import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  ordered as iceCreamOrdered,
  restocked as iceCreamRestocked,
} from "./iceCreamSlice";

const IceCreamView = () => {
  const numOfIceCream = useSelector((state) => state.iceCream.numOfIceCream);
  const dispatch = useDispatch();
  return (
    <Div>
      <h2>Number of IceCreams - {numOfIceCream}</h2>
      <div>
        <button onClick={() => dispatch(iceCreamOrdered(2))}>
          Order IceCreams
        </button>
        <button onClick={() => dispatch(iceCreamRestocked(4))}>
          Restock IceCreams
        </button>
      </div>
    </Div>
  );
};

const Div = styled.div`
  margin-top: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div > * {
    display: inline-block;
    margin-right: 15px;
  }
`;

export default IceCreamView;
