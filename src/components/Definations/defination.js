import React from "react";
import "./defination.css";
const Defination = ({ darkmode,word, category, meanings }) => {
  return (
    <div className="meanings">
      {meanings[0] && word && category === "en" && (
        <audio
          src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
          style={{ backgroundColor: "#fff", borderRadius: 10,width:"100%" }}
          controls
        ></audio>
      )}
      {word === "" ? (
        <span className="subTitle">Start by Typing a word in Search</span>
      ) : (
        meanings.map((mean) =>
          mean.meanings.map((item) =>
            item.definitions.map((def) => (
              <div
                className="singlemean"
                style={{ backgroundColor: darkmode?"#3b5360":"white", color:darkmode?"white": "black" }}
              >
                <b>{def.definition}</b>
                <br style={{ backgroundColor: "black", width: "100%" }}></br>
                {def.example && (
                  <span>
                    <b>Example :</b>

                    {def.example}
                  </span>
                )}
                {def.synonyms.length !== 0 && (
                  <span>
                    <b>Synonyms :</b>
                    {def.synonyms.map((s) => `${s}, `)}
                  </span>
                )}
              </div>
            ))
          )
        )
      )}
    </div>
  );
};

export default Defination;
