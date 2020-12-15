import React, { useState } from "react";
import "./styles.css";
const emojiSymbolDictionary = {
  "💢": "Anger Symbol",
  "💬": "Speech Balloon",
  "👁️‍🗨️": "Eye in Speech Bubble",
  "🗨️": "Left Speech Bubble",
  "🗯️": "Right Anger Bubble",
  "💭": "Thought Balloon",
  "💤": "Zzz",
  "💮": "White Flower",
  "♨️": "Hot Springs",
  "💈": "Barber Pole",
  "🛑": "Stop Sign",
  "🌀": "Cyclone",
  "♠️": "Spade Suit",
  "♥️": "Heart Suit",
  "♦️": "Diamond Suit",
  "♣️": "Club Suit",
  "🃏": "Joker",
  "🀄": "Mahjong Red Dragon",
  "🎴": "Flower Playing Cards",
  "🔇": "Muted Speaker",
  "🔈": "Speaker Low Volume",
  "🔉": "Speaker Medium Volume",
  "🔊": "Speaker High Volume",
  "📢": "Loudspeaker",
  "📣": "Megaphone",
  "📯": "Postal Horn",
  "🔔": "Bell",
  "🔕": "Bell with Slash",
  "🎵": "Musical Note",
  "🎶": "Musical Notes",
  "💹": "Chart Increasing with Yen",
  "🛗": "Elevator",
  "🏧": "ATM Sign",
  "🚮": "Litter in Bin Sign",
  "🚰": "Potable Water",
  "♿": "Wheelchair Symbol",
  "🚹": "Men’s Room",
  "🚺": "Women’s Room",
  "🚻": "Restroom",
  "🚼": "Baby Symbol",
  "🚾": "Water Closet",
  "⚠️": "Warning",
  "🚸": "Children Crossing",
  "⛔": "No Entry",
  "🚫": "Prohibited",
  "🚳": "No Bicycles",
  "🚭": "No Smoking",
  "🚯": "No Littering",
  "🚱": "Non-Potable Water",
  "🚷": "No Pedestrians",
  "📵": "No Mobile Phones",
  "🔞": "No One Under Eighteen",
  "☢️": "Radioactive",
  "☣️": "Biohazard",
  "↩️": "Right Arrow Curving Left",
  "↪️": "Left Arrow Curving Right",
  "⤴️": "Right Arrow Curving Up",
  "⤵️": "Right Arrow Curving Down",
  "🔃": "Clockwise Vertical Arrows",
  "🔄": "Counterclockwise Arrows Button",
  "🔙": "Back Arrow",
  "🔚": "End Arrow",
  "🔛": "On! Arrow",
  "🔜": "Soon Arrow",
  "🔝": "Top Arrow",
  "🛐": "Place of Worship",
  "⚛️": "Atom Symbol",
  "🕉️": "Om-chant",
  "✡️": "Star of David",
  "☸️": "Wheel of Dharma",
  "☯️": "Yin Yang",
  "✝️": "Latin Cross",
  "☦️": "Orthodox Cross",
  "☪️": "Star and Crescent",
  "☮️": "Peace Symbol",
  "🕎": "Menorah",
  "🔯": "Dotted Six-Pointed Star",
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
  "⛎": "Ophiuchus",
  //video,music buttons
  "🔀": "Shuffle Tracks Button",
  "🔁": "Repeat Button",
  "🔂": "Repeat Single Button",
  "▶️": "Play Button",
  "⏩": "Fast-Forward Button",
  "⏭️": "Next Track Button",
  "⏯️": "Play or Pause Button",
  "◀️": "Reverse Button",
  "⏪": "Fast Reverse Button",
  "⏮️": "Last Track Button",
  "🔼": "Upwards Button",
  "⏫": "Fast Up Button",
  "🔽": "Downwards Button",
  "⏬": "Fast Down Button",
  "⏸️": "Pause Button",
  "⏹️": "Stop Button",
  "⏺": "Record Button",
  "⏏️": "Eject Button",
  "🎦": "Cinema",
  "🔅": "Dim Button",
  "🔆": "Bright Button",
  "📶": "Antenna Bars",
  "📳": "Vibration Mode",
  "📴": "Mobile Phone Off",
  "♀️": "Female Sign",
  "♂️": "Male Sign",
  "⁉️": "Exclamation Question Mark",
  "〰️": "Wavy Dash",
  "💱": "Currency Exchange",
  "💲": "Heavy Dollar Sign",
  "⚕️": "Medical Symbol",
  "♻️": "Recycling Symbol",
  "⚜️": "Fleur-de-lis",
  "🔱": "Trident Emblem",
  "📛": "Name Badge",
  "🔰": "Japanese Symbol for Beginner",
  "⭕": "Hollow Red Circle",
  "✅": "Check Mark Button",
  "☑️": "Check Box with Check",
  "✔️": "Check Mark",
  "➰": "Curly Loop",
  "➿": "Double Curly Loop",
  "〽️": "Part Alternation Mark",
  "✳️": "Eight-Spoked Asterisk",
  "✴️": "Eight-Pointed Star",
  "❇️": "Sparkle",
  "©️": "Copyright",
  "®": "Registered",
  "™️": "Trade Mark",
  "🔠": "Input Latin Uppercase",
  "🔡": "Input Latin Lowercase",
  "🔢": "Input Numbers",
  "🔣": "Input Symbols",
  "🔤": "Input Latin Letters",
  "🅰️": "A Button (Blood Type)",
  "🆎": "AB Button (Blood Type)",
  "🅱️": "B Button (Blood Type)",
  "🆑": "CL Button",
  "🆒": "Cool Button",
  "🆓": "Free Button",
  ℹ️: "Information",
  "🆔": "ID Button",
  "Ⓜ️": "'Circled M",
  "🆕": "New Button",
  "🆖": "NG Button",
  "🅾️": "O Button (Blood Type)",
  "🈁": "Japanese “Here” Button",
  "🈂️": "Japanese “Service Charge” Button",
  "🈷️": "Japanese “Monthly Amount” Button",
  "🈶": "Japanese “Not Free of Charge” Button",
  "🈯": "Japanese “Reserved” Button",
  "🉐": "Japanese “Bargain” Button",
  "🈹": "Japanese “Discount” Button",
  "🈚": "Japanese “Free of Charge” Button",
  "🈲": "Japanese “Prohibited” Button",
  "🉑": "Japanese “Acceptable” Button",
  "🈸": "Japanese “Application” Button",
  "🈴": "Japanese “Passing Grade” Button",
  "🈳": "Japanese “Vacancy” Button",
  "㊗️": "Japanese “Congratulations” Button",
  "㊙️": "Japanese “Secret” Button",
  "🈺": "Japanese “Open for Business” Button",
  "🈵": "Japanese “No Vacancy” Button",

  "🔶": "Large Orange Diamond",
  "🔷": "Large Blue Diamond",
  "🔸": "Small Orange Diamond",
  "🔹": "Small Blue Diamond",
  "💠": "Diamond with a Dot",
  "🔘": "Radio Button",
  "🔳": "White Square Button",
  "🔲": "Black Square Button"
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
