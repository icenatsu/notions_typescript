'use client'
import { useEffect } from "react";

const Test = () => {

 const test1 = () => '1'
 
 
 useEffect(() => {
    test1()

  
  },[]);
    


  return (
    <div>
      test
    </div>
  );
};

export default Test;
