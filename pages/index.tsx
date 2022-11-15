import type { NextPage } from 'next'
import React, {useReducer} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch, RootState } from "../store";

interface ITransformAction{
  type: string,
  payload: number
}

interface ITransformState{
  position: {x:number, y:number, z:number}
}

function transformReducer(state: ITransformState, action:ITransformAction) {
  const {type, payload} = action;
  switch (type) {
    case "position.x":
      return {
        ...state,
        value: state.position.x = payload
      }
    case "position.y":
      return {
        ...state,
        value: state.position.y = payload
      }
    case "position.z":
      return {
        ...state,
        value: state.position.z = payload
      }
    default:
      return state;
  }
}

const Home: NextPage = () => {
  const [state, dispatch] = useReducer(transformReducer, {position: {x:0, y:0, z:0}});
  const stateRedux = useSelector((state:RootState) => state.counter);
  const dispatchRedux = useDispatch<Dispatch>();

  function onChangeValue(evt:React.ChangeEvent<HTMLInputElement>) {
    const {name, value} = evt.currentTarget;
    // 注意這邊從input來的值會是 string型別所以要把它轉成number型別
    console.log(name, value)
    dispatch({type:name, payload: +value});
  }

  return (
    <div>
      <p>counter</p>
      <span>counter: {stateRedux}</span>
      <button onClick={() => {
        dispatchRedux.counter.incrementAsync(1);
      }}>add counter</button>
      <p>Position</p>
      <span>X:<input type={"number"} value={state.position.x} name={"position.x"} onChange={onChangeValue} /></span>
      <span>Y:<input type={"number"} value={state.position.y} name={"position.y"} onChange={onChangeValue} /></span>
      <span>Z:<input type={"number"} value={state.position.z} name={"position.z"} onChange={onChangeValue} /></span>
    </div>
  )
}

export default Home
