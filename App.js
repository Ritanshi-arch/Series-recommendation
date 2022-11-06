import "./styles.css";
import React, { useState } from "react";

export default function App() {
  var seriesObject = {
    Adventure: [
      {
        name: "Lost",
        rating: "8.3/10",
        description:
          "The survivors of a plane crash are forced to work together in order to survive on a seemingly deserted tropical island."
      },
      {
        name: "The Umbrella Academy ",
        rating: "7.9/10",
        description:
          "A family of former child heroes, now grown apart, must reunite to continue to protect the world."
      }
    ],
    Fantasy: [
      {
        name: " Stranger Things ",
        rating: "8.7/10",
        description:
          "When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces in order to get him back."
      },
      {
        name: " Dune",
        rating: "7.1/10",
        description:
          "A noble family becomes embroiled in a war for control over the galaxy's most valuable asset while its heir becomes troubled by visions of a dark future."
      }
    ],
    Scifi: [
      {
        name: "The Peripheral",
        rating: "8.3/10",
        description:
          "Set in the future when technology has subtly altered society, a woman discovers a secret connection to an alternate reality as well as a dark future of her own."
      },
      {
        name: "Black Mirror",
        rating: "8.8/10",
        description:
          "An anthology series exploring a twisted, high-tech multiverse where humanity's greatest innovations and darkest instincts collide."
      }
    ]
  };

  var [selectedGenre, setGenre] = useState("Scifi");

  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      {/* <span className="header" role="img" aria-label="unicorn">
        🦄 ritanshi's series recommendation{" "}
      </span> */}
      <div className="headerdiv">
        <h1 className="header">
          <span role="img" aria-label="unicorn">
            🦄
          </span>{" "}
          Ritanshi's Series Recommendation{" "}
        </h1>
      </div>

      <p style={{ padding: "2rem 0 0", whitespace: "nowrap" }}>
        Check out my series recommendations. Select a genre to get started!
      </p>
      <br></br>
      <div className="genreContainer">
        {Object.keys(seriesObject).map((genre) => (
          <button
            key={genre}
            className="genreList"
            onClick={() => genreClickHandler(genre)}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div>
        <ul>
          {seriesObject[selectedGenre].map((series) => (
            <li className="seriesList" key={series.name}>
              <div className="seriesName">{series.name}</div>
              <div className="seriesRating">{series.rating}</div>
              <div className="seriesDescription">{series.description}</div>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <ul></ul>
      </div>
    </div>
  );
}