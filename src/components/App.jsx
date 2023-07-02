import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia"

// function createEntry(emo){
//     return (<Entry
//             key={emo.id}
//             name={emo.name}
//             emoji={emo.emoji}
//             meaning={emo.meaning}
//           />)
// }

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map( emo =>
          <Entry
            key={emo.id}
            name={emo.name}
            emoji={emo.emoji}
            meaning={emo.meaning}
          />
        )}
      </dl>
    </div>
  );
}

export default App;
