import React, { useState } from "react";
import "./styles.css";
const emojiSymbolDictionary = {
  //Zodiac signs
  "♈": "Aries",
  "♉": "Taurus",
  "♊": "Gemini",
  "♋": "Cancer",
  "♌": "Leo",
  "♍": "Virgo",
  "♎": "Libra",
  "♏": "Scorpio",
  "♐": "Sagittarius",
  "♑": "Capricorn",
  "♒": "Aquarius",
  "♓": "Pisces",
  "⛎": "Ophiuchus"
};

export default function App() {
  var [emojiMeaning, setEmojiMeaning] = useState("");
  function emojiInputHandler(event) {
    var userEmojiInput = event.target.value;
    emojiMeaning = emojiSymbolDictionary[userEmojiInput];
    if (emojiMeaning === undefined) {
      emojiMeaning = "Oops!!try emojis only from this list";
    }
    setEmojiMeaning(emojiMeaning);
  }
  const listEmojiKeys = Object.keys(emojiSymbolDictionary);
  function listItemClickHandler(emoji) {
    setEmojiMeaning(emojiSymbolDictionary[emoji]);
  }
  //styling
  function styleEmoji() {
    const manStyle = {
      padding: "1rem 2rem",
      margin: "2rem",
      textDecoration: "none",
      cursor: "pointer",
      margin: "5px",
      display: "inline",
      textAlign: "none",
      overflow: "hidden",
      fontSize: "2rem"
    };
    return manStyle;
  }
  return (
    <div
      className="App"
      style={{ backgroundColor: "#009688", color: "#fffff0" }}
    >
      <h1>Most unused symobols </h1>

      <h3 style={{ color: "#00000099" }}>
        Ever wondered what this emojis mean
      </h3>
      <input
        type="text"
        style={{
          padding: "1rem",
          margin: "10px",
          border: "solid 2px rgb(74,74,74)"
        }}
        onChange={emojiInputHandler}
        placeholder="Enter emoji to find meaning"
      />
      <h2
        style={{
          color: "black",
          padding: "1rem",
          margin: "2rem"
        }}
      >
        {emojiMeaning}
      </h2>
      <ul>
        {listEmojiKeys.map((emoji, index) => (
          <li
            style={styleEmoji()}
            key="emojis"
            onClick={() => listItemClickHandler(emoji)}
          >
            {emoji}
          </li>
        ))}
      </ul>
    </div>
  );
}
