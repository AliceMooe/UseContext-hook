import React, { useContext } from 'react';
import { FirstContext } from './firstContent';


const Child3 = () => {
  const {userName} = useContext(FirstContext)
  return (
    <section>
    <div>Child3 </div>
    <div>
      form child 3
      <br />
      {userName}
    </div>
    
    </section>
  );
};

export default Child3;