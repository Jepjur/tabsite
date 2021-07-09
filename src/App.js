import React from 'react';
import Tabs from "./components/Tabs"; 
import './App.css';

function App() {
  return (
    <div>
      <h1>Tabs Demo</h1>
      <Tabs> 
       <div label="Tab1"> 
       Lorem ipsum dolor sit amet
       </div> 
       <div label="Tab2"> 
       consectetur adipiscing elit
       </div> 
       <div label="Tab3"> 
       ed do eiusmod
       </div> 
     </Tabs> 
    </div>
  );
}

export default App;