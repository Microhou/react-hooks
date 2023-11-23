
// const { createRoot }  = ReactDOM;
// const { useState, useReducer, useEffect } = React;
// console.log("hello", ReactDOM);
// let t = null;
/**
 * state  => view
 * 视图上的某个状态发生变化，视图就会更新。
 * 函数是一等公民
 * @returns 
 */

import { root, useState } from './React';
function App() {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
    // const [count, dispatch] = useReducer(countReducer, 0);
    // const [second, setSecond] = useState(0);

    // function countReducer(initialState, action) {
    //     switch (action.type) {
    //         case 'ADD':
    //             return initialState + action.payload;
    //         case 'DEC':
    //             return initialState - action.payload;
    //         default:
    //             return initialState;
    //     }
    // }
    // function handleCount() {
    // //    setCount(count + 1)
    //     dispatch({type: "ADD", payload: 1})
    // }
    // 如果依赖是undefined => 任何状态改变都会重新执行回调
    // 如果不是数组，会报警
    //der array 
    // 元素为状态， 状态更新则，回调执行
   

    // useEffect(() => {
    //     console.log("useEffect")
    //     t = window.setInterval(() => {
    //         setSecond((second => second + 1))
    //     }, 1000)

    //     return () => {  // 当页面卸载时，清除副作用
    //         clearInterval(t);
    //         t = null;
    //     }
    // },[])
    return (
        <>
            <div>hello react hook</div>
            <div>{count}</div>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
            <div>{count2}</div>
            <button onClick={() => setCount2(count2 => count2 + 1)}>+</button>
            <button onClick={() => setCount2(count2 - 1)}>-</button>
            {/* <button onClick={handleCount}>+</button> */}

            {/* <div>second {second}</div> */}
        </>
        
    )
}

root.render(<App />);
export default App;