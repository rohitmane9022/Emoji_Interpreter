import "./styles.css";
import { useState } from "react";

const EmojiDictionary = {
  "😊": "Smiling",
  "😔": "Sad",
  "👋": "Hey",
  "😍": "Love",
  "🏃🏽": "Run",
  "🧠": "Brain",
  "😴": "Sleep",
  "🥵": "Hot Face"
};

var EmojiWeKnow = Object.keys(EmojiDictionary);
var head = "Emoji Interpreter";
// var color = "red";

export default function App() {
  var [meaning, setmeaning] = useState("");

  function emojiHandler(event) {
    var usechange = event.target.value;
    var meaning = EmojiDictionary[usechange];

    if (meaning === undefined) {
      meaning = (
        <span1 style={{ color: "red" }}>
          "we don't have this in our Database"
        </span1>
      );
    }
    setmeaning(meaning);
  }
  function EmojiClickhandler(item) {
    var meaning = EmojiDictionary[item];
    setmeaning(meaning);
  }
  return (
    <div className="App">
      <h1>{head}</h1>
      <input onChange={emojiHandler}></input>
      <h2> {meaning} </h2>

      <h3 class="emojiknow">Emoji We Know </h3>
      {EmojiWeKnow.map(function (item) {
        return (
          <li onClick={() => EmojiClickhandler(item)} keys={item}>
            {item}
          </li>
        );
      })}
    </div>
  );
}

/*
* things to know
* class ==> classname
* style ==> takes on object instead of  {{object}}
* {thats was template and inner {{this is object you can right just like style have example backgroundcolor:and enter varinble name thats was diffrent"color"}}}

* creating clickhandler whenever click happen to show me output as well "click!"
so we have to right fucntion for it 

* onClick is click fucntion /

* VISER -- View => Interact => state in Event handler => Render

*/
