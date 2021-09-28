import React from "react";
import Dictionary from "./Dictionary";
import emojipedia from "../emojipedia";

function createDectionary(emojiped){
  return <Dictionary 
  key = {emojiped.id}
  emoji = {emojiped.emoji}
  name = {emojiped.name}
  meaning = {emojiped.meaning}
  />;
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      {emojipedia.map(createDectionary)}
      {/*<Dictionary
        emoji={emojipedia[0].emoji}
        name={emojipedia[0].name}
        meaning={emojipedia[0].meaning}
      />
      <Dictionary
        emoji={emojipedia[1].emoji}
        name={emojipedia[1].name}
        meaning={emojipedia[1].meaning}
      />
      <Dictionary
        emoji={emojipedia[2].emoji}
        name={emojipedia[2].name}
        meaning={emojipedia[2].meaning}
      />*/}
    </div>
  );
}

export default App;
