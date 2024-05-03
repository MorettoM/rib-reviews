import logo from "./assets/logoribs.jpg";
import "./App.css";
import { useEffect, useState } from "react";
import Rating from "@material-ui/lab/Rating";
import { TextareaAutosize } from "@material-ui/core";

function App() {
  const [rating, setRating] = useState(0);

  useEffect(() => {
    if (rating > 3) {
      setTimeout(() => {
        window.open(
          "https://search.google.com/local/writereview?placeid=ChIJv53bi621vJUREPI-e0F1duo",
          "_blank"
        );
      }, 300);
    }
  }, [rating]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <body>
        <h3>¿Como fue tu experiencia?</h3>

        <Rating
          name="pristine"
          value={rating}
          onChange={(event, newValue) => {
            setRating(newValue);
          }}
          iconHover={{ color: "gold" }}
          iconFilled={{ color: "gold" }}
          size="large"
        />

        {rating <= 3 ? (
          <TextareaAutosize placeholder="Dejanos un comentario" />
        ) : null}
      </body>
    </div>
  );
}

export default App;
