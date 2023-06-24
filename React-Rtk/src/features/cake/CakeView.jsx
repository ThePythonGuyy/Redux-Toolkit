import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  ordered as cakeOrdered,
  restocked as cakeRestocked,
} from "./cakeSlice";

const CakeView = () => {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <Div>
      <h2>Number of cakes - {numOfCakes}</h2>
      <div>
        <button onClick={() => dispatch(cakeOrdered())}>Order Cakes</button>
        <button onClick={() => dispatch(cakeRestocked(3))}>
          Restock Cakes
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

export default CakeView;
