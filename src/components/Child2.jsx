import React, { useContext } from 'react';
import { FirstContext } from './firstContent';


const Child2 = () => {
  const {liveIn} = useContext(FirstContext);
  return (
    <section>
    <div>Child2</div>
    <div>{liveIn}</div>
   
    </section>
  );
};

export default Child2;