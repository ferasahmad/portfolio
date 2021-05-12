import React, { useEffect } from 'react';

import { initAmplitude } from "./utilities/amplitude";
import Main from "./components/Main";


function App() {

  useEffect(() => {
    const response = initAmplitude();
    console.log("response");
    console.log(response);
  }, []);

  return (
    <Main />
  );
}

export default App;
