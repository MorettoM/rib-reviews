import logo from "./assets/logoribs.jpg";
import "./App.css";
import { useEffect, useState } from "react";
import Rating from "@material-ui/lab/Rating";
import { TextareaAutosize } from "@material-ui/core";

function App() {
  const [rating, setRating] = useState(0);

  useEffect(() => {
    if (rating > 3) {
      function isAndroid() {
        return /Android/i.test(navigator.userAgent);
      }

      // Function to detect if the device is an iPhone/iOS
      function isIOS() {
        return /iPhone|iPad|iPod/i.test(navigator.userAgent);
      }

      // Google Maps URL to open on PC
      const webUrl =
        "https://search.google.com/local/writereview?placeid=ChIJv53bi621vJUREPI-e0F1duo";

      // Google Maps URI to open on Android/iOS
      const mobileUrl =
        "https://maps.google.com/?cid=YOUR_CID#lrd=0x0000000000000000:0xYOUR_PLACE_ID,1";

      // Determine which URL to use
      const targetUrl = isAndroid() || isIOS() ? mobileUrl : webUrl;

      setTimeout(() => {
        window.open(targetUrl, "_blank");
      }, 300);
    }
  }, [rating]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="app-body">
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

        {rating <= 3 && rating !== 0 ? (
          <TextareaAutosize placeholder="Dejanos un comentario" />
        ) : null}
      </div>
    </div>
  );
}

export default App;
