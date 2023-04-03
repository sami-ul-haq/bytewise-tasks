import React, { useEffect, useState } from 'react';

const Counter = () => {

    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);


    const counterFunc1 = () => {
        setCounter1(counter1=>counter1+1);
    }

    const counterFunc2 = () => {
        setCounter2(counter2=>counter2+1);
    }

    useEffect(() => {
      console.log("Increment with useEffect");
    }, [counter2])
    

  return (
    <div>

        <h2>Counter <b>({counter1})</b></h2>
        <button onClick={counterFunc1}>Increse Counter 1</button>


        <h2>Counter With useEffct <b>({counter2})</b></h2> 
        <button onClick={counterFunc2}>Increse Counter 2</button>
        <p>See console for more info</p>    

    </div>
  )
}

export default Counter