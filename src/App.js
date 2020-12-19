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
  var [emojiMeaning, setEmojiMeaning] = useState("Sign name appears here!");
  function emojiInputHandler(event) {
    var userEmojiInput = event.target.value;
    emojiMeaning = emojiSymbolDictionary[userEmojiInput];
    if (emojiMeaning === undefined) {
      emojiMeaning = "Oops!!try signs only from the list";
    }
    setEmojiMeaning(emojiMeaning);
  }
  const listEmojiKeys = Object.keys(emojiSymbolDictionary);
  function listItemClickHandler(emoji) {
    setEmojiMeaning(emojiSymbolDictionary[emoji]);
  }
  //styling
  const styleEmoji = {
    padding: "0.5rem",
    margin: "0.1rem",
    textDecoration: "none",
    cursor: "pointer",
    display: "inline",
    overflow: "hidden",
    fontSize: "2rem"
  };
  return (
    <div
      className="App"
      style={{
        backgroundColor: "#ffff",
        color: "#24292e",
        margin: "0px"
      }}
    >
      <h1>Find zodiac sign symbol</h1>

      <h3 style={{ color: "#00000099" }}>Click on symbol to know your sign</h3>
      <input
        type="text"
        style={{
          padding: "1rem",
          borderRadius: "1rem",
          margin: "10px",
          border: "solid 2px rgb(74,74,74)"
        }}
        onChange={emojiInputHandler}
        placeholder="Enter emoji to find meaning"
      />
      <div>
        <h2
          style={{
            color: "blueviolet",
            padding: "1rem",
            margin: "2rem"
          }}
        >
          {emojiMeaning}
        </h2>
      </div>
      {listEmojiKeys.map((emoji, index) => (
        <span
          style={styleEmoji}
          key="emojis"
          onClick={() => listItemClickHandler(emoji)}
        >
          {emoji + " "}
        </span>
      ))}

      <footer className="footer">
        <div className="footer-header">Let's connect on</div>
        <ul className="social-links list-non-bullet">
          <li className="list-item-inline">
            <a className="link" href="https://github.com/Manasa1013">
              <em className="fab fa-github fa-2x"></em>
            </a>
          </li>
          <li className="list-item-inline">
            <a
              className="link"
              href="https://www.linkedin.com/in/manasa-mandalreddy/"
            >
              <em className="fab fa-linkedin fa-2x"></em>
            </a>
          </li>
          <li className="list-item-inline">
            <a className="link" href="https://instagram.com/manasamandalreddy_">
              <em className="fab fa-instagram fa-2x"></em>
            </a>
          </li>
        </ul>
        <div className="footer-copy">Copyright &copy; 2020</div>
      </footer>
    </div>
  );
}
