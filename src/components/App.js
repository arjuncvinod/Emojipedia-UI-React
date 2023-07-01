import React from "react";
import Entry from "./Entry";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        
       <Entry />
      </dl>
    </div>
  );
}

export default App;
