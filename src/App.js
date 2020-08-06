import React, {useState, useEffect} from 'react';
import {isChrome, isFirefox, isWindows, isMacOs, isEdge, 
osVersion,osName, fullBrowserVersion, browserVersion,
browserName} from 'react-device-detect';

function App() {
  const [browser, setBrowser] = useState(' ');
  const [window, setWindow] = useState('');
  useEffect(()=>{
    if(isFirefox){
      setBrowser('Firefox');
    }

    if(isChrome){
      setBrowser('Chrome');
    }

    if(isEdge){
      setBrowser('Microsoft Edge');
    }

  });

  useEffect(()=>{
   if(isWindows){
     setWindow('Windows')
   }
   if(isMacOs){
     setWindow('Mac')
   }

  }, []);
   

  return (
    <div>
    <fieldset>
     <center>
        <div style={top}>
          <h2>Here we are using some </h2>
          <h1>React-Device-Detect's Selectors and Views</h1>
        </div>
            <hr/>
        <h3 style={{color:"blue"}}>
          The underline values different for different browser and Operating System.
        </h3>
            <hr/>
        <div style={middle}>
          <h1>You are using the browser : <i><u> {browser}</u></i></h1>
          <h1>You are using <i><u>{window} {osVersion} </u></i>  Operating System </h1>
        </div>
            <hr/>
        <h2>Details</h2>
        <div style={bottom}>
          <h3>Operating System : <u>{osName}</u> </h3>
          <h3>Browser Name : <u>{browserName}</u></h3>
          <h3>Browser Version : <u>{browserVersion}</u> </h3>
          <h3>Full-Browser Version : <u>{fullBrowserVersion}</u></h3>
        </div>
            <hr/>
      </center>
    </fieldset>
    </div>
  );
}

const top = {
  color:"darkgreen"
}

const middle= {
  color: "brown"
}

const bottom = {
  color:"darkgoldenrod"
}

export default App;
