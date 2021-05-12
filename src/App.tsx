import React, { useEffect } from 'react';

import { initAmplitude } from "./utilities/amplitude";
import Main from "./components/Main";


function App() {

  useEffect(() => {
    initAmplitude();
  }, []);

  return (
    <Main />
  );
}

export default App;
